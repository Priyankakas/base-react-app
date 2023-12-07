import React, { useContext } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import { ThemeContext } from "COMPONENTS/Context/ThemeContext";

import "./MainLayout.scss";

const MainLayout = (props) => {
  const { toggle } = useContext(ThemeContext);

  return (
    <div className="main-container">
      <Sidebar />
      <div
        style={toggle ? { background: "#dadada" } : { background: "#EBEF95" }}
        className="render-component w-100"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
