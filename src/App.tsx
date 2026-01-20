import { useState, useEffect, lazy, Suspense } from 'react'; // Added lazy and Suspense
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import './App.css';
import ScrollToHash from './components/ScrollToHash';

// --- STEP 3: LAZY LOAD YOUR PAGES ---
const Homepage = lazy(() => import('./pages/HomePage'));
const Events = lazy(() => import('./pages/Events'));
const Team = lazy(() => import('./pages/Team'));
const Sponsors = lazy(() => import('./pages/Sponsors'));
const Join = lazy(() => import('./pages/Join'));
const EventDetails = lazy(() => import('./components/EventDetails'));

// A simple loading placeholder while the page chunk downloads
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#840E0E]"></div>
  </div>
);

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath.replace('/website', ''));
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div className="hidden lg:block sticky top-0 z-50">
        <NavBar />
      </div>

      <div className="lg:hidden sticky top-0 z-50">
        <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </div>

      <main className="lg:pt-0 min-h-screen">
        <ScrollToHash offset={150} />
        
        {/* --- STEP 3: WRAP ROUTES IN SUSPENSE --- */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/website">
      <AppContent />
    </Router>
  );
}

export default App;