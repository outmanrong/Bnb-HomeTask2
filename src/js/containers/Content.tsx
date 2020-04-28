import React from "react";
import useSetting from "../hooks/useSetting";

export default function Content() {
  const { setting } = useSetting();
  return <div className={`content ${setting.theme}`}>Content</div>;
}
