import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import Join from './pages/Join';

import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
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
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>

        {/* Footer - Appears on all pages */}
        <Footer />

        {/* Mobile Sidebar Overlay - Now handled in SideBar component */}
      </div>
    </Router>
  );
}

export default App;
