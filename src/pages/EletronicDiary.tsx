import DiaryTable from "@/components/DiaryTable";
import { Search } from "lucide-react";

const EletronicDiary = () => {
  return (
    <section className="py-4 px-5">
      <div className="flex flex-col gap-4 justify-between lg:flex-row">
        <h1 className="text-2xl font-semibold">🗓️ Agenda Eletrônica</h1>
        <div className="flex gap-2">
          <div className="flex flex-1 h-10 items-center gap-2 border border-input rounded-sm p-2 md:text-sm w-72 focus-within:border-gold-yellow">
            <Search size={20} className="text-muted-foreground" />
            <input
              type="text"
              name="portals"
              id="portals"
              placeholder="Buscar funcionário..."
              className="outline-none border-none w-full"
            />
          </div>
        </div>
      </div>
      <DiaryTable />
    </section>
  );
};

export default EletronicDiary;
