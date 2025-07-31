import AddPortalsDialog from "@/components/dialogs/PortalsDialog";
import ManagementePortalsTable from "@/components/ManagementPortalsTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const ManagementPortals = () => {
  return (
    <section className="py-4 px-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">📋 Portais</h2>
        <Dialog>
          <form>
            <DialogTrigger>
              <Button variant="default" size={"lg"} type="button">
                <Plus />
                Novo Portal
              </Button>
            </DialogTrigger>
            <AddPortalsDialog />
          </form>
        </Dialog>
      </div>
      <ManagementePortalsTable />
    </section>
  );
};

export default ManagementPortals;
