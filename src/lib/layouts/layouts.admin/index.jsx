import { Slider } from "@chakra-ui/react";
import React from "react";
import Header from "../../../routes/admin/Header";
import Sidebar from "../../../routes/admin/Sidebar";

const MainLayoutAdmin = ({ children }) => {
  return (
    <div className="w-screen h-full ">
      <header>
        <Header></Header>
      </header>
      <main className="w-full flex h-screen">
        <Sidebar></Sidebar>
        <section className="w-full h-full">{children}</section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 Khắc Giáp company. No copy right.</p>
      </footer>
    </div>
  );
};

export default MainLayoutAdmin;
