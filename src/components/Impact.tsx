import { Link } from 'react-router-dom'
import network from '../assets/images/network.jpeg'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Impact = () => {
    return (
        <div>
            <div className="w-full bg-primary py-20 px-[10%] lg:px-[5%] grid grid-cols-1 lg:grid-cols-2 text-white gap-5 lg:gap-0 relative">
                <div>
                    <div className="w-fit rounded-4xl border border-white px-6 py-2 mb-5 text-white">Our Network</div>
                    <h2 className="w-full lg:w-[75%] font-heading text-2xl lg:text-4xl uppercase my-2">
                        A Canada-Wide Network of Excellence
                    </h2>
                    <Link
                        to="/join"
                        aria-label='join team'
                        className="text-[18px] cursor-pointer underline text-white">
                        Join Team
                    </Link>
                </div>
                <div className="lg:relative">
                    <p className="text-[18px] mb-8 lg:mb-0">Founded in 2023, our strength lies in diversity. Blackleaf Capital unite ambitious students from leading universities across Canada. From coast to coast, with over X members to date, our members form a powerful national network, bringing diverse perspectives to our collaborative projects and professional settings.</p>

                    <div className="lg:hidden w-full h-[250px] overflow-hidden">
                        <img
                            src={network}
                            alt="Blackleaf group picture"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="hidden lg:block lg:absolute lg:-bottom-[150%] w-full lg:w-[80%] h-[40vh] overflow-hidden">
                        <img
                            src={network}
                            alt="Blackleaf group picture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full px-[calc(5%+24px)]  md:px-[5%] py-[10vh] lg:py-[20vh] bg-black ">
                <Link
                    to="/sponsor"
                    aria-label='sponsor and partners'
                    className="text-[18px] cursor-pointer text-white flex flex-row items-center gap-2">
                    Partner with Purpose
                    <MdOutlineArrowRightAlt />
                </Link>
                <h2 className="text-white w-full lg:w-[45%] font-primary text-2xl my-4 lg:text-4xl uppercase">Talent Meets Opportunity</h2>
                <p className="text-white w-full text-[18px] lg:w-[45%] font-secondary ">We work alongside industry partners to equip driven students with real-world exposure, practical skills, and meaningful professional connections. Through collaboration, mentorship, and hands-on experience, we create a pipeline of talent ready to lead and innovate.</p>
            </div>
        </div>
    )
}

export default Impact