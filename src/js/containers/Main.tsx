import * as React from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import SmallContent from "./SmallContent";

export default function Main() {
  return (
    <div className={"main"}>
      <SideBar>
        <SmallContent color={"#339933"} />
        <SmallContent color={"#999900"} />
      </SideBar>
      <Content />
      <SideBar color={"#ffcc00"} minHeight={500}>
        SideBar2
      </SideBar>
    </div>
  );
}
