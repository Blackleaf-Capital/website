import { Link } from "react-router-dom"
import EventCard from "./EventCard"
import { useRef, useEffect, useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import { getEvents } from "../apis/events";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowRightLong } from "react-icons/fa6";

const SocialPosts = () => {
  const [eventData, setEventData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef2 = useRef<SwiperType | null>(null);

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

  // Get the 3 most relevant events (upcoming first, then latest past)
  const displayEvents = useMemo(() => {
    if (isLoading || eventData.length === 0) return [];
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Separate upcoming and past events
    const upcoming = eventData
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    const past = eventData
      .filter(event => new Date(event.date) < today)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Combine: prioritize upcoming, fill remaining with latest past
    const combined = [...upcoming, ...past];
    
    // Return first 3
    return combined.slice(0, 3);
  }, [eventData, isLoading]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full py-[10vh] px-[5%] bg-[#F6F6F6] pb-[30vh] mt-[5vh]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-8">
        <h1 className="text-2xl lg:text-4xl font-primary mb-4 sm:mb-0">Events</h1>
        <Link
          to="/events"
          onClick={scrollToTop}
          className="text-[18px] cursor-pointer underline text-primary hover:text-primary/80 transition-colors"
        >
          View All
        </Link>
      </div>

      {isLoading ? (
        // Loading skeletons
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-64 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : displayEvents.length > 0 ? (
        <>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayEvents.map((event) => (
              <Link key={event.id} to={`/events/${event.title}`}>
                <EventCard event={event} />
              </Link>
            ))}
          </div>
          <div className="md:hidden relative">
            <button
              onClick={() => swiperRef2.current?.slideNext()}
              aria-label="View next event"
              className="absolute lg:-left-16 -translate-y-[10px] z-10 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/90 transition-all"
            >
              <FaArrowRightLong />
            </button>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef2.current = swiper;
              }} 
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {displayEvents.map((event) => (
                <SwiperSlide key={event.id}>
                  <Link to={`/events/${event.id}`}>
                    <EventCard event={event} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : (
        // No events message
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No events available at the moment.</p>
        </div>
      )}
    </div>
  )
}

export default SocialPosts