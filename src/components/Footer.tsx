import { Link } from "react-router-dom"
import background from "../assets/images/background.jpg"
import { FaLinkedinIn, FaInstagram, FaRegCopyright } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md"

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
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@blackleafcapital.org&su=General%20Inquiry%20-%20Blackleaf%20Capital&body=Hello%20Blackleaf%20Capital%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20organization%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0APlease%20let%20me%20know%20how%20I%20can%20get%20involved%20or%20if%20you%20need%20any%20additional%20information%20from%20me.%0D%0A%0D%0AThank%20you%20for%20your%20time.%0D%0A%0D%0ABest%20regards,"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact Blackleaf Capital via email"
                                className="px-6 py-3 bg-white text-primary rounded-full hover:bg-white/90 transition-all text-center whitespace-nowrap"
                            >
                                Contact Us
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@blackleafcapital.org&su=Partnership%20Opportunity%20-%20Blackleaf%20Capital&body=Hello%20Blackleaf%20Capital%20Team,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20a%20potential%20partnership%20opportunity%20with%20your%20organization.%0D%0A%0D%0AOrganization/Company:%20[Your%20Organization%20Name]%0D%0AContact%20Person:%20[Your%20Name]%0D%0APosition/Title:%20[Your%20Title]%0D%0A%0D%0APartnership%20Interest:%0D%0A-%20Sponsorship%20opportunities%0D%0A-%20Event%20collaboration%0D%0A-%20Mentorship%20programs%0D%0A-%20Other%20(please%20specify)%0D%0A%0D%0APlease%20let%20me%20know%20the%20best%20time%20to%20discuss%20this%20further.%0D%0A%0D%0AThank%20you%20for%20your%20consideration.%0D%0A%0D%0ABest%20regards,"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Partner with Blackleaf Capital via email"
                                className="px-6 py-3 bg-transparent border border-white text-white  rounded-full hover:bg-white hover:text-primary transition-all text-center whitespace-nowrap"
                            >
                                Partner With Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-black pt-42 md:pt-28 lg:pt-34">
                <div className="w-[80%] lg:w-[90%] mx-auto grid py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[45%_55%] gap-8">
                        <div className="flex flex-col">
                            <div className="mb-5 flex flex-row items-center gap-4">
                                <div className="font-heading text-white text-4xl">BC</div>
                                <div className="w-px h-[30px] bg-white/40"></div>
                                <div className="font-primary text-white/80">Blackleaf <br />Capital</div>

                            </div>
                            <p className="w-[90%] my-5 md:mt-8 text-white/90">Bridging the gap between potential and opportunity</p>
                            <div className="flex flex-row gap-2 mt-4">
                                <a
                                    href="https://www.linkedin.com/company/blackleaf-capital/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Blackleaf Capital on LinkedIn"
                                    className="aspect-square rounded-full text-white border border-white/30 hover:border-white flex items-center justify-center w-10 cursor-pointer hover:bg-white/10 transition-all"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href="https://www.instagram.com/blackleaf.capital"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow Blackleaf Capital on Instagram"
                                    className="aspect-square rounded-full text-white border border-white/30 hover:border-white flex items-center justify-center w-10 cursor-pointer hover:bg-white/10 transition-all"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@blackleafcapital.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Send email to Blackleaf Capital"
                                    className="aspect-square rounded-full text-white border border-white/30 hover:border-white flex items-center justify-center w-10 cursor-pointer hover:bg-white/10 transition-all"
                                >
                                    <MdOutlineEmail />
                                </a>
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
                                        <Link to="/faqs">FAQs</Link>
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/events">Upcoming Events</Link>
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/events">Gallery</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:flex flex-col">
                                <div className="text-[20px] font-bold text-white mb-5">Partners</div>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                        <Link to="/sponsors" onClick={scrollToTop}>Sponsors & Partners</Link>
                                    </li>
                                    <li className="cursor-pointer text-white/80 hover:text-white transition-all">
                                    <Link to="/team" onClick={scrollToTop}>Alumini</Link>
                                    </li>
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
                                        <a
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@blackleafcapital.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Send email to contact@blackleafcapital.org"
                                        >
                                            contact@blackleafcapital.org
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-black/20 py-4 flex gap-2 flex-row items-center justify-center text-white/80">
                    <FaRegCopyright />
                    Copyright {new Date().getFullYear()} Blackleaf Capital. <div className="hidden md:inline-flex">All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer