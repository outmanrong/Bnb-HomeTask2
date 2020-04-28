import { useContext } from "react";
import SettingContext from "../contexts/SettingContext";

//Hook for getting settings
export default function useSetting() {
  return useContext(SettingContext);
}
