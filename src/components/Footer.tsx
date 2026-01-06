import { Link } from "react-router-dom"
import background from "../assets/images/background.jpg"
import { FaLinkedinIn, FaInstagram, FaRegCopyright } from "react-icons/fa6"
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="relative w-full">
            <div className="absolute w-[80%] left-1/2 -translate-x-1/2 -top-[15vh] md:-top-[12vh] lg:-top-[10vh] z-10">
                <div className="relative w-full rounded-xl overflow-hidden min-h-[30vh] md:min-h-[25vh] lg:min-h-[20vh] flex justify-center">
                    <div className="absolute inset-0">
                        <img 
                            src={background}
                            alt="CTA Background" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="absolute inset-0 bg-primary/90"></div>
                    
                    <div className="relative w-[95%] my-auto z-10 h-full flex flex-col lg:flex-row items-center justify-between px-8 md:px-12 lg:px-16 py-8 gap-6">
                        <div className="text-white text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-primary mb-2">
                        Connect With Us
                            </h2>
                            <p className="text-white/90 text-sm md:text-base">
                                We welcome inquiries from prospective members, corporate sponsors, and the wider financial community.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                                to="/contact" 
                                onClick={scrollToTop}
                                className="px-6 py-3 bg-white text-primary rounded-full hover:bg-white/90 transition-all text-center whitespace-nowrap"
                            >
                                Contact Us
                            </Link>
                            <Link 
                                to="/sponsors" 
                                onClick={scrollToTop}
                                className="px-6 py-3 bg-transparent border border-white text-white  rounded-full hover:bg-white hover:text-primary transition-all text-center whitespace-nowrap"
                            >
                                Partner With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-black pt-42 md:pt-28 lg:pt-34">
                <div className="w-[80%] lg:w-[90%] mx-auto grid py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[45%_55%] gap-8">
                        <div className="flex flex-col">
                            <div className="h-[7.5vh] mb-5">
                                <img src="/og-image.jpg" alt="Blackleaf Capital Logo" className='h-[150%] w-auto' />
                            </div>
                            <p className="w-[90%] my-5 md:mt-8 text-white/80">Bridging the gap between potential and opportunity</p>
                            <div className="flex flex-row gap-2 mt-4">
                                <div className="aspect-square rounded-full text-white border border-white/30 hover:border-white flex items-center justify-center w-10 cursor-pointer hover:bg-white/10 transition-all">
                                    <FaLinkedinIn />
                                </div>
                                <div className="aspect-square rounded-full text-white border border-white/30 hover:border-white flex items-center justify-center w-10 cursor-pointer hover:bg-white/10 transition-all">
                                    <FaInstagram />
                                </div>
                                <div className="aspect-square rounded-full text-white border border-white/30 hover:border-white flex items-center justify-center w-10 cursor-pointer hover:bg-white/10 transition-all">
                                    <MdOutlineEmail />
                                </div>
                                <div className="aspect-square rounded-full text-white border border-white/30 hover:border-white flex items-center justify-center w-10 cursor-pointer hover:bg-white/10 transition-all">
                                    <MdLocalPhone />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4">
                            <div className="hidden lg:flex flex-col">
                                <div className="text-[20px] font-bold text-white mb-5">Navigation</div>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/" onClick={scrollToTop}>Home</Link>
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/team" onClick={scrollToTop}>Team</Link>
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/events" onClick={scrollToTop}>Events</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:flex flex-col">
                                <div className="text-[20px] font-bold text-white mb-5">Resources</div>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/" onClick={scrollToTop}>About</Link>
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/team" onClick={scrollToTop}>Portfolio</Link>
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/events" onClick={scrollToTop}>News</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:flex flex-col">
                                <div className="text-[20px] font-bold text-white mb-5">Partners</div>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/sponsors" onClick={scrollToTop}>Sponsors & Partners</Link>
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">Investments</li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/join" onClick={scrollToTop}>Join Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-[20px] font-bold text-white mb-5">Get in touch</div>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all flex flex-row items-center gap-3.5">
                                        Toronto, Canada
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all flex flex-row items-center gap-3.5">
                                        +1 (416) 123-4567
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all flex flex-row items-center gap-3.5">
                                        info@blackleafcapital.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-black/20 py-4 flex gap-2 flex-row items-center justify-center text-white/80">
                    <FaRegCopyright />
                    Copyright 2024 Blackleaf Capital. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer