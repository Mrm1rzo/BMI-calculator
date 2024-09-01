import React from "react";
import Navbar from "../companents/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../companents/Footer";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default RootLayout;
