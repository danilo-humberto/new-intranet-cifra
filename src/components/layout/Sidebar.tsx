import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import {
  CalendarSearch,
  Columns4,
  File,
  LogOut,
  Settings,
  SquarePen,
  Users,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useSidebarState } from "@/stores/SidebarState";
import { getStorageItem } from "@/utils/Storage";
import { useUserById } from "@/hooks/useUsers";

const Sidebar = () => {
  const { pathname } = useLocation();

  const { open } = useSidebarState();

  const checkIsActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  const user = getStorageItem("user");

  const { data } = useUserById(user?._id || "");
  const isAdmin = user?.roles[0].code === "1";

  return (
    <div
      className={`hidden md:block shadow-xl relative bg-background min-h-screen transition-all duration-300 ${
        open ? "w-80" : "w-16"
      }`}
    >
      <figure className="p-3">
        <img
          src={"/logo-cifra-nova.png"}
          alt=""
          className="h-10 object-contain transition-all duration-300"
        />
      </figure>

      <Separator />
      <div className="p-3">
        <div className="flex items-center gap-3 px-1">
          <Avatar>
            <AvatarFallback className="uppercase">
              {data && data.user.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div
            className={`whitespace-pre duration-300 text-sm ${
              !open && "opacity-0 translate-x-24 overflow-hidden"
            } `}
          >
            <p className="capitalize">{data && data.user.name}</p>
            <span className="text-muted-foreground text-xs capitalize">
              {(data && data.user.function) || "Sem Cargo"}
            </span>
          </div>
        </div>
      </div>
      <Separator />
      <div className="p-3">
        <div className="flex flex-col gap-2">
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link
                to={"/portals"}
                className={`flex items-center gap-4 p-3 transition-colors duration-150 ${
                  checkIsActive("/portals")
                    ? "bg-gold-yellow text-background"
                    : "hover:bg-muted"
                } rounded text-sm`}
              >
                <div>
                  <Columns4 size={16} />
                </div>
                <span
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-24 overflow-hidden"
                  } `}
                >
                  Portais
                </span>
              </Link>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>Portais</p>
              </TooltipContent>
            )}
          </Tooltip>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link
                to={"/eletronicDiary"}
                className={`flex items-center gap-4 p-3 transition-colors duration-150 ${
                  checkIsActive("/eletronicDiary")
                    ? "bg-gold-yellow text-background"
                    : "hover:bg-muted"
                } rounded text-sm`}
              >
                <div>
                  <CalendarSearch size={16} />
                </div>
                <span
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-24 overflow-hidden"
                  } `}
                >
                  Agenda Eletrônica
                </span>
              </Link>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>Agenda Eletrônica</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </div>
      {isAdmin && (
        <>
          {open ? (
            <p className="text-xs text-muted-foreground uppercase px-3">
              Administração
            </p>
          ) : (
            <p className="text-xs text-muted-foreground uppercase px-3">
              Admin
            </p>
          )}
          <div className="p-3">
            <div className="flex flex-col gap-2">
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link
                    to={"/admin/portals"}
                    className={`flex items-center gap-4 p-3 transition-colors duration-150 ${
                      checkIsActive("/admin/portals")
                        ? "bg-gold-yellow text-background"
                        : "hover:bg-muted"
                    } rounded text-sm`}
                  >
                    <div>
                      <Settings size={16} />
                    </div>
                    <span
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-24 overflow-hidden"
                      } `}
                    >
                      Gerenciar Portais
                    </span>
                  </Link>
                </TooltipTrigger>
                {!open && (
                  <TooltipContent side="right">
                    <p>Gerenciar Portais</p>
                  </TooltipContent>
                )}
              </Tooltip>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link
                    to={"/admin/users"}
                    className={`flex items-center gap-4 p-3 transition-colors duration-150 ${
                      checkIsActive("/admin/users")
                        ? "bg-gold-yellow text-background"
                        : "hover:bg-muted"
                    } rounded text-sm`}
                  >
                    <div>
                      <Users size={16} />
                    </div>
                    <span
                      className={`whitespace-pre duration-300 ${
                        !open && "opacity-0 translate-x-24 overflow-hidden"
                      } `}
                    >
                      Gerenciar Usuários
                    </span>
                  </Link>
                </TooltipTrigger>
                {!open && (
                  <TooltipContent side="right">
                    <p>Gerenciar Usuários</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </div>
          </div>
        </>
      )}

      <div className="absolute bottom-0 border-t w-full">
        <div className="p-3">
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link
                to={"/edit-profile"}
                className={`flex items-center gap-4 p-3 hover:bg-muted transition-colors duration-150 rounded text-sm`}
              >
                <div>
                  <SquarePen size={16} />
                </div>
                <span
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-24 overflow-hidden"
                  } `}
                >
                  Editar Perfil
                </span>
              </Link>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>Editar Perfil</p>
              </TooltipContent>
            )}
          </Tooltip>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link
                to={"codigo-conduta-cifra.pdf"}
                download={true}
                className={`flex items-center gap-4 p-3 hover:bg-muted transition-colors duration-150 rounded text-sm`}
              >
                <div>
                  <File size={16} />
                </div>
                <span
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-24 overflow-hidden"
                  } `}
                >
                  Codigo de Conduta
                </span>
              </Link>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>Código de Conduta</p>
              </TooltipContent>
            )}
          </Tooltip>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link
                to={"/"}
                className={`flex items-center gap-4 p-3 hover:bg-muted transition-colors duration-150 rounded text-sm`}
              >
                <div>
                  <LogOut size={16} className="text-red-500" />
                </div>
                <span
                  className={`whitespace-pre duration-300 text-red-500 ${
                    !open && "opacity-0 translate-x-24 overflow-hidden"
                  } `}
                >
                  Sair
                </span>
              </Link>
            </TooltipTrigger>
            {!open && (
              <TooltipContent side="right">
                <p>Sair</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
