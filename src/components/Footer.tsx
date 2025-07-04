
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Left: Copyright */}
          <div className="flex items-center space-x-8">
            <span className="text-zinc-400 text-xs font-mono tracking-wider">
              © 2025 AIRAVATA
            </span>
            <div className="h-4 w-px bg-zinc-700"></div>
            <span className="text-zinc-500 text-xs font-mono">
              v1.0.0
            </span>
          </div>

          {/* Center: Legal Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/privacy" 
              className="text-zinc-400 hover:text-zinc-200 text-xs font-mono tracking-wide transition-colors uppercase"
            >
              Privacy
            </Link>
            <div className="h-3 w-px bg-zinc-700"></div>
            <Link 
              to="/terms" 
              className="text-zinc-400 hover:text-zinc-200 text-xs font-mono tracking-wide transition-colors uppercase"
            >
              Terms
            </Link>
            <div className="h-3 w-px bg-zinc-700"></div>
            <Link 
              to="/contact" 
              className="text-zinc-400 hover:text-zinc-200 text-xs font-mono tracking-wide transition-colors uppercase"
            >
              Contact
            </Link>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-8 h-8 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-200 group"
            aria-label="Back to top"
          >
            <ChevronUp 
              size={14} 
              className="text-zinc-400 group-hover:text-zinc-200 transition-colors" 
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
