import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AirTaxi = () => {
  const navigate = useNavigate();

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
        <div className="relative z-10 pb-16 pl-8 max-w-lg" style={{ paddingBottom: '3vw', paddingLeft: '4vw' }}>
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
        <div className="relative z-10 pb-16 pr-16 max-w-lg text-right" style={{ paddingBottom: '3vw', paddingRight: '6vw' }}>
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
    </div>
  );
};

export default AirTaxi;
