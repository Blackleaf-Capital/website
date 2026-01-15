import { FaArrowRightLong, FaLinkedinIn } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { getExecMembers } from "../apis/members";

const Team = () => {
  const [executiveTeam, setExecutiveMembers] = useState<any[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  // Fetch members
  useEffect(() => {
    const fetchData = async () => {
      const members = await getExecMembers();

      // Sort members to put CEO first
      const sortedMembers = members.sort((a, b) => {
        const positionA = a.Position?.toLowerCase() || "";
        const positionB = b.Position?.toLowerCase() || "";

        if (positionA.includes("chief executive officer")) return -1;
        if (positionB.includes("chief executive officer")) return 1;

        return 0;
      });

      setExecutiveMembers(sortedMembers);
    };

    fetchData();
  }, []);

  // Update swiper after slides are rendered
  useEffect(() => {
    if (swiperRef.current && executiveTeam.length > 0) {
      setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.update();
        }
      }, 100);
    }
  }, [executiveTeam]);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Determine if we should enable loop based on number of slides
  const shouldEnableLoop = executiveTeam.length > 2;

  return (
    <div className="w-[90%] mx-auto lg:py-[10vh] lg:w-full lg:my-[10vh] px-[5%] grid grid-cols-1 lg:grid-cols-[60%_40%] items-center  pb-[30vh] lg:pb-[30vh]">
      {/* Left Side - Swiper */}
      <div className="w-full lg:w-[80%] lg:ml-[10%] relative pb-16">
        {/* Custom Navigation Button */}
        <button
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
            }
          }}
          aria-label="View next team member"
          className="cursor-pointer absolute lg:-left-16 top-1/2 -translate-y-1/2 z-10 bg-black lg:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/90 transition-all"
        >
          <FaArrowRightLong />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          loop={shouldEnableLoop}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {executiveTeam.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="w-full h-80 rounded-2xl flex items-end">
                <div className="relative h-[80%] w-full bg-primary rounded-2xl overflow-visible flex justify-center">
                  <img
                    src={member.Image}
                    alt={`${member.First_Name} - ${member.Position}`}
                    className="absolute bottom-0 h-[120%] w-auto object-cover object-bottom"
                  />

                  {/* Member Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-2xl">
                    <div className="text-white flex items-center justify-between">
                      <div>
                        <h3 className="font-primary text-lg font-semibold">
                          {member.First_Name} {member.Last_Name}
                        </h3>
                        <p className="font-secondary text-sm text-white/90">
                          {member.Position}
                        </p>
                      </div>
                      <a
                        href={member.LinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${member.First_Name}'s LinkedIn profile`}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200"
                      >
                        <FaLinkedinIn className="text-white text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Side - Description */}
      <div className="flex flex-col justify-center">
        <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">
          Our Team
        </div>
        <h2 className="w-full lg:w-[90%] font-primary text-2xl lg:text-4xl uppercase my-2">
          Student-led,
          <br /> Industry-Focused
        </h2>
        <p className="text-[18px] w-full font-secondary lg:w-[80%]">
          Blackleaf is powered by a diverse cohort of students who bring academic
          rigor and analytical insight to our investment fund. Beyond the numbers,
          our leadership is dedicated to fostering an inclusive ecosystem where
          the next generation of Black financial professionals can thrive.
        </p>
        <Link to="/team" onClick={scrollToTop}>
          <div className="mt-10 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2">
            View Team <MdOutlineArrowRightAlt />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Team;