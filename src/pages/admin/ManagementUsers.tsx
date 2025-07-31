import UsersDialog from "@/components/dialogs/UsersDialog";
import ManagementUsersTable from "@/components/ManagementUsersTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const ManagementUsers = () => {
  return (
    <section className="py-4 px-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">👤 Usuários</h2>
        <Dialog>
          <form>
            <DialogTrigger>
              <Button variant="default" size={"lg"} type="button">
                <Plus />
                Novo Usuário
              </Button>
            </DialogTrigger>
            <UsersDialog />
          </form>
        </Dialog>
      </div>
      <ManagementUsersTable />
    </section>
  );
};

export default ManagementUsers;
