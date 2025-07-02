
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Target, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 70%',
        onEnter: () => {
          gsap.from(section.querySelectorAll('.animate-item'), {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-airavata-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-6">
            Meet <span className="text-airavata-blue">AIRAVATA</span>
          </h1>
          <p className="text-xl text-airavata-light-gray max-w-3xl mx-auto">
            Pioneering the future of urban air mobility through innovation, 
            expertise, and unwavering commitment to safety.
          </p>
        </div>

        {/* Who We Are */}
        <div ref={addToRefs} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-item">
              <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-airavata-light-gray leading-relaxed mb-6">
                AIRAVATA brings together aviation experts, medical professionals, 
                and technology pioneers to revolutionize urban transportation. 
                Our team combines decades of aerospace engineering experience with 
                cutting-edge medical transport expertise.
              </p>
              <p className="text-lg text-airavata-light-gray leading-relaxed">
                Founded by industry veterans who witnessed firsthand the limitations 
                of ground-based emergency transport, we're committed to saving lives 
                through innovative aerial mobility solutions.
              </p>
            </div>
            
            <div className="animate-item grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-airavata-gray/30 backdrop-blur-sm border border-airavata-gray rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-airavata-blue mb-2">50+</div>
                <div className="text-airavata-light-gray text-sm">Aviation Experts</div>
              </div>
              <div className="bg-airavata-gray/30 backdrop-blur-sm border border-airavata-gray rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-airavata-blue mb-2">25+</div>
                <div className="text-airavata-light-gray text-sm">Medical Professionals</div>
              </div>
              <div className="bg-airavata-gray/30 backdrop-blur-sm border border-airavata-gray rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-airavata-blue mb-2">100+</div>
                <div className="text-airavata-light-gray text-sm">Years Combined Experience</div>
              </div>
              <div className="bg-airavata-gray/30 backdrop-blur-sm border border-airavata-gray rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-airavata-blue mb-2">5</div>
                <div className="text-airavata-light-gray text-sm">Cities Launching 2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div ref={addToRefs} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white mb-6 animate-item">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-item bg-airavata-gray/20 border border-airavata-gray rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-airavata-blue/20 to-airavata-blue/40 rounded-xl flex items-center justify-center">
                <Users className="text-airavata-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 font-orbitron">
                People First
              </h3>
              <p className="text-airavata-light-gray">
                Every decision we make prioritizes human life, safety, and well-being. 
                Our technology serves humanity, not the other way around.
              </p>
            </div>

            <div className="animate-item bg-airavata-gray/20 border border-airavata-gray rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-airavata-blue/20 to-airavata-blue/40 rounded-xl flex items-center justify-center">
                <Target className="text-airavata-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 font-orbitron">
                Precision Excellence
              </h3>
              <p className="text-airavata-light-gray">
                Medical-grade precision in every aspect of our operations. 
                From aircraft maintenance to emergency response protocols.
              </p>
            </div>

            <div className="animate-item bg-airavata-gray/20 border border-airavata-gray rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-airavata-blue/20 to-airavata-blue/40 rounded-xl flex items-center justify-center">
                <Lightbulb className="text-airavata-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 font-orbitron">
                Innovation Leadership
              </h3>
              <p className="text-airavata-light-gray">
                Pioneering the future of urban mobility through breakthrough 
                technology and forward-thinking design solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div ref={addToRefs} className="text-center">
          <div className="animate-item bg-gradient-to-br from-airavata-blue/10 to-airavata-gray/20 rounded-3xl p-12 border border-airavata-blue/30">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white mb-8">
              Tech + Medical Fusion
            </h2>
            <p className="text-lg sm:text-xl text-airavata-light-gray leading-relaxed max-w-4xl mx-auto mb-8">
              We're not just building aircraft – we're creating mobile medical facilities 
              that happen to fly. Each AIRAVATA vehicle integrates advanced life-support 
              systems, real-time patient monitoring, and direct hospital connectivity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-airavata-blue">
              <span>• FAA Certified Aircraft</span>
              <span>• FDA Approved Medical Equipment</span>
              <span>• Hospital-Grade Safety Standards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
