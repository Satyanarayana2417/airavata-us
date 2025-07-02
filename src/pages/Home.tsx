
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Zap, Shield, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered content reveal for content section
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'bottom 80%',
      onEnter: () => {
        gsap.from('.brand-reveal', {
          opacity: 0,
          y: 60,
          duration: 2,
          stagger: 0.3,
          ease: 'power3.out'
        });
      }
    });

    // Features section reveal
    ScrollTrigger.create({
      trigger: featuresRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.from('.feature-card', {
          opacity: 0,
          y: 60,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Cinematic Hero Section - Air Taxi Background */}
      <section 
        ref={heroRef} 
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
        <div className="relative z-10 pb-20 pl-12 lg:pb-32 lg:pl-20 max-w-4xl" style={{ paddingBottom: '5vw', paddingLeft: '5vw' }}>
          <h1 
            className="font-ddin text-white font-bold leading-tight text-left uppercase"
            style={{
              fontSize: 'clamp(1rem, 3.0vw, 2.5rem)',
              fontFamily: 'D-DIN-Bold, Arial, Verdana, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.03em',
              margin: '0 42px 0 0',
              
            }}
          >
            PIONEERING A NEW<br />
            ERA OF TRANSPORTATION
          </h1>
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
      <section id="content" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Reveal */}
          <div className="mb-16">
            <h2 className="brand-reveal font-ddin font-bold text-white mb-8 tracking-[0.2em] text-clamp-4xl sm:text-clamp-6xl lg:text-clamp-7xl leading-none">
              Medical-grade air mobility
            </h2>
            
            <div className="brand-reveal mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            
            <p className="brand-reveal mt-8 text-clamp-lg sm:text-clamp-xl lg:text-clamp-2xl text-white/90 font-light leading-relaxed">
              Luxury. Speed. Safety.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-ddin font-bold text-white mb-8 text-clamp-3xl sm:text-clamp-4xl lg:text-clamp-5xl tracking-wide">
              The Future of <span className="text-gradient-blue">Urban Mobility</span>
            </h2>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8"></div>
            <p className="text-clamp-lg text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
              Experience the next generation of transportation with our luxury air taxi service, 
              engineered for medical emergencies and executive travel with unprecedented precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="feature-card group">
              <div className="relative bg-gradient-to-br from-gray-900/20 to-gray-900/5 backdrop-blur-xl border border-gray-800/30 rounded-3xl p-10 text-center hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-400/30 to-blue-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="text-blue-400" size={36} />
                  </div>
                  <h3 className="font-ddin font-bold text-clamp-xl text-white mb-6 tracking-wide">Lightning Fast</h3>
                  <p className="text-white/70 leading-relaxed font-light">
                    Transform 2-hour ground commutes into 15-minute vertical flights. 
                    Skip traffic, save lives, maximize time.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card group">
              <div className="relative bg-gradient-to-br from-gray-900/20 to-gray-900/5 backdrop-blur-xl border border-gray-800/30 rounded-3xl p-10 text-center hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-400/30 to-blue-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="text-blue-400" size={36} />
                  </div>
                  <h3 className="font-ddin font-bold text-clamp-xl text-white mb-6 tracking-wide">Medical Grade Safety</h3>
                  <p className="text-white/70 leading-relaxed font-light">
                    Hospital-standard safety protocols, certified medical equipment, 
                    and trained emergency response teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card group">
              <div className="relative bg-gradient-to-br from-gray-900/20 to-gray-900/5 backdrop-blur-xl border border-gray-800/30 rounded-3xl p-10 text-center hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-400/30 to-blue-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-blue-400" size={36} />
                  </div>
                  <h3 className="font-ddin font-bold text-clamp-xl text-white mb-6 tracking-wide">24/7 Readiness</h3>
                  <p className="text-white/70 leading-relaxed font-light">
                    Round-the-clock emergency response and executive transport services. 
                    Ready when you need us most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
