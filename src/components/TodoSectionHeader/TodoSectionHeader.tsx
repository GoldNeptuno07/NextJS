"use client";
import { useState } from "react";

import { TiArrowDownThick } from "react-icons/ti";

export default function TodoSectionHeader({ label }: { label: string }) {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className="group px-10 py-3 rounded-xl cursor-pointer 
      bg-secondary text-secondary-foreground
      hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      onClick={() => setDisplay(!display)}
    >
      <span className="flex items-center gap-3">
        <TiArrowDownThick
          className={`transition-all duration-200 ease-in-out group-hover:scale-150
          ${display && "rotate-180"}`}
        />
        <p
          className="font-semibold transition-all duration-200 ease-in-out 
          group-hover:scale-110 group-hover:translate-x-5"
        >
          {label}
        </p>
      </span>
    </div>
  );
}
