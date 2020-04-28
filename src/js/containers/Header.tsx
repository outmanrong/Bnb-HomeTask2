import React from "react";
import useSetting from "../hooks/useSetting";

export default function Header() {
  const { setting } = useSetting();
  return <div className={`header ${setting.theme}`}>Header</div>;
}
