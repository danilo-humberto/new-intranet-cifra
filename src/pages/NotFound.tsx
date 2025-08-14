import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-input rounded-sm p-4 w-full max-w-sm bg-background flex flex-col items-center gap-4">
        <img src="/logo-cifra-nova.png" alt="logo da cifra" className="w-56" />
        <p className="text-2xl text-muted-foreground">Página não encontrada</p>
        <Link to={"/portals"}>
          <Button size="lg">Ir para Portais</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
