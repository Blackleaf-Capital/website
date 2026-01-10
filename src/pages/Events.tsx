import { MdChevronLeft, MdChevronRight, MdOutlineArrowRightAlt, MdFilterList, MdSearch, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import { useEffect, useMemo, useRef, useState } from "react";
import { getEvents } from "../apis/events";

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [eventData, setEventData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const filterButtonRef = useRef<HTMLButtonElement | null>(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const events = await getEvents();
        setEventData(events || []);
      } catch (error) {
        console.error('Error fetching events:', error);
        setEventData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Close filters when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;

      if (
        filterRef.current &&
        target instanceof Node &&
        !filterRef.current.contains(target) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(target)
      ) {
        setShowFilters(false);
      }
    };

    if (showFilters) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilters]);



  const itemsPerPage = isMobile ? 3 : 6;

  // Get upcoming event for hero section
  const upcomingEvent = useMemo(() => {
    if (isLoading || eventData.length === 0) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get upcoming events
    const upcoming = eventData
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Return first upcoming event, or latest past event if no upcoming
    if (upcoming.length > 0) {
      return upcoming[0];
    } else {
      // Get latest past event
      const past = eventData
        .filter(event => new Date(event.date) < today)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return past[0] || null;
    }
  }, [eventData, isLoading]);

  const filteredEvents = useMemo(() => {
    // Don't filter if still loading
    if (isLoading) return [];

    let filtered = eventData;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedFilter !== "all") {
      filtered = filtered.filter(event => event.category === selectedFilter);
    }

    // Filter by time (upcoming/past)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (timeFilter === "upcoming") {
      filtered = filtered.filter(event => new Date(event.date) >= today);
    } else if (timeFilter === "past") {
      filtered = filtered.filter(event => new Date(event.date) < today);
    }

    // Sort by date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (timeFilter === "past") {
        return dateB.getTime() - dateA.getTime();
      }

      return dateA.getTime() - dateB.getTime();
    });
  }, [eventData, selectedFilter, timeFilter, searchQuery, isLoading]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);
  const eventsGridRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handleTimeFilterChange = (filter: string) => {
    setTimeFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    eventsGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filters = [
    { id: "all", label: "All Events" },
    { id: "conference", label: "Conferences" },
    { id: "workshop", label: "Workshops" },
    { id: "networking", label: "Networking" }
  ];

  const timeFilters = [
    { id: "all", label: "All Time" },
    { id: "upcoming", label: "Upcoming Events" },
    { id: "past", label: "Past Events" }
  ];

  const formatDate = (
    dateStr: string,
    locale: string = 'en-US',
    options?: Intl.DateTimeFormatOptions
  ): string => {
    if (!dateStr) return '';

    const date = new Date(dateStr);

    // Default options if none provided
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return date.toLocaleDateString(locale, options || defaultOptions);
  };

  const isUpcoming = upcomingEvent && new Date(upcomingEvent.date) >= new Date(new Date().setHours(0, 0, 0, 0));

  return (
    <div className="w-[90%] mx-auto mb-[40vh]">
      <div className="mx-auto  lg:min-h-[90vh] w-full px-[5%] grid grid-cols-1 lg:grid-cols-[50%_50%] items-center">
        <div className="w-full my-10 lg:my-0  aspect-square lg:aspect-[1/0.8] lg:-ml-[10%] rounded-xl relative pb-16 flex justify-center items-center">
          <img
            src={upcomingEvent?.image}
            className="w-full rounded-xl my-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            alt={upcomingEvent?.title}
          />        </div>

        <div className="flex flex-col justify-center">
          {isLoading ? (
            // Loading skeleton for hero section
            <div className="animate-pulse">
              <div className="w-32 h-8 bg-gray-200 rounded-4xl mb-5"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="w-40 h-12 bg-gray-200 rounded-4xl mt-10"></div>
            </div>
          ) : upcomingEvent ? (
            <>
              <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">
                {isUpcoming ? 'Upcoming Event' : 'Latest Event'}
              </div>
              <h2 className="w-full lg:w-[90%] font-primary text-2xl uppercase my-2">{upcomingEvent.title}</h2>
              <p className="text-[18px] w-full font-secondary lg:w-[80%]">{upcomingEvent.description}</p>
              <p className="mt-2">{formatDate(upcomingEvent.date)}</p>
              <Link to={`/events/${upcomingEvent?.registration_link}`}>
                <div className='mt-10 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2'>
                  {isUpcoming ? 'Register Now' : 'View Details'}
                  <MdOutlineArrowRightAlt />
                </div>
              </Link>
            </>
          ) : (
            <>
              <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">Events</div>
              <h2 className="w-full lg:w-[90%] font-primary text-2xl uppercase my-2">Student-led Industry-Focused</h2>
              <p className="text-[18px] w-full font-secondary lg:w-[80%]">Blackleaf is powered by a diverse cohort of students who bring academic rigor and analytical insight to our investment fund. Beyond the numbers, our leadership is dedicated to fostering an inclusive ecosystem where the next generation of Black financial professionals can thrive.</p>
            </>
          )}
        </div>
      </div>

      {/* Search and Filter Section */}
      <div ref={eventsGridRef} className="mb-8 relative">
        {/* Search Bar and Filter Button */}
        <div className="mt-10 flex items-center justify-between gap-4 mb-4">

          <div className="w-full lg:w-auto flex flex-row items-center gap-2">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md lg:min-w-md">
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search events..."
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <MdClose size={20} />
                </button>
              )}
            </div>

            {/* Filter Toggle Button (All Devices) */}
            <button
              ref={filterButtonRef}
              onClick={() => setShowFilters(prev => !prev)}
              className="flex items-center justify-center gap-2 px-4 lg:px-6 py-3.5 bg-primary text-white rounded-lg cursor-pointer transition-all"
            >
              <MdFilterList size={20} />
              {isMobile ? "" : "Filters"}
            </button>

          </div>
          <div className="hidden lg:flex flex-row items-center gap-4">
            {/* Pagination */}
            {!isLoading && filteredEvents.length > 0 && totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg ${currentPage === 1
                    ? 'border border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary/80'
                    }`}
                >
                  <MdChevronLeft size={24} />
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-all ${currentPage === page
                        ? 'bg-primary text-white'
                        : 'border text-gray-700 hover:border border-gray-300'
                        }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg ${currentPage === totalPages
                    ? 'border border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary/80'
                    }`}
                >
                  <MdChevronRight size={24} />
                </button>
              </div>
            )}

            {/* Results Counter */}
            {!isLoading && filteredEvents.length > 0 && (
              <div className="text-center text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredEvents.length)} of {filteredEvents.length} events
              </div>
            )}
          </div>
        </div>

        {/* Filters Dropdown */}
        {showFilters && (
          <div
            ref={filterRef}
            className={`
              ${isMobile ? 'w-[70%] bg-white shadow-lg border border-gray-200 absolute left-0 right-0 top-full mt-2 z-50' : 'relative'}
              rounded-lg p-6
            `}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Time Filters */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                <h3 className="text-sm font-semibold text-gray-700">Filter by Time</h3>
                <div className="flex flex-col lg:flex-row flex-wrap gap-2">
                  {timeFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => handleTimeFilterChange(filter.id)}
                      className={`px-6 py-2 rounded-full transition-all text-left lg:text-center ${timeFilter === filter.id
                        ? 'bg-primary text-white'
                        : 'border text-gray-700 hover:border border-gray-300'
                        }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
                <h3 className="text-sm font-semibold text-gray-700">Filter by Category</h3>
                <div className="flex flex-col lg:flex-row flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => handleFilterChange(filter.id)}
                      className={`px-6 py-2 rounded-full transition-all text-left lg:text-center ${selectedFilter === filter.id
                        ? 'bg-primary text-white'
                        : 'border text-gray-700 hover:border border-gray-300'
                        }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {isLoading ? (
          // Loading skeleton
          [...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-64 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))
        ) : (
          currentEvents.map((event) => (
            <Link 
            onClick={scrollToTop}
            key={event.id} to={`/events/${event.title}`}>
              <EventCard event={event} />
            </Link>
          ))
        )}
      </div>

      {/* No Results Message */}
      {!isLoading && filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {searchQuery ? `No events found for "${searchQuery}"` : 'No events found for this category.'}
          </p>
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="mt-4 text-primary hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      )}

      {/* Pagination */}
      {!isLoading && filteredEvents.length > 0 && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${currentPage === 1
              ? 'border border-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/80'
              }`}
          >
            <MdChevronLeft size={24} />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg transition-all ${currentPage === page
                  ? 'bg-primary text-white'
                  : 'border border-gray-200 text-gray-700 hover:border border-gray-300'
                  }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${currentPage === totalPages
              ? 'border border-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/80'
              }`}
          >
            <MdChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Results Counter */}
      {!isLoading && filteredEvents.length > 0 && (
        <div className="text-center mt-4 text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredEvents.length)} of {filteredEvents.length} events
        </div>
      )}
    </div>
  )
}

export default Events;