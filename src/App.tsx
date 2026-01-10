import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import Join from './pages/Join';

import './App.css';
import EventDetails from './components/EventDetails';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we were redirected from 404.html
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
    <div className="min-h-screen bg-white relative ">
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden lg:block sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Mobile Navigation - Hidden on desktop */}
      <div className="lg:hidden sticky top-0 z-50">
        <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </div>

      {/* Main Content */}
      <main className="lg:pt-0 min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </main>

      {/* Footer - Appears on all pages */}
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