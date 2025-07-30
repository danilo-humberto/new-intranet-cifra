import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CardPortalsProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardPortals = ({ title, description, imageUrl }: CardPortalsProps) => {
  return (
    <div className="border border-input rounded-sm p-4 flex flex-col gap-3 transition-all duration-150 hover:shadow">
      <div className="flex items-center">
        <figure className="w-12 h-12 shrink-0 rounded-sm overflow-hidden">
          <img src={imageUrl} alt="" className="object-contain w-full h-full" />
        </figure>
        <h2 className="text-lg font-semibold truncate pl-2">{title}</h2>
      </div>
      <p className="text-muted-foreground text-sm ">{description}</p>
      <Link to={"/portals/:id"}>
        <Button variant="outline" className="flex-1 w-full group" size="lg">
          Ver Detalhes
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-all duration-150"
          />
        </Button>
      </Link>
    </div>
  );
};

export default CardPortals;
