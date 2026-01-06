import { Link } from "react-router-dom"
import ctaImage from '../assets/images/CTA.png'

const CTA = () => {
  return (
    <div className="w-[90%] my-[10vh] lg:my-[20vh] mx-auto min-h-[50vh] lg:h-[55vh] bg-[#F6F6F6] rounded-2xl flex flex-col lg:grid lg:grid-cols-[40%_60%] items-center p-6 lg:p-0">

      <div className="w-full h-[30vh] lg:h-full flex items-center justify-center mb-6 lg:mb-0">
        <div className="h-[80%] lg:h-[68%] aspect-[1/0.8] bg-primary rounded-2xl flex items-center justify-center">
          <img src={ctaImage} alt="Blackleaf member" className="h-[112%] mx-auto mb-[10%] rounded-2xl" />
        </div>
      </div>

      <div className="flex flex-col justify-center px-4 lg:px-8 text-center lg:text-left">
        <h1 className="font-primary text-2xl lg:text-3xl text-primary mb-4">
          Join Canada's Premier Student Investment Network
        </h1>

        <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
          Connect with ambitious students from leading universities across Canada.
          Access exclusive investment opportunities, collaborative projects, and
          professional development that bridges the gap between your potential and opportunity.
        </p>

        <Link
          to="/join"
          className="inline-flex w-fit mx-auto lg:mx-0 rounded-4xl bg-primary text-white px-6 lg:px-8 py-3 items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2 font-secondary"
        >
          Get Involved
        </Link>
      </div>

    </div>
  )
}

export default CTA
