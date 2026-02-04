import { lazy, Suspense, useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Impact from "../components/Impact";
import LogoMarquee from "../components/LogoMarquee";
import { getPlacement } from "../apis/sponsors";

// Lazy load the Team component because it contains heavy Swiper logic
const Team = lazy(() => import("../components/Team"));


const Homepage = () => {
  const [placement, setPlacement] = useState<any[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const placementImages = await getPlacement()

      setPlacement(placementImages);

    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col">
      {/* 1. Critical Content (Loads Immediately) */}
      <LandingPage />

      {/* 2. Secondary Content */}
      <About />
      <Impact />

      {/* 3. Heavy Content (Lazy Loaded) */}
      {/* The Suspense boundary prevents the heavy Swiper JS from blocking the initial page load */}
      <Suspense
        fallback={
          <div className="w-full h-80 bg-gray-50 animate-pulse flex items-center justify-center">
            <p className="text-gray-400 font-secondary">Loading Team...</p>
          </div>
        }
      >
        <Team />
      </Suspense>
      <div className="pb-[30vh] w-full mx-auto bg-white mt-20 lg:mt-0">
        <h2 className="w-[90%] mx-auto font-primary text-2xl lg:text-4xl uppercase my-2 text-center lg:pb-8">
        Past and Current Members Placement
        </h2>
        <LogoMarquee
          logos={placement}
        />
      </div>
    </div>
  );
};

export default Homepage;