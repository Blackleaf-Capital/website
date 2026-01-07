import { useState } from 'react';
import network5 from '../assets/images/network5.jpeg'
import network4 from '../assets/images/network4.jpeg'
import network3 from '../assets/images/network3.jpeg'
import network2 from '../assets/images/network2.jpeg'

const About = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Industry Research",
      content: "We provide in-depth analysis and comprehensive reports on a wide range of industries. Our investment team deep dives into market trends, competitive landscape and emerging technologies to uncover valuable insights."
    },
    {
      title: "Investment Analysis",
      content: "We train our members in the investment team to perform comprehensive due diligence, build financial models and evaluate potential investment opportunities critically to develop investment theses grounded in fundamental analysis."
    },
    {
      title: "Hands-on Learning",
      content: "We bridge the gap between learned and real-world application. Through interactive workshops, stock pitch competitions and direct involvements, members develop the practical skills and confidence to excel."
    },
    {
      title: "Networking Opportunities",
      content: "We plan exclusive opportunities such as our Annual Bay Street Trek for members to connect with a diverse network of industry professionals to foster meaningful connections that support professional growth."
    }
  ];

  return (
    <div id="about" className="w-[90%] mx-auto my-[10vh] lg:mt-[20vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 mb-16">
        <div className='w-full lg:w-[90%]'>
          <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">About Us</div>
          <h2 className="w-[90%] lg:w-[75%] font-primary text-2xl lg:text-4xl my-2">
            Empowering Black Excellence in Finance
          </h2>
          <p className="text-lg text-gray-600 font-secondary leading-relaxed mb-4">
            Canada's premier student-run organization dedicated to bridging the gap between Black students and finance careers through education, mentorship, and real-world experience.
          </p>
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
                      <p className="text-gray-700 font-secondary leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden w-[85%] mx-auto aspect-square rounded-xl items-center justify-center lg:grid grid-cols-2 gap-3">
          <div className='grid grid-cols-1 -mt-[30px] gap-3'>
            <div className='w-full rounded-xl aspect-square bg-black overflow-hidden cursor-pointer relative group'>
              <img
                src={network3}
                alt="Image 1"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-3">Community Networking Event</h3>
                <p className="text-white/90 text-sm">Connected 50+ Black students with industry professionals and mentors across Canada</p>
              </div>
            </div>
            <div className='w-full rounded-xl aspect-square bg-black overflow-hidden cursor-pointer relative group'>
              <img
                src={network2}
                alt="Image 2"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-3">Scholarship Program Launch</h3>
                <p className="text-white/90 text-sm">Awarded $100,000 in scholarships to support Black students pursuing higher education</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-3'>
            <div className='w-full rounded-xl aspect-square bg-black overflow-hidden cursor-pointer relative group'>
              <img
                src={network5}
                alt="Image 3"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-3">Annual Gala 2024</h3>
                <p className="text-white/90 text-sm">Celebrated achievements and raised funds to empower the next generation of Black leaders</p>
              </div>
            </div>
            <div className='w-full rounded-xl aspect-square bg-black overflow-hidden cursor-pointer relative group'>
              <img
                src={network4}
                alt="Image 4"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-3">Mentorship Program</h3>
                <p className="text-white/90 text-sm">Paired 75+ students with successful professionals for career guidance and support</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About