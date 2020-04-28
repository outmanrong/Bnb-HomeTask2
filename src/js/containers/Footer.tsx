import React from "react";
import useSetting from "../hooks/useSetting";
import ToggleBtn from "../components/ToggleBtn";
import { Setting } from "../interfaces/commonInterface";

export default function Footer() {
  const { setting, resetSetting } = useSetting();

  function handleToggleTheme(values: Setting) {
    let setting = { ...values };
    if (values.theme === "light") {
      setting.theme = "dark";
      return resetSetting(setting);
    }
    setting.theme = "light";
    return resetSetting(setting);
  }

  return (
    <div className={`footer ${setting.theme}`}>
      <ToggleBtn handleClick={handleToggleTheme} values={setting}>
        Click Here!
      </ToggleBtn>
    </div>
  );
}
