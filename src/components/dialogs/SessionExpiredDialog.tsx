import { useSessionAlert } from "@/stores/useSessionAlert";
import { removeStorageItem } from "@/utils/Storage";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

const SessionExpiredDialog = () => {
  const navigate = useNavigate();
  const { open, setOpen } = useSessionAlert();

  const handleConfirm = () => {
    setOpen(false);
    removeStorageItem("user");
    navigate("/");
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sessão expirada</AlertDialogTitle>
        </AlertDialogHeader>
        <p className="text-sm text-muted-foreground">
          Sua sessão expirou. Por favor, faça login novamente.
        </p>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleConfirm}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SessionExpiredDialog;
