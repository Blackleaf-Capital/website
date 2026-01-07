import { FaArrowRightLong, FaLinkedinIn } from "react-icons/fa6"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import head from '../assets/images/CTA.png'
import head2 from '../assets/images/cta2.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Team = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    // Function to scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Team members array
    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            position: "President & CEO",
            university: "University of Toronto",
            linkedin: "https://linkedin.com/in/johndoe",
            image: head
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "VP Operations",
            university: "McGill University",
            linkedin: "https://linkedin.com/in/janesmith",
            image: head2
        },
        {
            id: 3,
            name: "Michael Brown",
            position: "VP Finance",
            university: "UBC",
            linkedin: "https://linkedin.com/in/michaelbrown",
            image: head
        },
        {
            id: 4,
            name: "Sarah Johnson",
            position: "Director of Events",
            university: "York University",
            linkedin: "https://linkedin.com/in/sarahjohnson",
            image: head2
        },
        {
            id: 5,
            name: "David Lee",
            position: "Marketing Lead",
            university: "Western University",
            linkedin: "https://linkedin.com/in/davidlee",
            image: head
        },
        {
            id: 6,
            name: "Emily Chen",
            position: "Tech Lead",
            university: "University of Waterloo",
            linkedin: "https://linkedin.com/in/emilychen",
            image: head2
        }
    ];

    return (
        <div className="w-[90%] mx-auto  lg:w-full lg:my-[10vh] px-[5%] grid grid-cols-1 lg:grid-cols-[60%_40%] items-center">
            <div className="w-full lg:w-[80%] lg:ml-[10%] relative pb-16">
                {/* Custom Navigation Button - Outside */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="View next team member"
                    className="absolute lg:-left-16 top-1/2 -translate-y-1/2 z-10 bg-black lg:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/90 transition-all"
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
                    loop={true}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active'
                    }}
                    breakpoints={{
                        // Mobile first approach - smallest to largest
                        0: {           // 0px and up
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        640: {         // 640px and up (sm)
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {         // 768px and up (md)
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {        // 1024px and up (lg)
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1280: {        // 1280px and up (xl)
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }}
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div className="w-full h-80 rounded-2xl flex items-end">
                                <div className="relative h-[80%] lg:h-[80%] w-full bg-primary rounded-2xl overflow-visible flex justify-center">
                                    <img
                                        src={member.image}
                                        alt={`${member.name} - ${member.position}`}
                                        className="absolute bottom-0 h-[120%] w-auto object-cover object-bottom"
                                    />

                                    {/* Member Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-2xl">
                                        <div className="text-white">
                                            
                                            <div className="flex items-center justify-between">
                                                <div>
                                                <h3 className="font-primary text-lg font-semibold">{member.name}</h3>
                                                <p className="font-secondary text-sm text-white/90">{member.position}</p>
                                                </div>
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View ${member.name}'s LinkedIn profile`}
                                                    className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200"
                                                >
                                                    <FaLinkedinIn className="text-white text-sm" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex flex-col justify-center">
                <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">Our Team</div>
                <h2 className="w-full lg:w-[90%] font-primary text-2xl lg:text-4xl uppercase my-2">Student-led,<br /> Industry-Focused</h2>
                <p className="text-[18px] w-full font-secondary lg:w-[80%]">Blackleaf is powered by a diverse cohort of students who bring academic rigor and analytical insight to our investment fund. Beyond the numbers, our leadership is dedicated to fostering an inclusive ecosystem where the next generation of Black financial professionals can thrive.</p>
                <Link
                    to="/team"
                    onClick={scrollToTop}>
                    <div className='mt-10 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2'>View Team                     <MdOutlineArrowRightAlt />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Team