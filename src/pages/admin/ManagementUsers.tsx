import UsersDialog from "@/components/dialogs/UsersDialog";
import ManagementUsersTable from "@/components/ManagementUsersTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useCreateUser, useUsers } from "@/hooks/useUsers";
import type { UserPayload, UserResponse } from "@/types/User";
import { Loader, Plus, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ManagementUsers = () => {
  const { data, isLoading, isError } = useUsers();
  const [searchText, setSearchText] = useState<string>("");
  const user = useCreateUser();
  const [openDialog, setOpenDialog] = useState(false);

  const filtredPortals = data?.filter((users: UserResponse) => {
    const match = users.name.toLowerCase().includes(searchText.toLowerCase());
    return match;
  });

  const handleSubmit = (data: UserPayload) => {
    if (!data.email.endsWith("@cifraengenharia.com.br")) {
      return toast.error(
        "Email inválido. Use o domínio @cifraengenharia.com.br"
      );
    }

    if (!data.password) {
      return toast.error("O campo Senha não pode ficar vazio. Preencha-o.");
    }
    user.mutate(data, {
      onSuccess: () => {
        toast.success("Usuário criado com sucesso!");
        setOpenDialog(false);
      },
      onError: (error: any) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Erro ao criar usuário.");
        }
      },
    });
  };
  return (
    <section className="py-4 px-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h2 className="text-2xl font-semibold">👤 Usuários</h2>
        <div className="flex gap-2 flex-col md:flex-row-reverse">
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
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
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
                roleCodes: [],
              }}
              handleSubmit={handleSubmit}
              isPending={user.isPending}
            />
          </Dialog>
        </div>
      </div>
      {isLoading ? (
        <div className="text-muted-foreground flex flex-col gap-2 items-center justify-center mt-10">
          <Loader className="animate-spin" />
          <span>Carregando...</span>
        </div>
      ) : isError ? (
        <div className="flex flex-col gap-2 text-red-500 items-center justify-center mt-10">
          <span className="text-2xl">404</span>
          <span>Erro ao carregar portais.</span>
        </div>
      ) : (
        <ManagementUsersTable users={filtredPortals} />
      )}
    </section>
  );
};

export default ManagementUsers;
