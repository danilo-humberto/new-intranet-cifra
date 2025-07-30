import { Link, useLocation } from "react-router-dom";
import { Separator } from "./ui/separator";
import { CalendarSearch, Columns4, Settings, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import type { Dispatch, SetStateAction } from "react";

interface SheetContentHeaderProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SheetContentHeader = ({ setOpen }: SheetContentHeaderProps) => {
  const { pathname } = useLocation();
  const checkIsActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };
  return (
    <div>
      <figure className="p-3">
        <img src="/logo-cifra-nova.png" alt="" width={130} />
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
        <ul className="flex flex-col gap-2">
          <li onClick={() => setOpen(false)}>
            <Link
              to={"/portals"}
              className={`flex items-center gap-4 p-3 transition-colors duration-150 ${
                checkIsActive("/portals")
                  ? "bg-gold-yellow text-background"
                  : "hover:bg-muted"
              } rounded text-sm`}
            >
              <Columns4 size={16} />
              <span>Portais</span>
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              to={"/eletronicDiary"}
              className={`flex items-center gap-4 p-3 transition-colors duration-150 ${
                checkIsActive("/eletronicDiary")
                  ? "bg-gold-yellow text-background"
                  : "hover:bg-muted"
              } rounded text-sm`}
            >
              <CalendarSearch size={16} />
              <span>Agenda Eletrônica</span>
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-sm text-muted-foreground uppercase px-3">
        Administração
      </p>
      <div className="p-3">
        <ul className="flex flex-col gap-2">
          <li onClick={() => setOpen(false)}>
            <Link
              to={"/admin/portals"}
              className={`flex items-center gap-4 p-3 transition-colors duration-150 ${
                checkIsActive("/admin/portals")
                  ? "bg-gold-yellow text-background"
                  : "hover:bg-muted"
              } rounded text-sm`}
            >
              <Settings size={16} />
              <span>Gerenciar Portais</span>
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              to={"/admin/users"}
              className={`flex items-center gap-4 p-3 transition-colors duration-150 ${
                checkIsActive("/admin/users")
                  ? "bg-gold-yellow text-background"
                  : "hover:bg-muted"
              } rounded text-sm`}
            >
              <Users size={16} />
              <span>Gerenciar Usuários</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SheetContentHeader;
