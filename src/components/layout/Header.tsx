import { Avatar, AvatarFallback } from "../ui/avatar";
import MenuMobile from "./MenuMobile";

const Header = () => {
  return (
    <header className="border-b p-4 flex justify-between">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <MenuMobile />
        </div>
        <p className="text-xl font-bold">Dashboard</p>
      </div>
      <Avatar>
        <AvatarFallback>US</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
