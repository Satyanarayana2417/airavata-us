import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 transform ${
      visible ? 'translate-y-0' : '-translate-y-full'
    } ${
      scrolled ? 'lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:border-none bg-black backdrop-blur-md shadow-xl border-b border-gray-700' : 'bg-transparent backdrop-blur-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/logo.png" 
                alt="AIRAVATA Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
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
          
          {/* Mobile menu indicator - Shows on mobile and tablet */}
          <div className="lg:hidden">
            <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">
              Menu
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
