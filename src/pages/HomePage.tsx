import { lazy, Suspense } from "react";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Impact from "../components/Impact";

// Lazy load the Team component because it contains heavy Swiper logic
const Team = lazy(() => import("../components/Team"));

const Homepage = () => {
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
    </div>
  );
};

export default Homepage;