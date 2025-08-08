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
import type { User } from "@/types/User";
import { useDeleteUser, useUserById } from "@/hooks/useUsers";
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

interface ManagementUsersTableProps {
  users: User[];
}

const ManagementUsersTable = ({ users }: ManagementUsersTableProps) => {
  const { mutate, isPending } = useDeleteUser();

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
        {users.map((user) => {
          const { data } = useUserById(users[0]._id || "");
          return (
            <TableRow key={user._id}>
              <TableCell className="py-6">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.function}</TableCell>
              <TableCell>{user.number}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button variant="default" size="icon">
                          <SquarePen size={16} />
                        </Button>
                      </DialogTrigger>
                      <UsersDialog
                        initialValue={{
                          name: data.name,
                          email: data.email,
                          function: data.function || "",
                          number: data.number,
                          lotation: data.lotation || "",
                          state: data.state || "",
                          personalNumber: data.personalNumber || "",
                          roleCodes: data.roles.map((role) => ({
                            code: role.code,
                          })),
                        }}
                      />
                    </form>
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
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ManagementUsersTable;
