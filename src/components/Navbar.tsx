import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/mission', label: 'Our Mission' },
    { path: '/air-taxi', label: 'Services' },
    { path: '/objectives', label: 'Future Objectives' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for styling
      setScrolled(currentScrollY > 50);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < 100) {
        // Always show navbar at the top
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setVisible(false);
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (path: string) => {
    if (path === '/air-taxi') {
      // If already on air-taxi page, scroll to services section
      if (location.pathname === '/air-taxi') {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to air-taxi page with hash to trigger services scroll
        navigate('/air-taxi');
        // Use timeout to ensure the page has loaded before scrolling
        setTimeout(() => {
          const servicesSection = document.getElementById('services-section');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Navigate to other pages
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:border-none bg-black backdrop-blur-md shadow-xl border-b border-gray-700' : 'bg-transparent backdrop-blur-none'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0 py-1 sm:py-2">
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
                <img 
                  src="/logo.png" 
                  alt="AIRAVATA Logo" 
                  className="w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-none"
                  style={{
                    height: 'clamp(20px, 4vw, 40px)',
                    maxHeight: '32px'
                  }}
                />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button - Hidden on desktop */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-white hover:text-gray-300 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 border-b-2 ${
                      location.pathname === item.path
                        ? 'text-white border-white'
                        : 'text-gray-300 border-transparent hover:text-white hover:border-gray-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full xxs:w-72 xs:w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4 xxs:p-6">
            <button
              onClick={closeMenu}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X size={20} className="xxs:size-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-start pt-2 xxs:pt-4 px-4 xxs:px-8 space-y-4 xxs:space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-right py-1 xxs:py-2 border-b border-gray-700 transition-all duration-300 ease-out group transform ${
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
                  fontSize: 'clamp(0.75rem, 3vw, 0.875rem)',
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

export default Navbar;
