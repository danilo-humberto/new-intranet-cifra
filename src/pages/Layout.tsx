import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { getStorageItem } from "@/utils/Storage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isAdmin = getStorageItem("user")?.roles?.[0].code === "1";
  return (
    <>
      <div className="flex">
        <Sidebar isAdmin={isAdmin} />
        <div
          className={`flex flex-col w-full transition-all duration-300 max-h-screen overflow-y-scroll`}
        >
          <Header />
          <main className="w-full max-w-[1800px] mx-auto flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
