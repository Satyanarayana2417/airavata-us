
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: formRef.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.from('.contact-item', {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest in AIRAVATA. We'll be in touch soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-airavata-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-6">
            Contact <span className="text-airavata-blue">AIRAVATA</span>
          </h1>
          <p className="text-xl text-airavata-light-gray max-w-3xl mx-auto">
            Ready to revolutionize your mobility? Get in touch with our team.
          </p>
        </div>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="contact-item">
              <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-airavata-light-gray leading-relaxed mb-8">
                Whether you're interested in our medical transport services, 
                executive mobility solutions, or partnership opportunities, 
                we're here to help shape the future of urban air travel.
              </p>
            </div>

            <div className="space-y-6">
              <div className="contact-item flex items-center space-x-4 p-6 bg-airavata-gray/20 rounded-xl border border-airavata-gray">
                <div className="w-12 h-12 bg-gradient-to-br from-airavata-blue/20 to-airavata-blue/40 rounded-xl flex items-center justify-center">
                  <Mail className="text-airavata-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-airavata-light-gray">contact@airavata.com</p>
                </div>
              </div>

              <div className="contact-item flex items-center space-x-4 p-6 bg-airavata-gray/20 rounded-xl border border-airavata-gray">
                <div className="w-12 h-12 bg-gradient-to-br from-airavata-blue/20 to-airavata-blue/40 rounded-xl flex items-center justify-center">
                  <Phone className="text-airavata-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-airavata-light-gray">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-item flex items-center space-x-4 p-6 bg-airavata-gray/20 rounded-xl border border-airavata-gray">
                <div className="w-12 h-12 bg-gradient-to-br from-airavata-blue/20 to-airavata-blue/40 rounded-xl flex items-center justify-center">
                  <MapPin className="text-airavata-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Headquarters</h3>
                  <p className="text-airavata-light-gray">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-item">
            <div className="bg-airavata-gray/10 backdrop-blur-sm border border-airavata-gray rounded-2xl p-8">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-airavata-light-gray mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-airavata-black/50 border-airavata-gray text-white placeholder-airavata-light-gray/60 focus:border-airavata-blue focus:ring-airavata-blue"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-airavata-light-gray mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-airavata-black/50 border-airavata-gray text-white placeholder-airavata-light-gray/60 focus:border-airavata-blue focus:ring-airavata-blue"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-airavata-light-gray mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-airavata-black/50 border-airavata-gray text-white placeholder-airavata-light-gray/60 focus:border-airavata-blue focus:ring-airavata-blue resize-none"
                    placeholder="Tell us about your interest in AIRAVATA..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-airavata-blue to-airavata-blue-glow hover:from-airavata-blue-glow hover:to-airavata-blue text-airavata-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="contact-item bg-airavata-gray/10 rounded-2xl p-8 border border-airavata-gray">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-6 text-center">
              Our Location
            </h2>
            <div className="bg-airavata-black/50 rounded-xl p-8 text-center">
              <MapPin className="text-airavata-blue mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">
                AIRAVATA Headquarters
              </h3>
              <p className="text-airavata-light-gray">
                Located in the heart of San Francisco's innovation district, 
                our headquarters serves as the command center for the future of urban air mobility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
