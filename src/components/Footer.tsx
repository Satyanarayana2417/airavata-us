
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-1 xxs:px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xxs:flex-row items-center justify-between py-3 xxs:py-4 xs:py-6 gap-3 xxs:gap-4 xs:gap-0">
          {/* Left: Copyright */}
          <div className="flex flex-col xxs:flex-row items-center xxs:space-x-2 xs:space-x-4 space-y-1 xxs:space-y-0 xs:space-y-0">
            <span className="text-zinc-400 text-xs xxs:text-xs font-mono tracking-wider text-center xxs:text-left">
              © 2025 AIRAVATA
            </span>
            <div className="hidden xxs:block h-4 w-px bg-zinc-700"></div>
            <span className="text-zinc-500 text-xs font-mono text-center xxs:text-left">
              v1.0.0
            </span>
          </div>

          {/* Center: Legal Links */}
          <div className="flex items-center space-x-2 xxs:space-x-3 xs:space-x-6 order-3 xxs:order-2">
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
            className="flex items-center justify-center w-7 h-7 xxs:w-8 xxs:h-8 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-200 group order-2 xxs:order-3"
            aria-label="Back to top"
          >
            <ChevronUp 
              size={12} 
              className="xxs:size-[14px] text-zinc-400 group-hover:text-zinc-200 transition-colors" 
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
