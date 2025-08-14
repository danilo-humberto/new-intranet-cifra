import PortalsDialog from "@/components/dialogs/PortalsDialog";
import ManagementePortalsTable from "@/components/ManagementPortalsTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useCreatePortal, usePortals } from "@/hooks/usePortals";
import type { Portals } from "@/types/Portals";
import { Loader, Plus, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ManagementPortals = () => {
  const { data, isLoading, isError } = usePortals();
  const [searchText, setSearchText] = useState<string>("");
  const portal = useCreatePortal();
  const [openDialog, setOpenDialog] = useState(false);

  const filtredPortals = data?.filter((portals: Portals) => {
    const match = portals.name.toLowerCase().includes(searchText.toLowerCase());
    return match;
  });

  const handleSubmit = (data: Portals) => {
    portal.mutate(data, {
      onSuccess: () => {
        toast.success("Portal criado com sucesso!");
      },
      onError: (error: any) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Erro ao criar portal.");
        }
      },
    });
  };
  return (
    <section className="py-4 px-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">📋 Portais</h2>
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
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger>
              <Button
                variant="default"
                size={"lg"}
                type="button"
                disabled={isLoading}
              >
                <Plus />
                Novo Usuário
              </Button>
            </DialogTrigger>
            <PortalsDialog
              initialValue={{
                name: "",
                description: "",
                responsible: "",
                shortDescription: "",
                image: "",
                _id: "",
                details: [],
              }}
              handleSubmit={handleSubmit}
              isPending={portal.isPending}
            />
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
            <ManagementePortalsTable portals={filtredPortals} />
          )}
        </>
      )}
    </section>
  );
};

export default ManagementPortals;
