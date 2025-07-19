
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Mission = () => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      // Animate elements from left to right with stagger
      gsap.to(elements, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
      });
    }
  }, []);

  // Change this URL to customize the background image
  const backgroundImageUrl = "/airtaxi.jpg"; // Default image from public folder
  
  return (
    <>
      <div className="min-h-screen relative">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./mission 1page.avif')`, 
        }}
      >
      </div>
      
      {/* Content area - ready for your content */}
      <div className="relative z-10 flex items-center justify-start min-h-screen p-8">
        <div ref={contentRef} className="max-w-2xl">
          {/* Mission Heading */}
          <h1 
            className="text-white max-w-xl mb-6"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '2rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              lineHeight: '1.2',
            }}
          >
            Solving Urban Congestion<br />from the Sky
          </h1>
          
          {/* Sub Text */}
          <p 
            className="text-white/90"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '1rem',
              fontWeight: '400',
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              lineHeight: '1.6',
              textTransform: 'uppercase',
            }}
          >
          Our mission is to unlock the third dimension of transportation, creating a smart, sustainable, and accessible aerial mobility ecosystem. We aim to empower cities, enhance connectivity, and deliver a future where mobility is cleaner, faster, and frictionless.
            <br /><br />
           By embracing the skies, AIRAVATA revolutionizes mobility through advanced vertical takeoff and landing (VTOL) air taxis that dramatically reduce travel time—transforming hours into minutes. Designed for urban commutes, critical medical emergencies, and executive travel, AIRAVATA ensures that time, safety, and efficiency are no longer compromised by traffic or terrain
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* Explore Air Taxi Button */}
            <button 
              onClick={() => navigate('/air-taxi')}
              className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
            >
              {/* White hover animation background */}
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-black transition-colors duration-500">Explore Air Taxi</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
              </div>
            </button>

            {/* Our Future Vision Button */}
            <button 
              onClick={() => navigate('/objectives')}
              className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
            >
              {/* White hover animation background */}
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-black transition-colors duration-500">Our Future Vision</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Before vs After Comparison Section */}
    <div className="w-full h-screen bg-black flex items-center justify-center p-8">
      <div className="flex max-w-4xl w-full mx-auto overflow-hidden">
        
        {/* Before Box */}
        <div className="bg-black border-2 border-white/30 h-80 flex-1 flex flex-col items-center justify-center p-8 space-y-4 transform transition-all duration-700 ease-in-out hover:flex-[1.5] hover:translate-x-2 hover:shadow-2xl hover:border-white cursor-pointer relative overflow-hidden group">
          {/* White hover animation background */}
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center space-y-4 transform group-hover:scale-105 transition-transform duration-500">
            <h2 className="text-white text-xl font-semibold tracking-wider uppercase group-hover:text-black transition-colors duration-700">
              Before
            </h2>
            <p className="text-gray-300 text-base leading-relaxed text-center px-2 group-hover:text-black transition-colors duration-700">
              Ground transportation stuck in traffic
            </p>
            <div className="text-gray-500 text-4xl font-bold leading-none group-hover:text-black transition-colors duration-700">
              2+ Hours
            </div>
            <p className="text-gray-400 text-base tracking-wide uppercase group-hover:text-black transition-colors duration-700">
              Traditional Transport
            </p>
          </div>
        </div>

        {/* After Box */}
        <div className="bg-black border-2 border-white/30 h-80 flex-1 flex flex-col items-center justify-center p-8 space-y-4 transform transition-all duration-700 ease-in-out hover:flex-[1.5] hover:-translate-x-2 hover:shadow-2xl hover:border-white cursor-pointer relative overflow-hidden group">
          {/* White hover animation background */}
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center space-y-4 transform group-hover:scale-105 transition-transform duration-500">
            <h2 className="text-white text-xl font-semibold tracking-wider uppercase group-hover:text-black transition-colors duration-700">
              After
            </h2>
            <p className="text-gray-300 text-base leading-relaxed text-center px-2 group-hover:text-black transition-colors duration-700">
              AIRAVATA air taxi flying directly to destination
            </p>
            <div className="text-white text-4xl font-bold leading-none group-hover:text-black transition-colors duration-700">
              15 Minutes
            </div>
            <p className="text-gray-400 text-base tracking-wide uppercase group-hover:text-black transition-colors duration-700">
              AIRAVATA Solution
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Mission;
