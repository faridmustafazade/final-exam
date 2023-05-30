import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainRoot;
