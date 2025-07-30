import { Avatar, AvatarFallback } from "../ui/avatar";
import MenuMobile from "./MenuMobile";
import { Button } from "../ui/button";
import { ArrowBigRightDash } from "lucide-react";
import { useSidebarState } from "@/stores/SidebarState";

const Header = () => {
  const { toggle, open } = useSidebarState();
  return (
    <header className="shadow-sm p-4 flex justify-between">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <MenuMobile />
        </div>
        <Button variant="outline" onClick={toggle}>
          <ArrowBigRightDash
            size={16}
            className={`${open ? "rotate-180" : ""} text-muted-foreground`}
          />
        </Button>
        <p className="text-xl font-bold capitalize">Intranet Cifra</p>
      </div>
      <Avatar className="select-none">
        <AvatarFallback>US</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
