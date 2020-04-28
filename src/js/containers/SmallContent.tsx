import React from "react";

interface SmallContentProps {
  color?: string;
}

export default function SmallContent({ color }: SmallContentProps) {
  return (
    <div className={"small-content"} style={{ backgroundColor: color }}>
      SmallContent
    </div>
  );
}
