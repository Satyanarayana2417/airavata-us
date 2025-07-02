
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarNavigation from './SidebarNavigation';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
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
    { path: '/mission', label: 'Our Mission' },
    { path: '/about', label: 'About Us' },
    { path: '/objectives', label: 'Future Objectives' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="w-full px-8 py-4 h-24">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.ibb.co/p6gZZ9nL/1000127425-removebg-preview.webp" 
              alt="AIRAVATA" 
              className="h-32 w-auto"
              style={{ maxHeight: '300px' }}
            />
          </Link>

          {/* Navigation Menu - Right Side */}
          <div className="flex items-center">
            {/* Desktop Menu Bar */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-ddin font-semibold text-base transition-colors duration-200 hover:text-white hover:underline underline-offset-4 ${
                    location.pathname === item.path 
                      ? 'text-white' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Sidebar Navigation */}
            <div className="lg:hidden">
              <SidebarNavigation />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
