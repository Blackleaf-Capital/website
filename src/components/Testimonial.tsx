import { FaQuoteRight } from "react-icons/fa6";

type TestimonialProps = {
    name: string;
    position: string;
    description: string;
    linkedin: string;
};

const getInitials = (name: string) =>
    name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();

const Testimonial = ({
    name,
    position,
    description,
    linkedin,
}: TestimonialProps) => {
    return (
        <div className="w-[95%] bg-white p-10 rounded-2xl border border-gray-200 gap-[1%]">
            {/* Initials instead of icon */}


            <p className="text-[#333] mb-6">
            <FaQuoteRight className="text-primary text-[25px] mb-5" />
            {description}

            </p>

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold ">
                        {getInitials(name)}
                    </div>
                    <div className="flex flex-col">
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-xs text-gray-500">{position}</p>
                </div>
                </div>
                

                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#00850]inline-block hover:underline"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Testimonial;
