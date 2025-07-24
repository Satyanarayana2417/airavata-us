import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AirTaxi = () => {
  const navigate = useNavigate();
  const heroContentRef = useRef<HTMLDivElement>(null);
  const secondContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check if URL has #services hash and scroll to services section
    if (window.location.hash === '#services') {
      setTimeout(() => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    // Hero section animation (left to right)
    if (heroContentRef.current) {
      const elements = heroContentRef.current.children;
      
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

    // Second section animation on scroll (right to left)
    if (secondContentRef.current) {
      const elements = secondContentRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        x: 100,
        opacity: 0
      });

      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: secondContentRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(elements, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Full Background Image */}
      <section 
        className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
        style={{
          backgroundImage: `url('./airtaxi.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        role="img"
        aria-label="Advanced air taxi aircraft in flight"
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        
        {/* Text and Button - Bottom Left */}
        <div ref={heroContentRef} className="relative z-10 pb-16 pl-8 max-w-lg" style={{ paddingBottom: '3vw', paddingLeft: '4vw' }}>
          <h1 
            className="font-bold text-white leading-tight uppercase mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              lineHeight: '1.1',
            }}
          >
            Meet the Air Taxi
          </h1>
          
          <p 
            className="text-white/90 font-medium leading-relaxed mb-8"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em',
              fontWeight: '500',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.5',
            }}
          >
            AIR TAXIS ARE ELECTRIC VERTICAL TAKEOFF AND LANDING (EVTOL) AIRCRAFT DESIGNED TO REVOLUTIONIZE URBAN TRANSPORTATION.
          </p>
          
          {/* Learn More Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">LEARN OUR MISSION</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </section>

      {/* Second Section - Future Vision */}
      <section 
        className="relative min-h-screen flex items-end justify-end overflow-hidden bg-black"
        style={{
          backgroundImage: `url('./airtaxi 2s.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none"></div>
        
        {/* Content - Right Bottom */}
        <div ref={secondContentRef} className="relative z-10 pb-16 pr-16 max-w-lg text-right" style={{ paddingBottom: '3vw', paddingRight: '6vw' }}>
          <h2 
            className="font-bold text-white leading-tight uppercase mb-8"
            style={{
              fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              lineHeight: '1.0',
              whiteSpace: 'nowrap',
            }}
          >
            THE FUTURE IS NOW
          </h2>
          
          <p 
            className="text-white/80 font-medium leading-relaxed mb-12"
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em',
              fontWeight: '500',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.6',
            }}
          >
            EXPERIENCE THE NEXT GENERATION OF URBAN MOBILITY WITH AIRAVATA'S REVOLUTIONARY AIR TAXI TECHNOLOGY. 
            BYPASS TRAFFIC, REDUCE TRAVEL TIME, AND ELEVATE YOUR JOURNEY TO NEW HEIGHTS.
          </p>
          
          {/* Discover More Button */}
          <button 
            onClick={() => navigate('/about')}
            className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase overflow-hidden"
            style={{
              fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.15em',
              fontWeight: '600',
            }}
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">DISCOVER MORE</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </section>

      {/* Third Section - Our Services */}
      <section 
        id="services-section"
        className="relative min-h-screen bg-black py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              Our Services
            </h2>
            <p className="text-xl text-white/80 font-medium tracking-wide">
              Elevating transportation — one flight at a time.
            </p>
            <div className="w-32 h-0.5 bg-white mx-auto mt-8"></div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            
            {/* Service 1 - Point-to-Point Air Transport */}
            <div className="group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-white/90 transition-colors duration-300">
                Point-to-Point Air Transport
              </h3>
              <p className="text-white/80 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                Offer rapid aerial transport between designated takeoff and landing zones, bypassing conventional road congestion.
              </p>
            </div>

            {/* Service 2 - Aerial Tourism Experiences */}
            <div className="group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-white/90 transition-colors duration-300">
                Aerial Tourism
              </h3>
              <p className="text-white/80 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                Provide scenic flight experiences that offer panoramic views of landscapes, landmarks, and natural wonders — designed for leisure and luxury.
              </p>
            </div>

            {/* Service 3 - Emergency Air Services */}
            <div className="group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-white/90 transition-colors duration-300">
                Emergency Response Operations
              </h3>
              <p className="text-white/80 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                Deploy air ambulances and rapid aerial response units for medical emergencies, disaster relief, and time-critical situations.
              </p>
            </div>

            {/* Service 4 - Pilot Operations */}
            <div className="group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-white/90 transition-colors duration-300">
                Pilot Program
              </h3>
              <p className="text-white/80 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                Conduct trial-based operations in select pre-authorized regions to evaluate performance, safety, and scalability of aerial mobility services.
              </p>
            </div>

          </div>

          {/* Future Vision Section */}
          <div className="bg-gradient-to-r from-airavata-gray/10 to-airavata-gray/20 backdrop-blur-sm border border-airavata-gray/30 rounded-2xl p-12 mb-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
                What’s Ahead
              </h3>
              <p className="text-xl text-white/90 font-medium mb-8 tracking-wide">
                "Personal Air Mobility, On-Demand"
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
                Envisioning a fully dynamic air taxi network that enables users to request aerial rides from any location to any destination — seamlessly, securely, and instantly.
              </p>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              
              {/* Our Objectives Button */}
              <button 
                onClick={() => navigate('/objectives')}
                className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase overflow-hidden"
              >
                {/* White hover animation background */}
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center">
                  <span className="mr-3 group-hover:text-black transition-colors duration-500">Our Objectives</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
                </div>
              </button>

              {/* Contact Us Button */}
              <button 
                onClick={() => navigate('/contact')}
                className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase overflow-hidden"
              >
                {/* White hover animation background */}
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center">
                  <span className="mr-3 group-hover:text-black transition-colors duration-500">Contact Us</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
                </div>
              </button>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AirTaxi;
