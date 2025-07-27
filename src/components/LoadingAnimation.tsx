import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onAnimationComplete: () => void;
}

const LoadingAnimation = ({ onAnimationComplete }: LoadingAnimationProps) => {
  const [animationStage, setAnimationStage] = useState<'descending' | 'landing' | 'complete'>('descending');

  useEffect(() => {
    // Stage 1: Air taxi descending (1.5 seconds)
    const descendingTimer = setTimeout(() => {
      setAnimationStage('landing');
    }, 1500);

    // Stage 2: Landing sequence (1 second)
    const landingTimer = setTimeout(() => {
      setAnimationStage('complete');
    }, 2500);

    // Stage 3: Complete animation and transition (0.5 seconds fade out)
    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, 3000);

    return () => {
      clearTimeout(descendingTimer);
      clearTimeout(landingTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-b from-slate-900 via-gray-900 to-black flex items-center justify-center transition-opacity duration-500 ${
      animationStage === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      
      {/* Background animated dots for atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Main animation container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        {/* Air Taxi SVG */}
        <div className={`relative transition-all duration-1500 ease-out ${
          animationStage === 'descending' 
            ? 'transform -translate-y-96 scale-50 opacity-60' 
            : animationStage === 'landing'
            ? 'transform translate-y-0 scale-100 opacity-100'
            : 'transform translate-y-2 scale-110 opacity-100'
        }`}>
          
          {/* Air Taxi Icon/Shape */}
          <div className="relative">
            {/* Main body */}
            <div className="w-32 h-16 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 rounded-lg shadow-2xl relative">
              {/* Cockpit */}
              <div className="absolute top-1 left-4 w-8 h-6 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-t-lg opacity-80"></div>
              
              {/* Side windows */}
              <div className="absolute top-2 left-14 w-12 h-4 bg-gradient-to-r from-cyan-100 to-blue-200 rounded opacity-60"></div>
              
              {/* Propellers */}
              <div className={`absolute -top-4 left-2 w-1 h-8 bg-gray-300 rounded transition-all duration-150 ${
                animationStage !== 'descending' ? 'animate-propeller-spin' : ''
              }`}></div>
              <div className={`absolute -top-4 right-2 w-1 h-8 bg-gray-300 rounded transition-all duration-150 ${
                animationStage !== 'descending' ? 'animate-propeller-spin' : ''
              }`}></div>
              
              {/* Landing gear (visible during landing) */}
              {animationStage === 'landing' && (
                <>
                  <div className="absolute -bottom-2 left-6 w-1 h-3 bg-gray-400 rounded animate-pulse"></div>
                  <div className="absolute -bottom-2 right-6 w-1 h-3 bg-gray-400 rounded animate-pulse"></div>
                </>
              )}
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 w-32 h-16 bg-cyan-400 rounded-lg blur-md opacity-30 animate-pulse"></div>
            
            {/* Propeller blur effect */}
            {animationStage !== 'descending' && (
              <>
                <div className="absolute -top-6 left-1 w-3 h-12 bg-white rounded-full opacity-20 blur-sm animate-propeller-spin"></div>
                <div className="absolute -top-6 right-1 w-3 h-12 bg-white rounded-full opacity-20 blur-sm animate-propeller-spin"></div>
              </>
            )}
          </div>
        </div>

        {/* Landing platform */}
        <div className={`mt-8 transition-all duration-1000 ${
          animationStage === 'landing' || animationStage === 'complete'
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95'
        }`}>
          <div className="w-48 h-2 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full relative">
            {/* Landing lights */}
            <div className="absolute -top-1 left-4 w-2 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute -top-1 right-4 w-2 h-4 bg-green-400 rounded-full animate-pulse"></div>
            
            {/* Platform glow */}
            <div className="absolute inset-0 w-48 h-2 bg-cyan-300 rounded-full blur-sm opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* AIRAVATA Logo and text */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${
          animationStage === 'landing' || animationStage === 'complete'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        }`}>
          <div className="mb-4">
            <img 
              src="/logo.png" 
              alt="AIRAVATA Logo" 
              className="h-16 w-auto mx-auto opacity-90"
            />
          </div>
          <h1 className="text-white text-2xl font-bold tracking-wider uppercase mb-2">
            AIRAVATA
          </h1>
          <p className="text-cyan-300 text-sm font-medium tracking-widest uppercase">
            The Future of Urban Mobility
          </p>
        </div>

        {/* Loading progress bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64">
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-3000 ease-out ${
              animationStage === 'complete' ? 'w-full' : 'w-0'
            }`}></div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-2 tracking-widest">
            INITIALIZING FLIGHT SYSTEMS
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
