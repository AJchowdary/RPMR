import React from 'react';

const Logo = ({ className = "", variant = "full" }) => {
  if (variant === "icon") {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#DC2626"/>
          <path d="M10 20L15 15V30H13V18L10 21V20Z" fill="white"/>
          <path d="M18 15H23C24.6569 15 26 16.3431 26 18V20C26 20.5523 25.5523 21 25 21H23V30H21V15Z" fill="white"/>
          <path d="M21 19H23V18C23 17.4477 22.5523 17 22 17H21V19Z" fill="white"/>
          <path d="M28 15L33 30H31L30 27H28V15ZM28 25H30L28 19V25Z" fill="white"/>
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="4" fill="#DC2626"/>
        <path d="M10 20L15 15V30H13V18L10 21V20Z" fill="white"/>
        <path d="M18 15H23C24.6569 15 26 16.3431 26 18V20C26 20.5523 25.5523 21 25 21H23V30H21V15Z" fill="white"/>
        <path d="M21 19H23V18C23 17.4477 22.5523 17 22 17H21V19Z" fill="white"/>
        <path d="M28 15L33 30H31L30 27H28V15ZM28 25H30L28 19V25Z" fill="white"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 leading-tight">RPMR</span>
        <span className="text-xs text-gray-600 leading-tight">Renovations & Restorations</span>
      </div>
    </div>
  );
};

export default Logo;
