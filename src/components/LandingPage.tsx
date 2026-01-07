import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom"

function LandingPage() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <div className="space-y-8  ">
            <div className='w-[90%] mt-[4vh] mx-auto h-[80vh] bg-black rounded-2xl flex flex-col items-center justify-center text-white text-2xl'>
                <h1 className="font-primary text-2xl lg:text-4xl w-[80%] lg:w-[50%] text-center">
                Bridging the gap between potential and Success
                </h1>
                <p className="text-[16px] w-[80%] lg:w-[40%] my-5 text-center">We help students move from ambition to achievement through real-world experience and industry access.</p>
                <Link
                    to="/sponsors"
                    onClick={scrollToTop}
                    className="rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all text-[16px] ease-in-out hover:translate-x-2 font-secondary flex-start"
                >
                    The Blackleaf Way
                    <MdOutlineArrowRightAlt />

                </Link>
            </div>
        </div>
    )
}

export default LandingPage