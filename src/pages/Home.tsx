
import { useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* New Black Screen Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-black"
        style={{
          backgroundImage: `url('https://i.ibb.co/Fq4LhRvc/IMG-20250717-113043.webp')`, // Change this URL to your desired image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        
        <div className="relative z-10 text-center text-white">
          {/* Airavata Logo */}
          <img 
            src="/1000127425-removebg-preview.png" 
            alt="AIRAVATA" 
            className="mx-auto mb-8 h-64 w-auto md:h-80 lg:h-96 xl:h-[28rem]"
            style={{ 
              maxHeight: '450px',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
            }}
          />
        </div>
      </section>

      {/* Cinematic Hero Section - Air Taxi Background */}
      <section 
        className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
        style={{
          backgroundImage: `url('/lovable-uploads/ebd12fbc-533d-4ca7-b87e-72929c269ec1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        role="img"
        aria-label="Futuristic medical air taxi aircraft"
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        
        {/* Hero Two-Line Uppercase Text - Bottom-Left Position */}
        <div className="relative z-10 pb-8 pl-12 lg:pb-16 lg:pl-20 max-w-4xl" style={{ paddingBottom: '2vw', paddingLeft: '5vw' }}>
          <h1 
            className="font-bold text-white leading-tight text-left uppercase mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            THE FUTURE OF <br /> AIR MOBILITY
          </h1>
          
          {/* Sub heading */}
          <p 
            className="text-white/80 font-medium leading-relaxed text-left mb-6"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            SMARTER. SAFER. FASTER.
          </p>
          
          {/* Learn More Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-ddin font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">Learn More</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center">
            <ChevronDown 
              size={24} 
              className="text-white/60 animate-bounce cursor-pointer hover:text-blue-400 transition-colors duration-300" 
              onClick={() => {
                document.getElementById('content')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            />
          </div>
        </div>
      </section>

      {/* Content Section - Revealed on Scroll */}
      <section 
        id="content" 
        className="relative min-h-screen flex items-end justify-end overflow-hidden bg-black"
        style={{
          backgroundImage: `url('https://i.ibb.co/Gvw7bYjX/IMG-20250704-WA0279.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Content Text - Bottom-Right Position */}
        <div className="relative z-10 pb-8 pr-12 lg:pb-16 lg:pr-20 max-w-4xl" style={{ paddingBottom: '2vw', paddingRight: '5vw' }}>
          <h2 
            className="font-bold text-white leading-tight text-left uppercase mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2',
              textAlign: 'left',
            }}
          >
            NO TRAFFIC.<br />NO LIMITS
          </h2>
          
          <p 
            className="text-white/80 font-medium leading-relaxed text-left"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              textAlign: 'left',
              marginTop: '1rem',
            }}
          >
            REACH ANYWHERE IN MINUTES
          </p>
          
          {/* Learn More Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-ddin font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden mt-6"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">Learn More</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
        style={{
          backgroundImage: `url('https://i.ibb.co/8gDrLgyS/IMG-20250704-WA0282.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        
        {/* Content - Bottom Left */}
        <div className="relative z-10 pb-8 pl-12 lg:pb-16 lg:pl-20 max-w-4xl" style={{ paddingBottom: '2vw', paddingLeft: '5vw' }}>
          <h1 
            className="font-bold text-white leading-tight text-left uppercase mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            FUTURISTIC EXPERIENCE
          </h1>
          
          {/* Sub heading */}
          <p 
            className="text-white/80 font-medium leading-relaxed text-left mb-6"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            NEW, PREMIUM TRAVEL EXPERIENCE
          </p>
          
          {/* Explore Button */}
          <button 
            onClick={() => {
              document.getElementById('air-taxi')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-ddin font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">EXPLORE</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </section>

      {/* Air Taxi Section 1 - Meet the Air Taxi */}
      <section 
        id="air-taxi"
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

      {/* Air Taxi Section 2 - Future Vision */}
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

export default Home;
