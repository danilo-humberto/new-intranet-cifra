import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { CalendarSearch, Columns4, Settings, Users } from "lucide-react";

const Sidebar = ({
  open,
  setSidebarOpen,
}: {
  open: boolean;
  setSidebarOpen: any;
}) => {
  const isActive = true;
  return (
    <div
      className={`hidden md:block shadow-xl bg-background h-screen fixed top-0 left-0 transition-all duration-300 ${
        open ? "w-72" : "w-16"
      }`}
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
    >
      <figure className="p-3">
        <img src="/logo-cifra-nova.png" alt="" width={120} />
      </figure>
      <Separator />
      <div className="p-3">
        <div className="flex items-center gap-3 px-1">
          <Avatar>
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p>Nome do Usuário</p>
            <span className="text-muted-foreground text-xs">Cargo</span>
          </div>
        </div>
      </div>
      <Separator />
      <div className="p-3">
        <div className="flex flex-col gap-2">
          <Link
            to={"/portais"}
            className={`flex items-center gap-4 p-3 hover:bg-gold-yellow hover:text-background transition-colors duration-150 ${
              isActive ? "bg-gold-yellow text-background" : ""
            } rounded text-sm`}
          >
            <Columns4 size={16} />
            <span>Portais</span>
          </Link>
          <Link
            to={"/portais"}
            className={`flex items-center gap-4 p-3 hover:bg-gold-yellow hover:text-background transition-colors duration-150 ${
              !isActive ? "bg-gold-yellow text-background" : ""
            } rounded text-sm`}
          >
            <CalendarSearch size={16} />
            <span>Agenda Eletrônica</span>
          </Link>
        </div>
      </div>
      <p className="text-sm text-muted-foreground uppercase px-3">
        Administração
      </p>
      <div className="p-3">
        <div className="flex flex-col gap-2">
          <Link
            to={"/admin/portals"}
            className={`flex items-center gap-4 p-3 hover:bg-gold-yellow hover:text-background transition-colors duration-150 ${
              !isActive ? "bg-gold-yellow text-background" : ""
            } rounded text-sm`}
          >
            <Settings size={16} />
            <span>Gerenciar Portais</span>
          </Link>
          <Link
            to={"/admin/users"}
            className={`flex items-center gap-4 p-3 hover:bg-gold-yellow hover:text-background transition-colors duration-150 ${
              !isActive ? "bg-gold-yellow text-background" : ""
            } rounded text-sm`}
          >
            <Users size={16} />
            <span>Gerenciar Usuários</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
