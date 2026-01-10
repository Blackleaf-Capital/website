import { FaCircleCheck } from "react-icons/fa6";
import MembershipForm from "../components/MembershipForm";
import Testimonials from "../components/Testimonials";
import { useEffect, useRef, useState } from 'react';
import { FaStopCircle } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { getTeamPhoto } from "../apis/homepage";


const Join = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [joinPhoto, setjoinPhoto] = useState<string>("");
  const formRef = useRef<HTMLDivElement | null>(null);


  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      const joinPhoto  = await getTeamPhoto();

      setjoinPhoto(joinPhoto[0].image);
    };

    fetchData();
  }, []);

  const accordionItems = [
    {
      title: "Who Can Apply",
      content:
        "Blackleaf welcomes motivated Canadian black students and early-career professionals with a strong interest in finance, investing, and leadership. No prior investing experience is required — curiosity, commitment, and integrity matter most."
    },
    {
      title: "Application Submission",
      content:
        "Applicants complete a general membership form where they share their background, interests, and motivation for joining Blackleaf. The form helps us understand your goals and how our programs can best support your growth."
    },
    {
      title: "Review & Selection",
      content:
        "Our leadership team reviews applications on a rolling or cohort basis, depending on the intake period. Shortlisted candidates may be invited for a brief interview or follow-up conversation to assess alignment and commitment."
    },
    {
      title: "Programs",
      content:
        "Selected members are onboarded into structured programs covering investment analysis, industry research, and professional development. Members are guided through expectations, timelines, and available learning tracks."
    }
  ];

  const comparisonData = [
    {
      others: "Mostly theory-based learning models",
      us: "Hands-on investment training approach",
    },
    {
      others: "One-off workshops and unstructured events",
      us: "Structured long-term development programs",
    },
    {
      others: "Limited access to experienced mentors",
      us: "Direct access to experienced mentors",
    },
  ];



  return <div className="w-full mx-auto pb-[30vh]">
    <div className="mx-auto lg:min-h-[90vh] w-[90%] px-[5%] grid grid-cols-1 lg:grid-cols-[50%_50%] items-center ">
      <div className="w-full my-10 lg:my-0  aspect-square lg:aspect-[1/0.8] lg:-ml-[10%] rounded-xl relative pb-16">
      <img 
          src={joinPhoto} 
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110" 
          alt="" />
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">
          Why Join Us
        </div>

        <h2 className="w-full lg:w-[90%] font-primary text-2xl lg:text-2xl uppercase my-2">
          Student-Led,Industry-Focused.
        </h2>

        <p className="text-[18px] w-full font-secondary lg:w-[80%]">
          Members gain practical investment training, direct mentorship from experienced professionals,
          and become part of a supportive community committed to excellence in finance.
        </p>

    
          <button
            onClick={scrollToForm}
           className="mt-10 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2">
            Apply Now
            <MdOutlineArrowRightAlt />
          </button>


      </div>
    </div>

    <div className="w-[80%] mx-auto my-[8vh] lg:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 mb-16">
        <div className='w-full lg:w-[90%]'>

          <div className="hidden lg:flex flex-col w-full mx-auto">
          <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">Application Process</div>
          <h2 className="w-[90%] lg:w-[75%] font-primary text-2xl lg:text-4xl my-2">
            Join Blackleaf
          </h2>
          <p className="text-lg text-gray-600 font-secondary leading-relaxed mb-4">
            Apply to become a member and gain hands-on experience, mentorship, and access to our exclusive programs. Learn about the process, expectations, and upcoming intake dates.

          </p>
          </div>
          <div className="lg:hidden w-[126%] -ml-[13%] mx-auto bg-primary py-5 px-[5%] mb-8 lg:mb-0">
          <h2 className="ml-[5%] font-primary text-2xl lg:text-4xl my-2 text-white">
            Join Blackleaf
          </h2>
          <p className="text-lg text-white/80 p-5 font-secondary leading-relaxed mb-4">
            Apply to become a member and gain hands-on experience, mentorship, and access to our exclusive programs. Learn about the process, expectations, and upcoming intake dates.

          </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openAccordion === index}
                    aria-controls={`accordion-content-${index}`}
                    aria-label={`Toggle ${item.title} section`}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  >
                    <span className="text-lg font-primary text-gray-900">{item.title}</span>
                    <svg
                      className={`w-5 h-5 text-primary transition-transform duration-200 ${openAccordion === index ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openAccordion === index && (
                    <div
                      id={`accordion-content-${index}`}
                      className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                    >
                      <p className="text-gray-700 font-secondary leading-relaxed">{item.content}


                        {openAccordion == 1 && <span className="text-primary ml-3 underline cursor-pointer">Membership Form</span>}

                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:gap-10 my-auto">
          {/* Other Student Groups / Companies */}
          <div className="w-full">
            <div className="p-6 py-2 rounded-full bg-[#F6F6F6] text-gray-600 mb-5 inline-flex">Others</div>
            <div className="space-y-6">
              {comparisonData.map((item, index) => (
                <div key={index} className="bg-[#F6F6F6] rounded-xl p-4 lg:p-10 text-gray-600 font-secondary">
                  <FaStopCircle className="text-gray-300 mb-3" />
                  <p>{item.others}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div className="w-full">
            <div className="p-6 py-2 rounded-full bg-primary text-white mb-5 inline-flex">Us</div>

            <div className="space-y-6">
              {comparisonData.map((item, index) => (
                <p
                  key={index}
                  className="bg-[#F6F6F6] rounded-xl p-4 lg:p-10 font-secondary text-primay font-medium"
                >
                  <FaCircleCheck className="text-primary mb-3" />

                  {item.us}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>


    </div>
    <div ref={formRef} className="pb-20"></div>
    <MembershipForm />
    <Testimonials />
  </div>;
};

export default Join;
