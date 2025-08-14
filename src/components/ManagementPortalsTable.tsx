import { SquarePen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import type { Portals } from "@/types/Portals";
import { useDeletePortal, useEditPortal } from "@/hooks/usePortals";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "./ui/alert-dialog";
import { useState } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import PortalsDialog from "./dialogs/PortalsDialog";
interface ManagementePortalsTableProps {
  portals: Portals[];
}

const ManagementePortalsTable = ({ portals }: ManagementePortalsTableProps) => {
  const { mutate, isPending } = useDeletePortal();
  const portalEdit = useEditPortal();
  const [portalEditId, setPortalEditId] = useState<string | null>(null);

  const handleEdit = (portal: Portals) => {
    portalEdit.mutate(
      {
        id: portal._id!,
        portal,
      },
      {
        onSuccess: () => {
          toast.success("Portal editado com sucesso!");
          setPortalEditId(null);
        },
        onError: (error: any) => {
          if (error.response) {
            toast.error(error.response.data.msg);
          } else {
            toast.error("Erro ao editar portal.");
          }
        },
      }
    );
  };

  const handleDelete = (id: string) => {
    mutate(id, {
      onSuccess: () => {
        toast.success("Usuário deletado com sucesso!");
      },
      onError: () => {
        toast.error("Erro ao deletar usuário.");
      },
    });
  };
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="text-muted-foreground">Nome</TableHead>
          <TableHead className="text-muted-foreground">Responsável</TableHead>
          <TableHead className="text-muted-foreground">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {portals.map((portal) => (
          <TableRow key={portal._id}>
            <TableCell className="py-6">{portal.name}</TableCell>
            <TableCell>{portal.responsible}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Dialog
                  open={portalEditId === portal._id}
                  onOpenChange={(open) =>
                    setPortalEditId(open ? portal._id! : null)
                  }
                >
                  <DialogTrigger asChild>
                    <Button variant="default" size="icon">
                      <SquarePen size={16} />
                    </Button>
                  </DialogTrigger>
                  <PortalsDialog
                    initialValue={{
                      _id: portal._id,
                      name: portal.name,
                      responsible: portal.responsible,
                      description: portal.description,
                      shortDescription: portal.shortDescription,
                      image: portal.image,
                      details: portal.details,
                    }}
                    handleSubmit={handleEdit}
                    isPending={isPending}
                    title="Editar Portal"
                  />
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="icon">
                      <Trash size={16} />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      Você deseja realmente apagar esse portal?
                    </AlertDialogHeader>
                    <AlertDialogDescription>
                      Essa ação não pode ser desfeita. Isso vai apagar
                      permanentemente todos os dados desse portal.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        disabled={isPending}
                        onClick={() => handleDelete(portal._id || "")}
                      >
                        Apagar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ManagementePortalsTable;
