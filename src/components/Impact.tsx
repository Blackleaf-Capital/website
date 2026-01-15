import { useEffect, useState } from 'react';
import LogoMarquee from './LogoMarquee';
import { getSponsors } from '../apis/sponsors';
import { getNetworkCounts, type NetworkCounts } from '../apis/counts';

const Impact = () => {
    const [sponsors, setSponsors] = useState<any[]>([]);
    const [counts, setCounts] = useState<NetworkCounts>({
        totalMembers: 0,
        corporatePartners: 0,
        universities: 0,
        events: 0,
        placements: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            const [sponsorsImages, networkCounts] = await Promise.all([
                getSponsors(),
                getNetworkCounts()
            ]);
            
            setSponsors(sponsorsImages);
            setCounts(networkCounts);
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='w-full bg-primary py-20 px-[10%] lg:px-[5%]'>
                <div className="grid grid-cols-1 lg:grid-cols-2 text-white gap-8 lg:gap-12 relative items-center">
                    <div>
                    <div className="w-fit rounded-4xl border border-white px-6 py-2 mb-5 text-white">Our Network</div>

                        <h2 className="w-full font-heading text-2xl lg:text-4xl uppercase my-2">
                            A Canada-Wide Network of Excellence
                        </h2>
                       
                    </div>
                    <div className="flex flex-col justify-center">
                        {/* <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="text-center lg:text-left">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{counts.corporatePartners}+</div>
                                <p className="text-lg text-white/90">Corporate Partners</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{counts.totalMembers}+</div>
                                <p className="text-lg text-white/90">Student Members</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{counts.universities}+</div>
                                <p className="text-lg text-white/90">Universities</p>
                            </div>
                        </div> */}
                         <p className="text-[18px] my-7">
                            Founded in 2023, our strength lies in diversity. Blackleaf Capital unites ambitious students from leading universities across Canada. From coast to coast, with over {counts.totalMembers}+ members to date, our members form a powerful national network, bringing diverse perspectives to our collaborative projects and professional settings.
                        </p>
                        <p className="text-[18px]">
                            Our network's strength is amplified by strategic partnerships with Canada's leading financial institutions. These industry leaders provide mentorship, resources, and real-world opportunities that bridge the gap between academic learning and professional excellence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <div className="w-full mx-auto bg-white">
                <LogoMarquee
                    logos={sponsors}
                />
            </div>
           
        </div>
    )
}

export default Impact

