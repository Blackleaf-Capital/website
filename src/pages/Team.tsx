import { MdOutlineArrowRightAlt, MdChevronLeft, MdChevronRight, MdFilterList, MdSearch, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import head from '../assets/images/CTA.png';
import { FaLinkedinIn } from "react-icons/fa6";
import { useState, useEffect, useMemo, useRef } from "react";

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  university: string;
  linkedin: string;
  image: string;
  year: string;
}

const executiveTeam = [
  {
    name: "John Doe",
    role: "Chief Executive Officer",
    org: "BDT & MSD Partners, New York",
    image: head,
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    org: "Operations & Strategy",
    image: head,
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Michael Brown",
    role: "Chief Technology Officer",
    org: "Technology & Systems",
    image: head,
    linkedin: "https://linkedin.com/in/michaelbrown",
  },
];

const otherMembersData: TeamMember[] = [
  { id: 1, name: "Alex Johnson", email: "alex.johnson@university.edu", role: "Investment Analyst", university: "Harvard University", linkedin: "https://linkedin.com/in/alexjohnson", image: head, year: "2019" },
  { id: 2, name: "Sarah Williams", email: "sarah.williams@university.edu", role: "Operations Associate", university: "Stanford University", linkedin: "https://linkedin.com/in/sarahwilliams", image: head, year: "2019" },
  { id: 3, name: "Daniel Kim", email: "daniel.kim@university.edu", role: "Technology Associate", university: "MIT", linkedin: "https://linkedin.com/in/danielkim", image: head, year: "2019" },
  { id: 4, name: "Emily Carter", email: "emily.carter@university.edu", role: "Marketing Lead", university: "Harvard University", linkedin: "https://linkedin.com/in/emilycarter", image: head, year: "2019" },
  { id: 5, name: "Michael Chen", email: "michael.chen@university.edu", role: "Investment Analyst", university: "Yale University", linkedin: "https://linkedin.com/in/michaelchen", image: head, year: "2019" },
  { id: 6, name: "Jessica Brown", email: "jessica.brown@university.edu", role: "Research Associate", university: "Stanford University", linkedin: "https://linkedin.com/in/jessicabrown", image: head, year: "2019" },
  { id: 7, name: "David Park", email: "david.park@university.edu", role: "Technology Associate", university: "MIT", linkedin: "https://linkedin.com/in/davidpark", image: head, year: "2019" },
  { id: 8, name: "Amanda Lee", email: "amanda.lee@university.edu", role: "Operations Associate", university: "Yale University", linkedin: "https://linkedin.com/in/amandalee", image: head, year: "2019" },
  { id: 9, name: "Amanda Lee", email: "amanda.lee@university.edu", role: "Operations Associate", university: "Yale University", linkedin: "https://linkedin.com/in/amandalee", image: head, year: "2019" },
  { id: 10, name: "Amanda Lee", email: "amanda.lee@university.edu", role: "Operations Associate", university: "Yale University", linkedin: "https://linkedin.com/in/amandalee", image: head, year: "2019" },
  { id: 11, name: "Amanda Lee", email: "amanda.lee@university.edu", role: "Operations Associate", university: "Yale University", linkedin: "https://linkedin.com/in/amandalee", image: head, year: "2019" },
  { id: 12, name: "Amanda Lee", email: "amanda.lee@university.edu", role: "Operations Associate", university: "Yale University", linkedin: "https://linkedin.com/in/amandalee", image: head, year: "2019" },
];



type Leader = {
  name: string;
  linkedin: string;
};

type Leadership = {
  year: string;
  ceo: Leader;
  cto: Leader;
  coo: Leader;
};

const leadershipData: Leadership[] = [
  {
    year: "2024",
    ceo: {
      name: "Peter Lee",
      linkedin: "https://www.linkedin.com/in/peterlee",
    },
    cto: {
      name: "Jesse Liao",
      linkedin: "https://www.linkedin.com/in/jesseliao",
    },
    coo: {
      name: "Aaru Chandra",
      linkedin: "https://www.linkedin.com/in/aaruchandra",
    },
  },
  {
    year: "2023",
    ceo: {
      name: "Katie Thien",
      linkedin: "https://www.linkedin.com/in/katiethien",
    },
    cto: {
      name: "Geoffrey Xie",
      linkedin: "https://www.linkedin.com/in/geoffreyxie",
    },
    coo: {
      name: "Gage Burchall",
      linkedin: "https://www.linkedin.com/in/gageburchall",
    },
  },
];



const Team = () => {
  const [universityFilter, setUniversityFilter] = useState<string>("all");
  const [positionFilter, setPositionFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const filterRef = useRef<HTMLDivElement | null>(null);
  const filterButtonRef = useRef<HTMLButtonElement | null>(null);
  const membersGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        filterButtonRef.current &&
        event.target instanceof Node &&
        !filterRef.current.contains(event.target) &&
        !filterButtonRef.current.contains(event.target)
      ) {
        setShowFilters(false);
      }
    };

    if (showFilters) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilters]);

  const universities = useMemo(() => [...new Set(otherMembersData.map(m => m.university))].sort(), []);
  const positions = useMemo(() => [...new Set(otherMembersData.map(m => m.role))].sort(), []);

  const filteredMembers = useMemo(() => {
    let filtered = otherMembersData;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.university.toLowerCase().includes(q)
      );
    }
    if (universityFilter !== "all") filtered = filtered.filter(m => m.university === universityFilter);
    if (positionFilter !== "all") filtered = filtered.filter(m => m.role === positionFilter);

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, universityFilter, positionFilter]);

  const itemsPerPage = isMobile ? 5 : 10;
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  const handleUniversityFilterChange = (filter: string) => { setUniversityFilter(filter); setCurrentPage(1); };
  const handlePositionFilterChange = (filter: string) => { setPositionFilter(filter); setCurrentPage(1); };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => { setSearchQuery(e.target.value); setCurrentPage(1); };
  const clearSearch = () => { setSearchQuery(""); setCurrentPage(1); };
  const handlePageChange = (page: number) => { setCurrentPage(page); membersGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  return (
    <div className="pt-[5vh] lg:pt-0 pb-[20vh]">
      {/* Header Section */}
      <div className="mx-auto lg:min-h-[90vh] w-[80%] grid grid-cols-1 lg:grid-cols-[50%_50%] items-center gap-5">
        <div className="flex flex-col justify-center">
          <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">Our Team</div>
          <h2 className="w-full lg:w-[90%] font-primary text-2xl lg:text-2xl uppercase my-2">Intercollegiate. Industry-Focused.</h2>
          <p className="text-[18px] w-full font-secondary lg:w-[80%]">
            Our organization operates as an intercollegiate network of students across multiple institutions,
            structured to mirror real-world investment teams. Leadership oversees strategy and operations,
            while specialized teams collaborate across schools to drive research, execution, and long-term growth.
          </p>
          <Link to="/team">
            <div className="mt-10 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2">
              Meet the Team
              <MdOutlineArrowRightAlt />
            </div>
          </Link>
        </div>
        <div className="w-full my-10 lg:my-0 aspect-square lg:aspect-[1/0.8] rounded-xl relative pb-16 bg-black"></div>
      </div>

      <div className="w-[90%] mx-auto mt-20">
        <h2 className="w-full lg:w-[90%] font-primary text-2xl uppercase my-2 mb-8">Executive Team</h2>
        <div className="w-[90%] mx-auto py-20 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {executiveTeam.map((member, index) => (
            <div key={index} className="relative mb-10 lg:mb-0 w-full aspect-square bg-primary rounded-2xl overflow-visible flex justify-center">
              <img src={member.image} alt={`${member.name} - ${member.role}`} className="absolute bottom-0 h-[110%] w-auto object-cover object-bottom" />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to from-black/80 via-black/40 to-transparent p-4 rounded-b-2xl">
                <div className="text-white w-[90%] mx-auto flex justify-between items-center">
                  <div>
                    <h3 className="font-primary text-lg font-semibold">{member.name}</h3>
                    <p className="font-secondary text-sm text-white/90">{member.role}</p>
                    <p className="font-secondary text-xs text-white/70">{member.org}</p>
                  </div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`View ${member.name}'s LinkedIn profile`} className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200">
                    <FaLinkedinIn className="text-white text-sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Members Section */}
        <h2 className="w-full lg:w-[90%] mx-auto  font-primary text-2xl uppercase my-2 mb-8">Members</h2>
        <div ref={membersGridRef} className="mb-8 relative">
          {/* Search + Filters */}
          <div className="lg:w-[90%] mx-auto flex flex-row items-center justify-between gap-4 mb-4">
            <div className="flex-1 flex gap-2">
              <div className="relative flex-1 max-w-md">
                <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search members..."
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
                {searchQuery && (
                  <button onClick={clearSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <MdClose size={20} />
                  </button>
                )}
              </div>

              <button
                ref={filterButtonRef}
                onClick={() => setShowFilters(prev => !prev)}
                className="flex items-center justify-center gap-2 px-4 lg:px-6 py-3.5 bg-primary text-white rounded-lg cursor-pointer transition-all"
              >
                <MdFilterList size={20} />
                {isMobile ? "" : "Filters"}
              </button>
            </div>

            {totalPages > 1 && (
              <div className="hidden lg:flex justify-center items-center gap-2">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`p-2 rounded-lg ${currentPage === 1 ? 'border border-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary/80'}`}><MdChevronLeft size={24} /></button>
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  return (
                    <button key={page} onClick={() => handlePageChange(page)} className={`px-4 py-2 rounded-lg transition-all ${currentPage === page ? 'bg-primary text-white' : 'border text-gray-700 hover:border border-gray-300'}`}>{page}</button>
                  );
                })}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`p-2 rounded-lg ${currentPage === totalPages ? 'border border-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary/80'}`}><MdChevronRight size={24} /></button>
              </div>
            )}
          </div>

          {/* Filters Dropdown */}
          {showFilters && (
            <div ref={filterRef} className={`flex w-[70%] lg:w-[40%] bg-white shadow-lg border border-gray-200 absolute left-0 right-0 top-full mt-2 z-50 rounded-lg p-6`}>
              <div className="flex mx-auto flex-col lg:flex-row gap-6">
                <div className="flex flex-col lg:items-center gap-3">
                  <h3 className="text-sm font-semibold text-gray-700">Filter by University</h3>
                  <div className="flex flex-col flex-wrap gap-2">
                    <button onClick={() => handleUniversityFilterChange("all")} className={`px-6 py-2 rounded-full transition-all text-left lg:text-center ${universityFilter === "all" ? 'bg-primary text-white' : 'border text-gray-700 hover:border border-gray-300'}`}>All Universities</button>
                    {universities.map(u => <button key={u} onClick={() => handleUniversityFilterChange(u)} className={`px-6 py-2 rounded-full transition-all ${universityFilter === u ? 'bg-primary text-white' : 'border text-gray-700 hover:border border-gray-300'}`}>{u}</button>)}
                  </div>
                </div>
                <div className="flex flex-col lg:items-center gap-3 lg:gap-6">
                  <h3 className="text-sm font-semibold text-gray-700">Filter by Position</h3>
                  <div className="flex flex-col flex-wrap gap-2">
                    <button onClick={() => handlePositionFilterChange("all")} className={`px-6 py-2 rounded-full transition-all ${positionFilter === "all" ? 'bg-primary text-white' : 'border text-gray-700 hover:border border-gray-300'}`}>All Positions</button>
                    {positions.map(p => <button key={p} onClick={() => handlePositionFilterChange(p)} className={`px-6 py-2 rounded-full transition-all ${positionFilter === p ? 'bg-primary text-white' : 'border text-gray-700 hover:border border-gray-300'}`}>{p}</button>)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Members Table */}
        <div className="w-[95%] lg:w-[90%] mx-auto bg-white rounded-lg relative">
          <div className="grid grid-cols-2 lg:grid-cols-[20%_20%_20%_15%_10%_5%] gap-4 lg:px-6 py-6 border-b border-gray-100 transition-colors cursor-pointer">
            <div className="font-medium text-gray-900">Name</div>
            <div className="lg:hidden text-gray-600">Role</div>
            <div className="hidden lg:block text-gray-600 break-all">Email</div>
            <div className="hidden lg:block text-gray-600">Role</div>
            <div className="hidden lg:block text-gray-600">University</div>
            <div className="hidden lg:block text-gray-600">Year</div>
            <div className="hidden lg:flex">LinkedIn</div>
          </div>
          {currentMembers.map(member => (
            <div key={member.id} className=" relative grid grid-cols-2 lg:grid-cols-[20%_20%_20%_15%_10%_5%_5%] gap-4 lg:px-6 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="font-medium text-gray-900">{member.name}</div>
              <div className="lg:hidden text-gray-600">{member.role}</div>
              <div className="hidden lg:block text-gray-600 break-all">{member.email}</div>
              <div className="hidden lg:block text-gray-600">{member.role}</div>
              <div className="hidden lg:block text-gray-600">{member.university}</div>
              <div className="hidden lg:block text-gray-600">{member.year}</div>
              <div className="hidden lg:flex justify-center">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`View ${member.name}'s LinkedIn profile`} className="bg-primary hover:bg-primary/80 p-2 rounded-full transition-all duration-200 inline-block">
                  <FaLinkedinIn className="text-white text-sm" />
                </a>
              </div>
              <div className="hidden lg:block text-gray-600 relative">
                <div className="absolute -left-[20vw] top-1/2 -translate-y-1/2 w-48 h-48 bg-black rounded-xl pointer-events-none opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-100 ease-out z-50 shadow-2xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`p-2 rounded-lg ${currentPage === 1 ? 'border border-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary/80'}`}><MdChevronLeft size={24} /></button>
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button key={page} onClick={() => handlePageChange(page)} className={`px-4 py-2 rounded-lg transition-all ${currentPage === page ? 'bg-primary text-white' : 'border text-gray-700 hover:border border-gray-300'}`}>{page}</button>
              );
            })}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`p-2 rounded-lg ${currentPage === totalPages ? 'border border-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary/80'}`}><MdChevronRight size={24} /></button>
          </div>
        )}
      </div>


      <div className="lg:w-[80%] mx-auto px-4 my-[20vh]">

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 items-center py-3 font-semibold text-gray-700">
            <div>Year</div>
            <div>CEO</div>
            <div>CTO</div>
            <div>COO</div>
          </div>

          {leadershipData.map((item) => (
            <div
              key={item.year}
              className="grid grid-cols-4 py-4 items-center text-gray-800"
            >
              <div>{item.year}</div>
              <div>
                <a
                  href={item.ceo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black hover:text-prim"
                >
                  {item.ceo.name}
                </a>
              </div>

              <div>
                <a
                  href={item.cto.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black hover:text-prim"
                >
                  {item.cto.name}
                </a>
              </div>

              <div>
                <a
                  href={item.coo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black hover:text-prim"
                >
                  {item.coo.name}
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 w-[90%] mx-auto">
          {leadershipData.map((item) => (
            <div
              key={item.year}
              className=" rounded-lg p-4 "
            >
              <h3 className="text-lg font-semibold mb-3">
                {item.year}
              </h3>

              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">CEO</span>
                  <span><a
                  href={item.coo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black hover:text-primary"
                >
                  {item.ceo.name}
                </a></span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">CTO</span>
                  <span><a
                    href={item.coo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black hover:text-prim"
                  >
                    {item.cto.name}
                  </a></span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">COO</span>
                  <span>
                  <a
                  href={item.coo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black hover:text-prim"
                >
                  {item.coo.name}
                </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


    </div>
  );
};

export default Team;