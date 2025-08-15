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
import type { UserPayload, UserResponse } from "@/types/User";
import { useDeleteUser, useEditUser } from "@/hooks/useUsers";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { Dialog, DialogTrigger } from "./ui/dialog";
import UsersDialog from "./dialogs/UsersDialog";
import { useState } from "react";

interface ManagementUsersTableProps {
  users: UserResponse[];
}

const ManagementUsersTable = ({ users }: ManagementUsersTableProps) => {
  const { mutate, isPending } = useDeleteUser();
  const userEdit = useEditUser();
  const [editOpenId, setEditOpenId] = useState<string | null>(null);

  const handleEdit = (user: UserPayload) => {
    const userToSend = { ...user };
    if (!userToSend.password || userToSend.password.trim() === "") {
      delete userToSend.password;
    }
    userEdit.mutate(
      {
        id: user._id!,
        user: userToSend,
      },
      {
        onSuccess: () => {
          toast.success("Usuário editado com sucesso!");
          setEditOpenId(null);
        },
        onError: (error: any) => {
          if (error.response) {
            toast.error(error.response.data.msg);
          } else {
            toast.error("Erro ao editar usuário.");
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
          <TableHead className="text-muted-foreground">Email</TableHead>
          <TableHead className="text-muted-foreground">Cargo</TableHead>
          <TableHead className="text-muted-foreground">Telefone</TableHead>
          <TableHead className="text-muted-foreground">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell className="py-6">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.function}</TableCell>
            <TableCell>{user.number}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Dialog
                  open={editOpenId === user._id}
                  onOpenChange={(open) =>
                    setEditOpenId(open ? user._id! : null)
                  }
                >
                  <DialogTrigger asChild>
                    <Button variant="default" size="icon">
                      <SquarePen size={16} />
                    </Button>
                  </DialogTrigger>
                  <UsersDialog
                    initialValue={{
                      _id: user._id,
                      name: user.name,
                      email: user.email,
                      function: user.function || "",
                      number: user.number,
                      lotation: user.lotation || "",
                      state: user.state || "",
                      personalNumber: user.personalNumber || "",
                      roleCodes: user.roles.map((role) => role.code),
                    }}
                    handleSubmit={handleEdit}
                    isPending={userEdit.isPending}
                    title="Editar Usuário"
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
                      Você deseja realmente apagar esse usuário?
                    </AlertDialogHeader>
                    <AlertDialogDescription>
                      Essa ação não pode ser desfeita. Isso vai apagar
                      permanentemente o usuário e seus dados, incluindo seus
                      arquivos e sessões de login.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        disabled={isPending}
                        onClick={() => handleDelete(user._id || "")}
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

export default ManagementUsersTable;
