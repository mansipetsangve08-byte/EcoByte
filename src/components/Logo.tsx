import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-tr from-[#196c3b] to-[#006a3b] flex items-center justify-center text-white shadow-md shadow-[#006a3b]/20 shrink-0`}
      >
        <svg
          className="w-5 h-5 stroke-current"
          fill="none"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="flex items-center gap-1.5">
          <span className={`${textSizes[size]} font-extrabold tracking-tight text-[#121c2a]`}>
            ECO<span className="text-[#006a3b]">CYCLE</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#a3f5b6]/40 text-[#196c3b] border border-[#a3f5b6]">
            E-Waste
          </span>
        </div>
        <p className="text-[10px] text-[#6f7a70] font-semibold tracking-wider uppercase">
          Disposal System
        </p>
      </div>
    </div>
  );
}
