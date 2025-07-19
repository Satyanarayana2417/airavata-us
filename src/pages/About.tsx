
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const elements = headerRef.current.children;
      
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

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div ref={headerRef} className="absolute top-20 left-8 z-10 max-w-md">
        <h1 className="text-white text-4xl font-bold mb-2">
          MEET AIRAVATA
        </h1>
        <div className="w-24 h-0.5 bg-white mb-4"></div>
        <p className="text-white text-base uppercase leading-relaxed mb-6">
          WE ARE A VISIONARY TEAM OF AVIATION EXPERTS AND TECHNOLOGY INNOVATORS UNITED BY A COMMON GOAL: REVOLUTIONIZING URBAN MOBILITY THROUGH THE SKIES.
        </p>
        <p className="text-white text-base uppercase leading-relaxed">
          TODAY, WE'RE PIONEERING THE DEVELOPMENT OF LUXURIOUS, MEDICALLY-EQUIPPED AIR TAXIS THAT WILL TRANSFORM HOW PEOPLE MOVE THROUGH CITIES, STARTING WITH EMERGENCY MEDICAL TRANSPORT AND EXPANDING TO EXECUTIVE TRAVEL SOLUTIONS.
        </p>
      </div>

      {/* Section 1 - Black Screen with Image */}
      <div className="h-screen bg-black relative overflow-hidden">
        <img 
          src="https://i.ibb.co/n8zMKHsB/IMG-20250719-140017.webp" 
          alt="Futuristic Room" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section 2 - Connect Our Team */}
      <div className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-8">
          {/* Section Title */}
          <h2 className="text-white text-4xl font-bold mb-4 uppercase tracking-wider">
            Connect Our Team
          </h2>
          {/* Line under title */}
          <div className="w-32 h-0.5 bg-white mx-auto mb-16"></div>
          
          {/* Team Circles */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20">
            
            {/* Team Member 1 */}
            <div className="group relative cursor-pointer">
              <div className="relative w-80 h-80 mx-auto">
                {/* Circle with border animation */}
                <div className="w-full h-full rounded-full border-2 border-white/30 overflow-hidden transition-all duration-500 group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/20 group-hover:scale-105 relative">
                  <img 
                    src="https://i.ibb.co/9kwsNb2T/Picsart-25-07-19-14-38-59-479.webp" 
                    alt="CEO - Sarah Johnson" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Text overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/70 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 p-8 text-center">
                    <h3 className="text-white text-2xl font-bold mb-3 uppercase tracking-wide">
                      SARAH JOHNSON
                    </h3>
                    <p className="text-white/80 text-sm mb-4 uppercase tracking-wider font-semibold">
                      CEO & Founder
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Aviation expert with 15+ years in aerospace engineering. Former Boeing engineer leading AIRAVATA's vision for urban air mobility.
                    </p>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-500"></div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group relative cursor-pointer">
              <div className="relative w-80 h-80 mx-auto">
                {/* Circle with border animation */}
                <div className="w-full h-full rounded-full border-2 border-white/30 overflow-hidden transition-all duration-500 group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/20 group-hover:scale-105 relative">
                  <img 
                    src="https://i.ibb.co/przf8JGs/Picsart-25-07-19-14-37-42-098.webp" 
                    alt="CTO - Michael Chen" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Text overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/70 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 p-8 text-center">
                    <h3 className="text-white text-2xl font-bold mb-3 uppercase tracking-wide">
                      MICHAEL CHEN
                    </h3>
                    <p className="text-white/80 text-sm mb-4 uppercase tracking-wider font-semibold">
                      CTO & Co-Founder
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Technology innovator specializing in autonomous flight systems and AI integration. Former Tesla Autopilot team member.
                    </p>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-500"></div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group relative cursor-pointer">
              <div className="relative w-80 h-80 mx-auto">
                {/* Circle with border animation */}
                <div className="w-full h-full rounded-full border-2 border-white/30 overflow-hidden transition-all duration-500 group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/20 group-hover:scale-105 relative">
                  <img 
                    src="https://i.ibb.co/przf8JGs/Picsart-25-07-19-14-37-42-098.webp" 
                    alt="CMO - Dr. Lisa Rodriguez" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Text overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/70 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 p-8 text-center">
                    <h3 className="text-white text-2xl font-bold mb-3 uppercase tracking-wide">
                      DR. LISA RODRIGUEZ
                    </h3>
                    <p className="text-white/80 text-sm mb-4 uppercase tracking-wider font-semibold">
                      Chief Medical Officer
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Emergency medicine specialist with 20+ years experience. Leading the integration of medical equipment in AIRAVATA aircraft.
                    </p>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-500"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section 3 - Black Screen */}
      <div className="min-h-screen bg-black">
      </div>
    </div>
  );
};

export default About;
