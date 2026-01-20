import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { getLandingPage } from "../apis/homepage"; 
import { useEffect, useState } from "react";

function LandingPage() {
    // Specify the type as string | null to satisfy TypeScript
    const [landingPage, setLandingPage] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const landingPageImg = await getLandingPage();
                if (landingPageImg && landingPageImg[0]?.image) {
                    setLandingPage(landingPageImg[0].image);
                }
            } catch (error) {
                console.error("Failed to load hero image", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="space-y-8">
            <div className='relative w-full mx-auto h-[90vh] flex flex-col items-center justify-center text-white text-2xl overflow-hidden bg-[#1a1a1a]'>
                {/* Background Image Layer */}
                <div className="absolute inset-0">
                    {landingPage ? (
                        <img
                            src={landingPage}
                            alt="Blackleaf Capital Hero"
                            className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            loading="eager"
                            fetchPriority="high" // Corrected camelCase for React/TS
                            onLoad={() => setIsLoaded(true)}
                        />
                    ) : (
                        <div className="w-full h-full bg-neutral-900 animate-pulse" />
                    )}
                </div>

                {/* Overlay for Readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content Layer */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="font-primary text-2xl lg:text-4xl w-[80%] lg:w-[50%] text-center leading-tight">
                        Bridging the gap between potential and Success
                    </h1>
                    <p className="text-[16px] w-[80%] lg:w-[40%] my-5 text-center opacity-90">
                        We help students move from ambition to achievement through real-world experience and industry access.
                    </p>
                    <Link
                        to="/sponsors"
                        onClick={scrollToTop}
                        className="rounded-full bg-[#840E0E] text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all text-[16px] ease-in-out hover:scale-105 font-secondary"
                    >
                        The Blackleaf Way
                        <MdOutlineArrowRightAlt size={24} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;