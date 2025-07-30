import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const Main = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = true;
  return (
    <>
      <div className="flex">
        <Sidebar isAdmin={isAdmin} />
        <div
          className={`flex flex-col w-full transition-all duration-300 max-h-screen overflow-y-scroll`}
        >
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Main;
