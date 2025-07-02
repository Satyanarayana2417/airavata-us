
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Plane, Building, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Objectives = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    // Timeline animation
    ScrollTrigger.create({
      trigger: timeline,
      start: 'top 70%',
      end: 'bottom 30%',
      onEnter: () => {
        gsap.from('.timeline-item', {
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out'
        });
        
        gsap.from('.timeline-line', {
          scaleY: 0,
          duration: 2,
          ease: 'power2.out',
          transformOrigin: 'top'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const milestones = [
    {
      year: '2025',
      title: 'Launch - Medical Focus',
      description: '2 cities, emergency medical transport priority',
      icon: Calendar,
      details: [
        'San Francisco and Los Angeles launch',
        'Partnership with major hospitals',
        '24/7 emergency response capability',
        'Medical equipment certification'
      ]
    },
    {
      year: '2026',
      title: 'Expansion - Executive Tier',
      description: '5 cities, luxury executive transport added',
      icon: MapPin,
      details: [
        'New York, Chicago, Miami expansion',
        'Executive transport services',
        'Premium booking platform',
        'Corporate partnership program'
      ]
    },
    {
      year: '2027',
      title: 'Aircraft Upgrades',
      description: 'Enhanced range and sustainability features',
      icon: Plane,
      details: [
        'Next-generation VTOL aircraft',
        'Extended range capabilities',
        'Sustainable power systems',
        'Advanced safety features'
      ]
    },
    {
      year: '2028',
      title: 'Global Scale',
      description: 'International expansion to high-congestion cities',
      icon: Globe,
      details: [
        'London, Tokyo, Mumbai launches',
        'International medical partnerships',
        'Cross-border regulatory approval',
        'Global fleet management'
      ]
    },
    {
      year: '2029',
      title: 'Rooftop Revolution',
      description: 'Home helipads and integrated healthcare ecosystem',
      icon: Building,
      details: [
        'Residential helipad installations',
        'Direct home-to-hospital transport',
        'Integrated health monitoring',
        'Smart city infrastructure'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-airavata-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-6">
            Future <span className="text-airavata-blue">Objectives</span>
          </h1>
          <p className="text-xl text-airavata-light-gray max-w-3xl mx-auto">
            Roadmap to Vertical Freedom - Our journey to revolutionize urban mobility
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-airavata-blue to-airavata-blue/30 rounded-full"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`timeline-item relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-airavata-blue rounded-full border-4 border-airavata-black z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className="bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-2xl p-8 hover:border-airavata-blue/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-airavata-blue/20 to-airavata-blue/40 rounded-xl flex items-center justify-center mr-4">
                        <milestone.icon className="text-airavata-blue" size={24} />
                      </div>
                      <div className="text-3xl font-orbitron font-bold text-airavata-blue">
                        {milestone.year}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 font-orbitron">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-airavata-light-gray mb-6">
                      {milestone.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {milestone.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-airavata-light-gray">
                          <div className="w-2 h-2 bg-airavata-blue rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2029 Vision */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-airavata-blue/10 via-airavata-gray/20 to-airavata-blue/5 rounded-3xl p-12 border border-airavata-blue/30">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white mb-8">
              2029 Vision: The Connected Sky
            </h2>
            <p className="text-lg sm:text-xl text-airavata-light-gray leading-relaxed max-w-4xl mx-auto mb-8">
              By 2029, AIRAVATA will have transformed urban landscapes with integrated 
              helipad infrastructure on residential buildings, hospitals, and corporate offices. 
              Our vision: a seamless healthcare ecosystem where emergency response times 
              are measured in minutes, not hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-airavata-black/50 rounded-xl p-6 border border-airavata-gray">
                <div className="text-2xl font-bold text-airavata-blue mb-2">10,000+</div>
                <div className="text-airavata-light-gray text-sm">Rooftop Helipads</div>
              </div>
              <div className="bg-airavata-black/50 rounded-xl p-6 border border-airavata-gray">
                <div className="text-2xl font-bold text-airavata-blue mb-2">50</div>
                <div className="text-airavata-light-gray text-sm">Global Cities</div>
              </div>
              <div className="bg-airavata-black/50 rounded-xl p-6 border border-airavata-gray">
                <div className="text-2xl font-bold text-airavata-blue mb-2">5 Min</div>
                <div className="text-airavata-light-gray text-sm">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
