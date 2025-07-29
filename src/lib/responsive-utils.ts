/**
 * Responsive utility functions for handling different screen sizes
 * Specifically addresses issues with devices ≤ 420px width
 */

// Breakpoint definitions
export const BREAKPOINTS = {
  verySmall: 320,    // Very small phones
  extraSmall: 374,   // Small phones  
  small: 420,        // Main problem breakpoint
  mobile: 640,       // Small tablets
  tablet: 768,       // Tablets
  desktop: 1024,     // Desktop
  large: 1280,       // Large desktop
  extraLarge: 1536,  // Very large screens
} as const;

// Get current screen size category
export const getScreenSize = (width: number = window?.innerWidth || 1024) => {
  if (width <= BREAKPOINTS.verySmall) return 'verySmall';
  if (width <= BREAKPOINTS.extraSmall) return 'extraSmall';
  if (width <= BREAKPOINTS.small) return 'small';
  if (width <= BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  if (width <= BREAKPOINTS.desktop) return 'desktop';
  if (width <= BREAKPOINTS.large) return 'large';
  return 'extraLarge';
};

// Check if current screen is problematic size (≤ 420px)
export const isProblematicSize = (width: number = window?.innerWidth || 1024): boolean => {
  return width <= BREAKPOINTS.small;
};

// Get responsive font size based on screen width
export const getResponsiveFontSize = (
  baseSize: number, 
  minSize: number, 
  maxSize: number,
  screenWidth: number = window?.innerWidth || 1024
): string => {
  if (screenWidth <= BREAKPOINTS.small) {
    return `${Math.max(minSize, baseSize * 0.8)}rem`;
  }
  return `clamp(${minSize}rem, ${baseSize}vw, ${maxSize}rem)`;
};

// Get responsive padding based on screen size
export const getResponsivePadding = (screenWidth: number = window?.innerWidth || 1024) => {
  if (screenWidth <= BREAKPOINTS.extraSmall) return 'px-1 py-1';
  if (screenWidth <= BREAKPOINTS.small) return 'px-2 py-2';
  if (screenWidth <= BREAKPOINTS.mobile) return 'px-4 py-3';
  return 'px-6 py-4';
};

// Get responsive container classes
export const getResponsiveContainer = (screenWidth: number = window?.innerWidth || 1024) => {
  const baseClasses = 'w-full mx-auto';
  
  if (screenWidth <= BREAKPOINTS.extraSmall) {
    return `${baseClasses} px-1 max-w-none`;
  }
  if (screenWidth <= BREAKPOINTS.small) {
    return `${baseClasses} px-2 max-w-sm`;
  }
  if (screenWidth <= BREAKPOINTS.mobile) {
    return `${baseClasses} px-4 max-w-2xl`;
  }
  return `${baseClasses} px-6 max-w-7xl`;
};

// Get responsive grid columns
export const getResponsiveGridCols = (
  desiredCols: number,
  screenWidth: number = window?.innerWidth || 1024
): number => {
  if (screenWidth <= BREAKPOINTS.small) return 1;
  if (screenWidth <= BREAKPOINTS.tablet && desiredCols > 2) return 2;
  return desiredCols;
};

// Format text for small screens (truncate if needed)
export const formatTextForSmallScreen = (
  text: string, 
  maxLength: number = 50,
  screenWidth: number = window?.innerWidth || 1024
): string => {
  if (screenWidth > BREAKPOINTS.small) return text;
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

// Responsive button sizing
export const getResponsiveButtonSize = (screenWidth: number = window?.innerWidth || 1024) => {
  if (screenWidth <= BREAKPOINTS.extraSmall) {
    return 'px-2 py-1 text-xs min-h-[36px]';
  }
  if (screenWidth <= BREAKPOINTS.small) {
    return 'px-3 py-2 text-xs min-h-[40px]';
  }
  if (screenWidth <= BREAKPOINTS.mobile) {
    return 'px-4 py-2 text-sm min-h-[44px]';
  }
  return 'px-6 py-3 text-base min-h-[48px]';
};

// Check if touch device (usually correlates with small screens)
export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Get safe area adjustments for mobile browsers
export const getSafeAreaStyle = () => {
  return {
    paddingTop: 'env(safe-area-inset-top)',
    paddingRight: 'env(safe-area-inset-right)',
    paddingBottom: 'env(safe-area-inset-bottom)',
    paddingLeft: 'env(safe-area-inset-left)',
  };
};
