
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, MapPin, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.mission-content',
      start: 'top 70%',
      onEnter: () => {
        gsap.from('.fade-in-item', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-airavata-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-6">
            Our <span className="text-airavata-blue">Mission</span>
          </h1>
          <p className="text-xl text-airavata-light-gray max-w-3xl mx-auto">
            Solving Urban Mobility, Saving Lives
          </p>
        </div>

        {/* Mission Content */}
        <div ref={sectionRef} className="mission-content">
          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Before AIRAVATA */}
            <div className="fade-in-item">
              <div className="bg-red-900/20 border border-red-800/30 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold text-red-400 mb-6 font-orbitron">
                  Before AIRAVATA
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="text-red-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Ground Traffic Delays</h3>
                      <p className="text-airavata-light-gray text-sm">
                        Critical medical transports stuck in 2+ hour traffic jams, 
                        compromising patient outcomes and emergency response times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Limited Accessibility</h3>
                      <p className="text-airavata-light-gray text-sm">
                        Remote locations and congested urban areas remain difficult 
                        to reach, creating barriers to essential medical care.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Heart className="text-red-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Medical Transport Slowed</h3>
                      <p className="text-airavata-light-gray text-sm">
                        Traditional ambulances and ground transport fail to meet 
                        the urgent demands of critical care situations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After AIRAVATA */}
            <div className="fade-in-item">
              <div className="bg-airavata-blue/10 border border-airavata-blue/30 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold text-airavata-blue mb-6 font-orbitron">
                  With AIRAVATA
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="text-airavata-blue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Direct Vertical Flight</h3>
                      <p className="text-airavata-light-gray text-sm">
                        Bypass all ground traffic with point-to-point aerial routes, 
                        reducing transport times from hours to minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-airavata-blue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-white font-semibold mb-2">15-Minute Transit Time</h3>
                      <p className="text-airavata-light-gray text-sm">
                        Reach any destination within metropolitan areas in under 15 minutes, 
                        revolutionizing emergency response capabilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Heart className="text-airavata-blue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Critical Care Arrives Fast</h3>
                      <p className="text-airavata-light-gray text-sm">
                        Medical-grade aircraft equipped with life-support systems, 
                        bringing hospital-level care directly to patients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="fade-in-item text-center bg-gradient-to-r from-airavata-gray/20 to-airavata-blue/10 rounded-3xl p-12 border border-airavata-gray">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white mb-6">
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl text-airavata-light-gray leading-relaxed max-w-4xl mx-auto">
              "To create a world where traffic is no longer a barrier to health, freedom, or time. 
              We envision air mobility embedded into cities, homes, and hospitals, elevating human movement 
              to new dimensions of speed, safety, and accessibility."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
