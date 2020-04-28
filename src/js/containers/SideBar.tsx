import React from "react";

interface SideBarProps {
  color?: string;
  children?: React.ReactNode;
  minHeight?: number;
}

export default function SideBar({ color, children, minHeight }: SideBarProps) {
  return (
    <div
      className={"sidebar"}
      style={{ backgroundColor: color, minHeight: minHeight }}
    >
      {children}
    </div>
  );
}
