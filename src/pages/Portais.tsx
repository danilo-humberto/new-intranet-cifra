import CardPortals from "@/components/CardPortals";
import { Search } from "lucide-react";

const Portais = () => {
  return (
    <section className="py-4 px-5">
      <div className="flex flex-col gap-4 justify-between lg:flex-row">
        <h1 className="text-2xl font-semibold">📋 Portais Disponíveis</h1>
        <div className="flex gap-2">
          <div className="flex flex-1 h-10 items-center gap-2 border border-input rounded-sm p-2 md:text-sm w-72 focus-within:border-gold-yellow">
            <Search size={20} className="text-muted-foreground" />
            <input
              type="text"
              name="portals"
              id="portals"
              placeholder="Buscar portais..."
              className="outline-none border-none w-full"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardPortals
            key={index}
            title="Portal 1"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellendus."
            imageUrl="https://play-lh.googleusercontent.com/g3LS7hgd_gxh4FuVU9pBt60vybBtcj-endXIqfhM0bVyy7qTkDt7z1yQm6hbTyfXdu8"
          />
        ))}
      </div>
    </section>
  );
};

export default Portais;
