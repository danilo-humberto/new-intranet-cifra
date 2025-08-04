import DiaryTable from "@/components/DiaryTable";
import { useUsers } from "@/hooks/useUsers";
import type { User } from "@/types/User";
import { Loader, Search } from "lucide-react";
import { useState } from "react";

const EletronicDiary = () => {
  const { data, isLoading, isError } = useUsers();
  const [searchText, setSearchText] = useState<string>("");

  const filtredUsers = data?.filter((user: User) => {
    const match = user.name.toLowerCase().includes(searchText.toLowerCase());
    return match;
  });
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="text-muted-foreground flex flex-col gap-2 items-center justify-center mt-10">
          <Loader className="animate-spin" />
          <span>Carregando portais...</span>
        </div>
      )}
      {isError ? (
        <div className="flex flex-col gap-2 text-red-500 items-center justify-center mt-10">
          <span className="text-2xl">404</span>
          <span>Erro ao carregar portais.</span>
        </div>
      ) : (
        <DiaryTable users={filtredUsers} />
      )}
    </section>
  );
};

export default EletronicDiary;
