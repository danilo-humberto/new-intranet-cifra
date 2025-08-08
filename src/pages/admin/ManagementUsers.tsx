import UsersDialog from "@/components/dialogs/UsersDialog";
import ManagementUsersTable from "@/components/ManagementUsersTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useUsers } from "@/hooks/useUsers";
import type { User } from "@/types/User";
import { Loader, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";

const ManagementUsers = () => {
  const { data, isLoading, isError } = useUsers();
  const [searchText, setSearchText] = useState<string>("");

  const filtredPortals = data?.filter((users: User) => {
    const match = users.name.toLowerCase().includes(searchText.toLowerCase());
    return match;
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <section className="py-4 px-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">👤 Usuários</h2>
        <div className="flex gap-2 flex-row-reverse">
          <div className="flex items-center h-10 gap-2 border border-input rounded-sm p-2 text-sm w-80 focus-within:border-gold-yellow">
            <Search size={20} className="text-muted-foreground" />
            <input
              type="text"
              name="users"
              id="users"
              placeholder="Buscar usuários..."
              className="outline-none border-none w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <Dialog>
            <form>
              <DialogTrigger>
                <Button variant="default" size={"lg"} type="button">
                  <Plus />
                  Novo Usuário
                </Button>
              </DialogTrigger>
              <UsersDialog
                initialValue={{
                  name: "",
                  email: "",
                  function: "",
                  number: "",
                  personalNumber: "",
                  state: "",
                  lotation: "",
                  password: "",
                  roleCodes: [{ code: "" }],
                }}
              />
            </form>
          </Dialog>
        </div>
      </div>
      {isLoading ? (
        <div className="text-muted-foreground flex flex-col gap-2 items-center justify-center mt-10">
          <Loader className="animate-spin" />
          <span>Carregando...</span>
        </div>
      ) : (
        <>
          {isError ? (
            <div className="flex flex-col gap-2 text-red-500 items-center justify-center mt-10">
              <span className="text-2xl">404</span>
              <span>Erro ao carregar portais.</span>
            </div>
          ) : (
            <ManagementUsersTable users={filtredPortals} />
          )}
        </>
      )}
    </section>
  );
};

export default ManagementUsers;
