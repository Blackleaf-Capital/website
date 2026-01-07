import { Link } from 'react-router-dom'
import network from '../assets/images/network.jpeg'

const Impact = () => {
   return (
        <div className="w-full bg-primary my-[20vh] py-20 px-[10%] lg:px-[5%] grid grid-cols-1 lg:grid-cols-2 lg:mb-[50vh] text-white gap-5 lg:gap-0 ">
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
    )
}

export default Impact