import React from 'react';
import { useVerySmallDevice } from '@/hooks/use-responsive';

interface ResponsiveComponentsProps {}

// Responsive Container
export const ResponsiveContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const isVerySmall = useVerySmallDevice();
  
  const baseClasses = 'w-full mx-auto';
  const responsiveClasses = isVerySmall 
    ? 'px-1 max-w-none' 
    : 'px-4 max-w-7xl';
    
  return (
    <div className={`${baseClasses} ${responsiveClasses} ${className}`}>
      {children}
    </div>
  );
};

// Responsive Text
export const ResponsiveText: React.FC<{
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'small';
  className?: string;
}> = ({ children, variant = 'body', className = '' }) => {
  const isVerySmall = useVerySmallDevice();
  
  const getVariantClasses = () => {
    const variants = {
      h1: isVerySmall ? 'text-lg font-bold' : 'text-2xl lg:text-4xl font-bold',
      h2: isVerySmall ? 'text-base font-semibold' : 'text-xl lg:text-2xl font-semibold',  
      h3: isVerySmall ? 'text-sm font-medium' : 'text-lg lg:text-xl font-medium',
      body: isVerySmall ? 'text-xs' : 'text-sm lg:text-base',
      small: isVerySmall ? 'text-xs' : 'text-xs lg:text-sm'
    };
    return variants[variant];
  };
  
  const Component = variant.startsWith('h') ? variant as 'h1' | 'h2' | 'h3' : 'p';
  
  return (
    <Component className={`${getVariantClasses()} ${className}`}>
      {children}
    </Component>
  );
};

// Responsive Button
export const ResponsiveButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ children, onClick, variant = 'primary', size = 'md', className = '' }) => {
  const isVerySmall = useVerySmallDevice();
  
  const getBaseClasses = () => {
    const variants = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
      ghost: 'bg-transparent border border-white/30 hover:border-white text-white'
    };
    
    const sizes = {
      sm: isVerySmall ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm',
      md: isVerySmall ? 'px-3 py-2 text-xs' : 'px-4 py-2 text-sm',
      lg: isVerySmall ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
    };
    
    return `${variants[variant]} ${sizes[size]} rounded transition-all duration-200 font-medium`;
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${getBaseClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

// Responsive Grid
export const ResponsiveGrid: React.FC<{
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
}> = ({ children, cols = 3, className = '' }) => {
  const isVerySmall = useVerySmallDevice();
  
  const getGridClasses = () => {
    if (isVerySmall) return 'grid grid-cols-1 gap-2';
    
    const colClasses = {
      1: 'grid grid-cols-1',
      2: 'grid grid-cols-1 sm:grid-cols-2',
      3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    };
    
    return `${colClasses[cols]} gap-4 lg:gap-6`;
  };
  
  return (
    <div className={`${getGridClasses()} ${className}`}>
      {children}
    </div>
  );
};
