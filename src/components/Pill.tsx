"use client";

import React from "react";

export interface PillProps {
  children: React.ReactNode;
  className?: string;
}

const Pill: React.FC<PillProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm text-purple-700 bg-white border border-purple-100 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.07),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] ${className}`}
    >
      {children}
    </span>
  );
};

export default Pill;
