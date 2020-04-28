import React, { useState } from "react";
import { Setting } from "../interfaces/commonInterface";

const defaultSetting = {
  theme: "light",
  lang: "en",
  currency: "dollar"
};

interface Context {
  setting: Setting;
  resetSetting?: any;
}

const SettingContext = React.createContext<Context>({ setting: {} });

export interface SettingProps {
  children?: React.ReactNode;
}

//Setting Prodvider Component
//It depends how to get setting
//Could get dirrect from page
//Also could get setting from backend by using action (useEffect)
export function SettingProvider({ children }: SettingProps) {
  //the defaul setting could also get from local storage
  const [currentSetting, setSetting] = useState<Setting>(defaultSetting);

  function resetSetting(values: Setting) {
    return setSetting(values);
  }

  return (
    <SettingContext.Provider value={{ setting: currentSetting, resetSetting }}>
      {children}
    </SettingContext.Provider>
  );
}

export default SettingContext;
