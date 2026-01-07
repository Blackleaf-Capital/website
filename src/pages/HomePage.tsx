import About from "../components/About";
import Events from "../components/Events";
import Impact from "../components/Impact";
import LandingPage from "../components/LandingPage";
import Team from "../components/Team";
import WhatWeDo from "../components/WhatWeDo";

const Homepage = () => {
  return <div>
    <LandingPage/>
    <About/>
    <Impact/>
    {/* <WhatWeDo/> */}
    <Team/>
    <Events/>
  </div>;
};


export default Homepage;
