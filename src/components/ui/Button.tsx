import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#765a4c]/40 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed whitespace-nowrap";
  
  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    // Primary: Taupe Brown #765a4c, text milky white #ffffff
    primary: "bg-[#765a4c] hover:bg-[#5f473c] active:bg-[#4a362c] text-[#ffffff] shadow-sm hover:shadow hover:-translate-y-0.5",
    // Secondary: Outline with border #765a4c, text #765a4c, white bg
    secondary: "bg-[#ffffff] border border-[#765a4c] text-[#765a4c] hover:bg-[#f9f6f4] hover:border-[#5f473c] hover:text-[#5f473c]",
    // Ghost: Subtle taupe tint on hover
    ghost: "bg-transparent text-[#765a4c] hover:bg-[#efe8e3]/60 hover:text-[#5f473c]",
    // White: Solid white button for taupe brown hero backgrounds
    white: "bg-[#ffffff] text-[#765a4c] hover:bg-[#f9f6f4] active:bg-[#efe8e3] font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
