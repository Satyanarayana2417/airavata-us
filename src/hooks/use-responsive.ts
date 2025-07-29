import { useState, useEffect } from 'react';

export interface ResponsiveState {
  isVerySmall: boolean;    // ≤ 374px
  isSmall: boolean;        // ≤ 420px  
  isMobileXS: boolean;     // ≤ 640px
  isMobile: boolean;       // ≤ 768px
  isTablet: boolean;       // ≤ 1024px
  isDesktop: boolean;      // > 1024px
  width: number;
}

export const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    isVerySmall: false,
    isSmall: false,
    isMobileXS: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
  });

  useEffect(() => {
    const updateState = () => {
      const width = window.innerWidth;
      setState({
        isVerySmall: width <= 374,
        isSmall: width <= 420,
        isMobileXS: width <= 640,
        isMobile: width <= 768,
        isTablet: width <= 1024,
        isDesktop: width > 1024,
        width,
      });
    };

    // Initial check
    updateState();

    // Listen for resize events
    window.addEventListener('resize', updateState);
    return () => window.removeEventListener('resize', updateState);
  }, []);

  return state;
};

// Utility hook for checking specific breakpoints
export const useBreakpoint = (breakpoint: keyof ResponsiveState): boolean => {
  const responsive = useResponsive();
  return responsive[breakpoint] as boolean;
};

// Custom hook for very small devices (≤ 420px) - the main issue
export const useVerySmallDevice = (): boolean => {
  const [isVerySmallDevice, setIsVerySmallDevice] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsVerySmallDevice(window.innerWidth <= 420);
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isVerySmallDevice;
};
