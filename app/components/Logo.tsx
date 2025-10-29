import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lightning bolt logo */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ef4444", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#dc2626", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#b91c1c", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Circular background glow */}
      <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" opacity="0.15" />

      {/* Main Lightning Bolt */}
      <path
        d="M 55 15 L 35 50 L 48 50 L 40 85 L 70 45 L 55 45 L 65 15 Z"
        fill="url(#logoGradient)"
        stroke="#ef4444"
        strokeWidth="2"
      />

      {/* Inner glow */}
      <path
        d="M 55 20 L 40 48 L 50 48 L 45 75 L 65 47 L 55 47 L 62 20 Z"
        fill="#fbbf24"
        opacity="0.6"
      />
    </svg>
  );
};

export default Logo;
