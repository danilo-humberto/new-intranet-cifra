import { LogOut, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import SheetContentHeader from "../SheetContentHeader";
import { Link } from "react-router-dom";

const MenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetContentHeader />
        <SheetFooter className="border-t">
          <Link
            to={"/login"}
            className="flex items-center gap-4 p-3 hover:bg-gold-yellow hover:text-background transition-colors duration-150 rounded text-sm"
          >
            <LogOut size={16} />
            <span>Sair</span>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
