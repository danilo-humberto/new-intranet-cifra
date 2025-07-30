import { LogOut, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import SheetContentHeader from "../SheetContentHeader";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetContentHeader setOpen={setOpen} />
        <SheetFooter className="border-t">
          <Link
            to={"/"}
            className="flex items-center gap-4 p-3 hover:bg-muted transition-colors duration-150 rounded text-sm"
          >
            <LogOut size={16} className="text-red-500" />
            <span className="text-red-500">Sair</span>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
