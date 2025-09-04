"use client";
import { useState } from "react";

import { TbCircleArrowDownRightFilled } from "react-icons/tb";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

export default function TodoSectionHeader({ label }: { label: string }) {
  const { display, setDisplay } = useState(false);

  return (
    <div
      className="px-10 py-3 bg-sidebar rounded-xl"
      onClick={() => setDisplay(!display)}
    >
      <span className="flex items-center gap-3">
        {display ? (
          <TbCircleArrowUpRightFilled />
        ) : (
          <TbCircleArrowDownRightFilled />
        )}
        <p className="font-semibold text-sidebar-foreground">{label}</p>
      </span>
    </div>
  );
}
