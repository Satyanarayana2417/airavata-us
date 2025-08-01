
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const believeRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Header animation (left to right)
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

    // Team section animation on scroll
    if (teamSectionRef.current) {
      const teamTitle = teamSectionRef.current.querySelector('.team-title');
      const teamLine = teamSectionRef.current.querySelector('.team-line');
      const teamCircles = teamSectionRef.current.querySelectorAll('.team-circle');

      // Set initial state for team section
      gsap.set([teamTitle, teamLine, ...teamCircles], {
        y: 40,
        opacity: 0
      });

      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: teamSectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          // Animate title first
          gsap.to(teamTitle, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });

          // Then animate line
          gsap.to(teamLine, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out"
          });

          // Finally animate circles with stagger
          gsap.to(teamCircles, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.4,
            ease: "power2.out"
          });
        }
      });
    }

    // What We Believe section animation
    if (believeRef.current) {
      const believeTitle = believeRef.current.querySelector('.believe-title');
      const believeLine = believeRef.current.querySelector('.believe-line');
      const believeCards = believeRef.current.querySelectorAll('.believe-card');

      // Set initial state
      gsap.set([believeTitle, believeLine, ...believeCards], {
        y: 30,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: believeRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          // Animate title faster
          gsap.to(believeTitle, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });

          // Animate line faster
          gsap.to(believeLine, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out"
          });

          // Animate cards with faster stagger
          gsap.to(believeCards, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            delay: 0.4,
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
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <div ref={headerRef} className="absolute top-20 left-8 z-10 max-w-md">
        <h1 className="text-white text-4xl font-bold mb-2">
          MEET AIRAVATA
        </h1>
        <div className="w-24 h-0.5 bg-white mb-4"></div>
        <p className="text-white text-base uppercase leading-relaxed mb-6">
          WE ARE A VISIONARY TEAM OF AVIATION EXPERTS AND TECHNOLOGY INNOVATORS UNITED BY A COMMON GOAL: REVOLUTIONIZING URBAN MOBILITY THROUGH THE SKIES.
        </p>
        <p className="text-white text-base uppercase leading-relaxed mb-8">
          TODAY, WE'RE PIONEERING THE DEVELOPMENT OF LUXURIOUS, MEDICALLY-EQUIPPED AIR TAXIS THAT WILL TRANSFORM HOW PEOPLE MOVE THROUGH CITIES, STARTING WITH EMERGENCY MEDICAL TRANSPORT AND EXPANDING TO EXECUTIVE TRAVEL SOLUTIONS.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Connect With Us Button */}
          <button 
            onClick={() => navigate('/contact')}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">Connect With Us</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>

          {/* Explore Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">Explore</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
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
      <div ref={teamSectionRef} className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-8">
          {/* Section Title */}
          <h2 className="team-title text-white text-4xl font-bold mb-4 uppercase tracking-wider">
            Connect Our Team
          </h2>
          {/* Line under title */}
          <div className="team-line w-32 h-0.5 bg-white mx-auto mb-16"></div>
          
          {/* Team Circles */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20">
            
            {/* Team Member 1 */}
            <div className="team-circle group relative cursor-pointer">
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
            <div className="team-circle group relative cursor-pointer">
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
            <div className="team-circle group relative cursor-pointer">
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

      {/* Section 3 - What We Believe */}
      <div ref={believeRef} className="min-h-screen bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="believe-title text-white text-4xl font-bold mb-4 uppercase tracking-wider">
              What We Believe
            </h2>
            {/* Line under title */}
            <div className="believe-line w-32 h-0.5 bg-white mx-auto"></div>
          </div>

          {/* Belief Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 - Time & Access */}
            <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                Time & Access
              </h3>
              <p className="text-lg text-white/90 mb-6 font-semibold">
                Time Should Be Respected
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Air mobility should save time, not just cost more.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Emergency access should never be delayed.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">The faster we move, the more lives we empower.</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Vision & Future */}
            <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                Vision & Future
              </h3>
              <p className="text-lg text-white/90 mb-6 font-semibold">
                The Sky Is Our Starting Point
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">The future of transport is above us.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Every rooftop can become a launchpad.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Cities must grow vertically — not just outward.</span>
                </div>
              </div>
            </div>

            {/* Card 3 - Purpose & Equality */}
            <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                Purpose & Equality
              </h3>
              <p className="text-lg text-white/90 mb-6 font-semibold">
                Mobility Is for Everyone
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Flying shouldn't be a luxury.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">It should be accessible, sustainable, and life-saving.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Our mission is built on purpose, not privilege.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
