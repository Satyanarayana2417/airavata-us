
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Plane, Target, Users, Zap, Phone } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/mission', label: 'Our Mission' },
    { path: '/air-taxi', label: 'Services' },
    
    { path: '/objectives', label: 'Future Objectives' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (path: string) => {
    // Special handling for Services to scroll to services section
    if (path === '/air-taxi') {
      // If already on air-taxi page, scroll to services section
      if (location.pathname === '/air-taxi') {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to air-taxi page, then scroll to services section after navigation
        window.location.href = '/air-taxi#services';
      }
    } else {
      // Scroll to top when navigating to other pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleGeneralNavClick = () => {
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <>
      {/* Menu Button - Always visible on all screens */}
      <button
        onClick={toggleMenu}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-black/20'
        } text-white hover:bg-black/50`}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Menu from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={closeMenu}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-start pt-4 px-8 space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => item.path === '/air-taxi' ? handleNavClick(item.path) : handleGeneralNavClick()}
                className={`text-right py-2 border-b border-gray-700 transition-all duration-300 ease-out group transform ${
                  location.pathname === item.path
                    ? 'text-white border-white'
                    : 'text-gray-400 hover:text-white hover:border-gray-500'
                } ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-8 opacity-0'
                }`}
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transitionDelay: isMenuOpen ? `${(index + 1) * 0.1}s` : '0s',
                  transitionDuration: '0.4s'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
