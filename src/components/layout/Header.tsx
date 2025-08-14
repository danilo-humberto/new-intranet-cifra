import { Avatar, AvatarFallback } from "../ui/avatar";
import MenuMobile from "./MenuMobile";
import { Button } from "../ui/button";
import { ArrowBigRightDash } from "lucide-react";
import { useSidebarState } from "@/stores/SidebarState";
import { getStorageItem } from "@/utils/Storage";

const Header = () => {
  const { toggle, open } = useSidebarState();
  const user = getStorageItem("user");
  return (
    <header className="shadow-sm p-4 flex justify-between sticky top-0 z-40 bg-[#F7F8F9]">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <MenuMobile />
        </div>
        <Button variant="outline" onClick={toggle} className="hidden md:flex">
          <ArrowBigRightDash
            size={16}
            className={`${open ? "rotate-180" : ""} text-muted-foreground`}
          />
        </Button>
        <p className="text-xl font-bold capitalize">Intranet Cifra</p>
      </div>
      <Avatar className="select-none">
        <AvatarFallback className="uppercase">
          {user?.name?.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
