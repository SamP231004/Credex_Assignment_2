import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handlePageTransition = async () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setShowPage(false);
        
        // Wait for transition
        await new Promise(resolve => setTimeout(resolve, 600));
        
        setShowPage(true);
        setIsTransitioning(false);
      }
    };

    handlePageTransition();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <CustomCursor />
      
      <div className={`page-transition ${isTransitioning ? 'active' : 'exit'}`}></div>
      
      <Navbar />
      
      <main className={`flex-grow ${showPage ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;