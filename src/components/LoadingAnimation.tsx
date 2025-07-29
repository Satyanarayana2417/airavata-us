import { useState } from 'react';

interface LoadingAnimationProps {
  onAnimationComplete: () => void;
}

const LoadingAnimation = ({ onAnimationComplete }: LoadingAnimationProps) => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // Small delay before transitioning to main content
    setTimeout(() => {
      onAnimationComplete();
    }, 500);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
      videoEnded ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      
      {/* Video animation container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video 
          autoPlay 
          muted 
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full xs:w-1/2 xs:h-1/2 xxs:w-2/5 xxs:h-2/5"
        >
          <source src="/airavaya-loading-animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LoadingAnimation;
