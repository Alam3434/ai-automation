"use client";

import React from "react";
import clsx from "clsx";

export interface SectionPillProps {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}

const SectionPill: React.FC<SectionPillProps> = ({
  children,
  className = "",
  size = "lg",
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-semibold text-purple-700 bg-purple-100",
        size === "md" && "px-4 py-1 text-sm md:text-base",
        size === "lg" && "px-5 py-2 text-base md:text-lg",
        className
      )}
    >
      {children}
    </span>
  );
};

export default SectionPill;
