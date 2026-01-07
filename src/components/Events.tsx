import { Link } from "react-router-dom"
import EventCard from "./EventCard"
import { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowRightLong } from "react-icons/fa6";

const eventsData = [
  {
    id: 1,
    title: "Investment Fundamentals Workshop",
    description:
      "Learn the basics of investment analysis, portfolio management, and risk assessment with industry professionals.",
    image: "/api/placeholder/400/250",
    social: "instagram",
  },
  {
    id: 2,
    title: "Networking Mixer: Toronto Chapter",
    description:
      "Connect with fellow students, alumni, and industry professionals in an informal setting.",
    image: "/api/placeholder/400/250",
    social: "linkedin",
  },
  {
    id: 3,
    title: "Guest Speaker: Private Equity Insights",
    description:
      "Industry veteran shares insights on private equity trends and career opportunities.",
    image: "/api/placeholder/400/250",
    social: "instagram",
  },
]

const Events = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const swiperRef2 = useRef<SwiperType | null>(null);


  return (
    <div className="w-full py-[10vh] px-[5%] bg-[#F6F6F6] pb-[30vh] mt-[5vh]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-8">
        <h1 className="text-2xl lg:text-4xl font-primary mb-4 sm:mb-0">Social Posts</h1>
        <p></p>
        <Link
          to="/events"
          onClick={scrollToTop}
          className="text-[18px] cursor-pointer underline text-primary hover:text-primary/80 transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.slice(0, 3).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="md:hidden relative">
        <button
          onClick={() => swiperRef2.current?.slideNext()}
          aria-label="View next team member"
          className="absolute lg:-left-16  -translate-y-[10px] z-10 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/90 transition-all"
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
          {eventsData.slice(0, 3).map((event) => (
            <SwiperSlide key={event.id}>
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Events
