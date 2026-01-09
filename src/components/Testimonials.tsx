import Testimonial from "./Testimonial";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowRightLong } from "react-icons/fa6";

const testimonials = [
    {
        name: "Jane Doe",
        position: "Product Manager",
        description:
            "Working with this team was an absolute pleasure. Communication was clear and delivery was on point.",
        linkedin: "https://www.linkedin.com/in/janedoe",
    },
    {
        name: "John Smith",
        position: "Software Engineer",
        description:
            "Great attention to detail and very reliable. I’d definitely recommend them.",
        linkedin: "https://www.linkedin.com/in/johnsmith",
    },
    {
        name: "Mary Wanjiku",
        position: "UX Designer",
        description:
            "They truly understand users and translate ideas into beautiful experiences.",
        linkedin: "https://www.linkedin.com/in/marywanjiku",
    },
];

const Testimonials = () => {
    const swiperRef3 = useRef<SwiperType | null>(null);


    return (
        <div className="w-[90%] mx-auto lg:w-[80%] ">
            <div className="hidden mx-auto lg:grid lg:grid-cols-[40%_30%_30%]">
                {testimonials.map((item, index) => (
                    <Testimonial
                        key={index}
                        name={item.name}
                        position={item.position}
                        description={item.description}
                        linkedin={item.linkedin}
                    />
                ))}
            </div>
            <div className="md:hidden relative">
                <button
                    onClick={() => swiperRef3.current?.slideNext()}
                    aria-label="View next team member"
                    className="absolute lg:-left-16  -translate-y-[10px] z-10 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/90 transition-all"
                >
                    <FaArrowRightLong />
                </button>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef3.current = swiper;
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

                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Testimonial
                                key={index}
                                name={item.name}
                                position={item.position}
                                description={item.description}
                                linkedin={item.linkedin}
                            />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default Testimonials;
