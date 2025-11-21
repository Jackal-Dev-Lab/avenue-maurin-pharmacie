
import React from "react";

export function Logo({ className = "", size = "medium" }: { className?: string; size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "h-6",
    medium: "h-10",
    large: "h-16",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`bg-pharmacy-DEFAULT rounded-full p-2 ${sizeClasses[size]}`}>
        <svg 
          viewBox="0 0 24 24" 
          className="h-full w-auto text-white" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
          <path d="m18 15-2-2" />
          <path d="m15 18-2-2" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-semibold ${size === "small" ? "text-base" : size === "large" ? "text-xl" : "text-lg"}`}>
          Pharmacie Avenue de Maurin
        </span>
        <span className={`text-muted-foreground ${size === "small" ? "text-xs" : size === "large" ? "text-base" : "text-sm"}`}>
          Santé & Bien-être
        </span>
      </div>
    </div>
  );
}
