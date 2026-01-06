import { FaArrowRightLong } from "react-icons/fa6"
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
            position: "President",
            university: "University of Toronto",
            image: head
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "VP Operations",
            university: "McGill University",
            image: head2
        },
        {
            id: 3,
            name: "Michael Brown",
            position: "VP Finance",
            university: "UBC",
            image: head
        },
        {
            id: 4,
            name: "Sarah Johnson",
            position: "Director of Events",
            university: "York University",
            image: head2
        },
        {
            id: 5,
            name: "David Lee",
            position: "Marketing Lead",
            university: "Western University",
            image: head
        },
        {
            id: 6,
            name: "Emily Chen",
            position: "Tech Lead",
            university: "Waterloo",
            image: head2
        }
    ];

    return (
        <div className="w-[90%] mx-auto lg:my-[10vh]  lg:w-full lg:py-20 lg:pt-[20vh] px-[5%] grid grid-cols-1 lg:grid-cols-[60%_40%] items-center">
            <div className="w-full lg:w-[80%] lg:ml-[10%] relative pb-16">
                {/* Custom Navigation Button - Outside */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
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
                                        alt="Blackleaf member"
                                        className="absolute bottom-0 h-[120%] w-auto object-cover object-bottom"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

            <div className="flex flex-col justify-center">
                <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">Our Team</div>
                <h2 className="w-full lg:w-[90%] font-primary text-4xl uppercase my-2">Student-led,<br /> Industry-Focused</h2>
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