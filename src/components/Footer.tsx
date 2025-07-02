
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-airavata-black border-t border-airavata-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-airavata-blue to-airavata-blue-glow rounded-lg flex items-center justify-center">
                <span className="text-airavata-black font-orbitron font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-orbitron font-bold text-white">
                AIRAVATA
              </span>
            </div>
            <p className="text-airavata-light-gray text-sm leading-relaxed max-w-md">
              Revolutionizing urban mobility through luxury medical-grade air transport. 
              The future of vertical flight is here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-airavata-light-gray hover:text-airavata-blue transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/mission" 
                  className="text-airavata-light-gray hover:text-airavata-blue transition-colors text-sm"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-airavata-light-gray hover:text-airavata-blue transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/objectives" 
                  className="text-airavata-light-gray hover:text-airavata-blue transition-colors text-sm"
                >
                  Future Objectives
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-airavata-blue" />
                <span className="text-airavata-light-gray text-sm">contact@airavata.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-airavata-blue" />
                <span className="text-airavata-light-gray text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-airavata-blue" />
                <span className="text-airavata-light-gray text-sm">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-airavata-gray mt-8 pt-8 text-center">
          <p className="text-airavata-light-gray text-sm">
            © 2024 AIRAVATA. All rights reserved. The future of air mobility.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
