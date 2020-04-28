import * as React from "react";
import { render } from "react-dom";
import { SettingProvider } from "./js/contexts/SettingContext";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <SettingProvider>
    <App />
  </SettingProvider>,
  rootElement
);
