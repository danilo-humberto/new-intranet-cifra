import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import SheetContentHeader from "./SheetContentHeader";
import { useState } from "react";
import FooterSidebarMobile from "./FooterSidebarMobile";

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
          <FooterSidebarMobile setOpen={setOpen} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
