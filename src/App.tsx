import React from "react";
import "./css/styles.css";
import "./css/lightTheme.css";
import "./css/darkTheme.css";
import Header from "./js/containers/Header";
import Main from "./js/containers/Main";
import Footer from "./js/containers/Footer";
import useSetting from "./js/hooks/useSetting";

export default function App() {
  const { setting } = useSetting();
  return (
    <div className={`app ${setting.theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
