import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useState } from "react";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar open={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div
          className={`flex flex-col w-full transition-all duration-300 ${
            sidebarOpen ? "pl-72" : "pl-16"
          }`}
        >
          <Header />
          <main>teste</main>
        </div>
      </div>
    </>
  );
};

export default Main;
