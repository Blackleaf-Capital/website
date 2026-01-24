import { MdOutlineArrowRightAlt, MdOutlineLibraryBooks, MdOutlineGroups } from "react-icons/md";
import { useEffect, useState } from "react";
import LogoGrid from "../components/LogoGrid";
import { getJoinPhoto, getSponsorPhoto } from "../apis/homepage";
import { getSponsors } from "../apis/sponsors";
import { HiOutlineUserGroup } from "react-icons/hi2";
// import { getExecMembers } from "../apis/members";
// import { getEvents } from "../apis/events";

const Sponsors = () => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'investment' | 'membership'>('benefits');
  const [sponPhoto, setSponsorPhoto] = useState<string>("");
  // const [executiveTeam, setExecutiveMembers] = useState<any[]>([]);
  const [sponsors, setSponsors] = useState<any[]>([]);
  // const [events, setEvents] = useState<any[]>([]);
  const [joinPhoto, setjoinPhoto] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const sponsorPhoto = await getSponsorPhoto();
      const joinPhoto = await getJoinPhoto();
      const sponsorsImages = await getSponsors();
      // const eventsData = await getEvents();

      setSponsors(sponsorsImages);
      setSponsorPhoto(sponsorPhoto[0].image);
      setjoinPhoto(joinPhoto[0].image);
      // setEvents(eventsData || []);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const members = await getExecMembers();

  //     const sortedMembers = [...members].sort((a, b) => {
  //       const posA = a.Position?.toLowerCase() || "";
  //       const posB = b.Position?.toLowerCase() || "";

  //       // Explicitly define 'pos' as a string to fix the TS7006 error
  //       const getWeight = (pos: string): number => {
  //         if (pos.includes("chief executive officer")) return 1;
  //         if (pos.includes("chief operating officer")) return 2;
  //         if (pos.includes("chief investment officer")) return 3;
  //         return 4;
  //       };

  //       return getWeight(posA) - getWeight(posB);
  //     });

  //     setExecutiveMembers(sortedMembers);
  //   };

  //   fetchData();
  // }, []);



  const investmentTeamCompanies = [
    { name: "Lamb West", ticker: "NYSE: LW" },
    { name: "Secure", ticker: "TSX: SFS" },
    { name: "Dollar Tree", ticker: "NASDAQ: DLTR" },
    { name: "Perdoceo", ticker: "NASDAQ: PRDO" }
  ];

  const coreIndustries = [
    "Consumer",
    "Healthcare",
    "Industrials",
    "Technology",
    "Media, and Telecomm.",
    "Financial Institutions"
  ];

  const keyOperations = [
    {
      icon: "💼",
      title: "Gain practical investing experience",
      description: "By managing a long-only equities fund"
    },
    {
      icon: "🤝",
      title: "Meet and connect with business professionals",
      description: "Through network events"
    },
    {
      icon: "🔍",
      title: "Prepare for the recruiting process",
      description: "And gain resume feedback"
    },
    {
      icon: "📚",
      title: "Learn invaluable information on financial markets",
      description: "Via Blackleaf's summer educational program"
    }
  ];

  // const programStructure = [
  //   { count: "6", activity: "Stock Pitch Presentations" },
  //   { count: "6", activity: "Industry Update Presentations" },
  //   { count: "24", activity: "Investment One Pagers and Positioning" },
  //   { count: "+", activity: "More" }
  // ];


  return (
    <div className="pt-[5vh] lg:pt-0 pb-[20vh]">
      {/* Hero Section */}
      <div className="mx-auto lg:min-h-[90vh] w-[80%] grid grid-cols-1 lg:grid-cols-[50%_50%] items-center gap-5">
        <div className="flex flex-col justify-center">
          <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">Partnership Opportunities</div>
          <h2 className="w-full lg:w-[90%] font-primary text-2xl lg:text-3xl uppercase my-2">Champion Inclusion in Finance</h2>
          <p className="text-lg font-secondary w-full lg:w-[80%]">
            Partner with Blackleaf Capital to support the next generation of Black leaders in finance.
            Our sponsorship opportunities provide meaningful engagement with top-tier talent while
            demonstrating your commitment to diversity and inclusion in the financial services industry.
          </p>
          <button className="mt-10 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2">
            Become a Sponsor
            <MdOutlineArrowRightAlt />
          </button>
        </div>
        <div className="w-full my-10 lg:my-0 aspect-square lg:aspect-[1/0.8] rounded-xl relative pb-16 overflow-hidden">
          <img
            src={sponPhoto}
            className="w-full rounded-xl h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            alt="Blackleaf Capital Team"
          />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="w-[80%] mx-auto my-20 text-center">
        <h3 className="font-primary text-xl uppercase mb-6">Our Mission</h3>
        <p className="text-lg font-secondary max-w-4xl mx-auto">
          Blackleaf is Canada's leading nationwide student-run nonprofit organization focused on educating
          Black students on the finance industry through professional development opportunities and practical
          experience investing in a long-only equities investment fund. Blackleaf Capital is committed to
          developing future Black leaders in the financial services industry by bridging the gap between
          potential and opportunity.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="w-[80%] mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-6 py-3 rounded-full transition-all ${activeTab === 'benefits'
              ? 'bg-primary text-white'
              : 'border border-gray-300 text-gray-700 hover:border-primary'
              }`}
          >
            Sponsor Benefits
          </button>
          <button
            onClick={() => setActiveTab('investment')}
            className={`px-6 py-3 rounded-full transition-all ${activeTab === 'investment'
              ? 'bg-primary text-white'
              : 'border border-gray-300 text-gray-700 hover:border-primary'
              }`}
          >
            Investment Team
          </button>
          <button
            onClick={() => setActiveTab('membership')}
            className={`px-6 py-3 rounded-full transition-all ${activeTab === 'membership'
              ? 'bg-primary text-white'
              : 'border border-gray-300 text-gray-700 hover:border-primary'
              }`}
          >
            Membership Program
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'benefits' && (
          <div className="space-y-16">
            {/* Corporate Sponsors' Benefits */}
            <div className="text-center mb-12">
              <h2 className="font-primary text-2xl uppercase mb-8">Corporate Sponsors' Benefits</h2>
              <p className="text-lg font-secondary max-w-3xl mx-auto mb-12">
                Blackleaf seeks to have a corporate sponsorship relationship that is of mutual benefit.
                We understand and appreciate the resources provided to us and aim to be a non-profit
                organization that provides long-term value and satisfaction to our sponsors.
              </p>
            </div>

            {/* Three Key Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">1</div>
                <h3 className="font-primary text-xl mb-4">Champion Inclusion in the Finance Industry</h3>
                <p className="text-lg font-secondary">
                  By supporting Blackleaf, your firm demonstrates a clear commitment to building a more
                  inclusive industry. Sponsorship provides visibility as a leader in advancing equity
                  and opportunity, while also fostering a workplace culture that values diversity,
                  innovation, and long-term success.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">2</div>
                <h3 className="font-primary text-xl mb-4">Direct Access to a Network of Black Talent</h3>
                <p className="text-lg font-secondary">
                  Blackleaf connects sponsors to a highly skilled pool of students from leading Canadian
                  universities. This partnership serves as a centralized platform to engage with motivated
                  Black students who are actively preparing for careers in business and finance, helping
                  firms strengthen their recruitment pipelines in a meaningful way.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">3</div>
                <h3 className="font-primary text-xl mb-4">Develop the Next Generation of Black Leaders</h3>
                <p className="text-lg font-secondary">
                  Through the Blackleaf Educational Program, sponsors play a direct role in equipping
                  students with the technical skills, mentorship, and industry insights needed to thrive.
                  Your support ensures a strong and sustainable pipeline of Black professionals who are
                  prepared to succeed and lead in the industry.
                </p>
              </div>
            </div>

            <div className="w-[80%] mx-auto my-20 rounded-xl p-8 lg:p-12 ">
        <h2 className="font-primary text-2xl uppercase text-center mb-34">Executive Message</h2>
       
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-secondary text-lg mb-6">
            "On behalf of the Blackleaf Capital executive team we thank you for considering Blackleaf
            as a corporate sponsor for the upcoming year. As we enter our third year, we are proud to
            reflect on how far our organization has come and excited to share our vision for the future."
          </p>
          <p className="font-secondary text-lg mb-6">
            "From the start, Blackleaf set out to transform the finance industry by bridging the gap
            between potential and opportunity through equitable representation. That mission remains at
            our core, and in our third year we are equally focused on developing the remarkable talent
            within our own ranks."
          </p>
          <p className="text-lg font-secondary mb-6">
            "Our members have demonstrated outstanding drive and skill and we are committed to providing
            them with the resources, mentorship and real world experiences that will help them excel in
            the competitive world of finance. By nurturing this internal talent we ensure that Blackleaf
            is not only a gateway to the industry but also a proving ground for the next generation of
            financial leaders."
          </p>
          <p className="text-lg font-secondary mb-6">
            "As we look ahead we invite you to join us in supporting this mission. Together we can provide
            Blackleaf's talented members with the opportunities and guidance they need to redefine what
            leadership in finance looks like."
          </p>
          <p className="text-lg font-secondary font-semibold">
            Sincerely,<br />
            The Blackleaf Capital 2025-2026 Executive Team
          </p>
        </div>
      </div>
          </div>
        )}

        {activeTab === 'investment' && (
          <div className="space-y-16">
            {/* Investment Team Overview */}
            <div className="text-center mb-12">
              <h2 className="font-primary text-2xl uppercase mb-8">Investment Team</h2>
              <p className="text-lg font-secondary max-w-3xl mx-auto mb-12">
                Blackleaf Capital operates a virtual long-only public equity investment portfolio with
                the purpose of educating students through practical and real-world experience.
              </p>
            </div>

            {/* Investment Philosophy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="font-primary text-xl mb-6">Practical Investment Experience</h3>
                <p className="text-lg font-secondary mb-4">
                  Blackleaf Capital operates a virtual long-only public equity investment portfolio with
                  the purpose of educating students through practical and real-world experience. By
                  developing unique investment ideas, students can iteratively hone their abilities to
                  build and apply investment theses to real equity securities.
                </p>
                <p className="text-lg font-secondary">
                  Members gain exposure to the full investment cycle, including researching industries,
                  valuing companies, and pitching ideas, while developing soft skills that prepare them
                  for future careers in finance, consulting, and other competitive industries.
                </p>
              </div>
              <div>
                <h3 className="font-primary text-xl mb-6">Investment Philosophy</h3>
                <p className="text-lg font-secondary mb-4">
                  The primary investment philosophy is a long-term value investing approach. Students
                  will be expected to conduct in-depth analysis of securities with the intention of
                  identifying companies that are mispriced and undervalued in the market, providing
                  a substantial margin of safety.
                </p>
                <p className="text-lg font-secondary">
                  The principal focus of investment opportunities is "great businesses at undervalued prices",
                  ensuring the portfolio only consists of high-quality assets. In order to maintain a
                  diversified basket of assets, no position will make up more than 7% of the fund.
                </p>
              </div>
            </div>

            {/* Core Industries */}
            <div className="mb-16">
              <h3 className="font-primary text-xl text-center mb-8">We Selectively Focus on Six Core Industries</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {coreIndustries.map((industry, index) => (
                  <div key={index} className="bg-primary text-white p-6 rounded-lg text-center">
                    <h4 className="font-primary text-lg">{industry}</h4>
                  </div>
                ))}
              </div>
              <p className="text-center text-lg font-secondary mt-6 max-w-4xl mx-auto">
                Analysts will be assigned to one of these six groups each year based on their experience
                and expertise, and each group will be expected to generate two investment opportunities
                annually. This allows analysts to develop a level of expertise within their respective
                industry, developing a knowledge base that Blackleaf members will retain and build upon
                in the following years.
              </p>
            </div>

            {/* Investment Team Companies */}
            <div className="mb-16">
              <h3 className="font-primary text-xl text-center mb-8">Current Portfolio Companies</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {investmentTeamCompanies.map((company, index) => (
                  <div key={index} className="border border-gray-200 p-6 rounded-lg text-center">
                    <h4 className="font-primary text-lg mb-2">{company.name}</h4>
                    <p className="text-primary font-semibold">{company.ticker}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-30">
              <div>
                <h3 className="font-primary text-xl mb-8">Program Annual Structure</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-white">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-primary text-gray-900">Stock Pitch Presentations</span>
                        <span className="text-2xl font-bold text-primary">6</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-white">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-primary text-gray-900">Industry Update Presentations</span>
                        <span className="text-2xl font-bold text-primary">6</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-white">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-primary text-gray-900">Investment One Pagers and Positioning</span>
                        <span className="text-2xl font-bold text-primary">24</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-white">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-primary text-gray-900">Additional Activities</span>
                        <span className="text-2xl font-bold text-primary">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full aspect-square lg:aspect-[1/0.8] rounded-xl relative overflow-hidden">
                <img
                  src={joinPhoto}
                  className="w-full rounded-xl h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  alt="Blackleaf Capital Team"
                />
              </div>
            </div>

            {/* Key Operations */}
            <div className="my-26">
              <h3 className="font-primary text-xl text-center mb-20">Key Operations</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {keyOperations.map((operation, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl font-bold text-primary flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-primary text-lg mb-2">{operation.title}</h4>
                        <p className="text-lg font-secondary">{operation.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'membership' && (
          <div className="space-y-16">
            {/* Membership Program Overview */}
            <div className="text-center mb-12">
              <h2 className="font-primary text-2xl uppercase mb-8">Membership Program</h2>
              <p className="text-lg font-secondary max-w-3xl mx-auto mb-12">
                Apart from our investment team, Blackleaf also has its membership program that allows
                students to dip their toes into the world of finance without being on the investment team.
                This offers a very low commitment opportunity for students to develop their skillset.
              </p>
            </div>

            {/* Membership Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="border rounded-2xl border-black/20 p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <HiOutlineUserGroup className="text-4xl text-primary" />
                </div>
                <h3 className="font-primary text-xl mb-4">Networking Events</h3>
                <p className="text-lg font-secondary">
                  Join our networking events with our sponsors to get an insight into the financial
                  service industry
                </p>
              </div>
              <div className="border rounded-2xl border-black/20 p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MdOutlineLibraryBooks className="text-4xl text-primary" />
                </div>
                <h3 className="font-primary text-xl mb-4">Resources</h3>
                <p className="text-lg font-secondary">
                  We offer a variety of resources to help with recruiting and understanding your
                  financial journey created by our execs
                </p>
              </div>
              <div className="border rounded-2xl border-black/20 p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MdOutlineGroups className="text-4xl text-primary" />
                </div>
                <h3 className="font-primary text-xl mb-4">Mentorship Program</h3>
                <p className="text-lg font-secondary">
                  Offering 1 on 1 mentorship opportunities with members with an experience in finance
                </p>
              </div>
            </div>

            {/* Sample Events */}
            {/* <div className="mb-16">
              <h3 className="font-primary text-xl text-center mb-8">Membership Events</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {events.slice(0, 2).map((event, index) => (
                  <div key={index} className="border rounded-2xl cursor-pointer border-black/20 p-4">
                    <div className="w-full aspect-[1/.6] rounded-2xl overflow-hidden bg-black">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-primary my-3 font-medium">{event.title}</h4>
                    <p className="text-lg font-secondary line-clamp-2">{event.description}</p>
                    <div className="flex flex-row items-center justify-between">
                      <div className="my-4 w-[40px] aspect-square rounded-full border border-primary flex items-center justify-center transition">
                        <MdOutlineArrowRightAlt size={18} className="text-primary" />
                      </div>
                      {event.date && (
                        <p className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        )}
      </div>

      {/* Corporate Partners Section */}
      <div className="w-[80%] mx-auto">
        <LogoGrid
          title="Corporate Partners"
          logos={sponsors}
        />
      </div>

      {/* Past and Current Members Placement */}


      {/* Executive Message */}


    {/* Call to Action */}
      <div className="w-[80%] mx-auto text-center">
        <h2 className="font-primary text-2xl uppercase mb-6">Ready to Partner With Us?</h2>
        <p className="text-lg font-secondary mb-8 max-w-2xl mx-auto">
          Join us in building the next generation of Black leaders in finance. Contact us to learn more
          about our sponsorship opportunities and how we can create a mutually beneficial partnership.
        </p>

      </div>
    </div>
  );
};

export default Sponsors;
