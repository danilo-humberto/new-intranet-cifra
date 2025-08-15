import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MenuMobile from "./MenuMobile";
import { Button } from "../ui/button";
import { ArrowBigRightDash } from "lucide-react";
import { useSidebarState } from "@/stores/SidebarState";
import { getStorageItem } from "@/utils/Storage";
import { useUserById } from "@/hooks/useUsers";

const Header = () => {
  const { toggle, open } = useSidebarState();
  const userData = getStorageItem("user");
  const { data } = useUserById(userData?._id as string);
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
      <div className="select-none flex items-center gap-2">
        <div className="flex-col text-xs text-muted-foreground items-end hidden md:flex">
          <p>
            Olá, <span className="uppercase">{userData?.name}</span>
          </p>
          {data?.user?.function ? (
            <p>{data?.user?.function}</p>
          ) : (
            <p>Sem Cargo</p>
          )}
        </div>
        <Avatar>
          <AvatarImage
            src={data?.user?.image}
            alt={userData?.name}
            className="shrink-0"
          />
          <AvatarFallback className="uppercase">
            {userData?.name?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
