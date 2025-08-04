import { ArrowUpDown, File, LogOut, SquarePen } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";

const FooterSidebar = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="px-2 py-2 border border-input rounded-sm flex items-center justify-between transition-all duration-200 hover:bg-muted">
          <div className="flex items-center gap-3 px-1">
            <Avatar>
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p>Nome do Usuário</p>
              <span className="text-muted-foreground text-xs">Cargo</span>
            </div>
          </div>
          <ArrowUpDown size={20} className="text-muted-foreground" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <div className="p-2 flex flex-col gap-2 text-sm">
          <Link
            to={"/edit-profile"}
            className="flex items-center gap-2 transition-all duration-150 hover:bg-muted rounded-sm p-2"
          >
            <SquarePen size={16} />
            <span>Editar Perfil</span>
          </Link>
          <Link
            to={"codigo-conduta-cifra.pdf"}
            download={true}
            className="flex items-center gap-2 transition-all duration-150 hover:bg-muted rounded-sm p-2"
          >
            <File size={16} />
            <span>Código de Conduta</span>
          </Link>
          <Link
            to={"/"}
            className="flex items-center gap-2 transition-all duration-150 hover:bg-muted rounded-sm p-2"
          >
            <LogOut size={16} className="text-red-500" />
            <span className="text-red-500">Sair</span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FooterSidebar;
