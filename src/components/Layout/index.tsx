import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router";

import "./index.scss";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
