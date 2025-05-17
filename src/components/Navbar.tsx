import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Case Studies', path: '/case-studies' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tighter text-white hover:text-gray-200 transition-colors"
          >
            CENTRAL AXIS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium hover-underline py-1',
                  location.pathname === link.path ? 'text-white' : 'text-gray-400'
                )}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-black z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-out-expo md:hidden',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-2xl font-medium hover-underline py-1',
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;