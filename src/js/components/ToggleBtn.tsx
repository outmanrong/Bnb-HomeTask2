import React from "react";

//Toggle button component
interface ToggleBtnProps {
  children?: React.ReactNode;
  handleClick?: any;
  values?: object;
  defaultValue?: boolean;
}

export default function ToggleBtn({
  children,
  handleClick,
  values,
  defaultValue = true
}: ToggleBtnProps) {
  return <button onClick={() => handleClick(values)}>{children}</button>;
}
