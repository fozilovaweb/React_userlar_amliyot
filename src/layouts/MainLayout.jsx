import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer /> {}
    </>
  );
}

export default MainLayout;
