import Footer from "@/components/layout/Footer";
import FormRegister from "@/components/FormRegister";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUser } from "@/hooks/useUsers";
import type { UserPayload } from "@/types/User";
import { toast } from "sonner";

const Register = () => {
  const user = useCreateUser();
  const navigate = useNavigate();

  const handleSubmit = (formData: UserPayload) => {
    if (!formData.email.endsWith("@cifraengenharia.com.br")) {
      return toast.error(
        "Email inválido. Use o domínio @cifraengenharia.com.br"
      );
    }

    if (!formData.function) {
      return toast.error("O campo Cargo não pode ficar vazio. Preencha-o.");
    }
    user.mutate(formData, {
      onSuccess: () => {
        toast.success(
          "Usuário criado com sucesso! Por favor, faça o login agora."
        );
        navigate("/");
      },
      onError: () => {
        toast.error("Erro ao criar usuário.");
      },
    });
  };
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center p-4">
      <div className="bg-background py-4 px-6 rounded-sm shadow-md w-full max-w-lg">
        <div>
          <img
            src="/logo-cifra-nova.png"
            alt="logo da cifra engenharia"
            className="w-56 mx-auto"
          />
          <p className="text-sm text-muted-foreground text-center mt-2">
            Acesse sua intranet corporativa
          </p>
        </div>
        <FormRegister
          user={{
            name: "",
            email: "",
            password: "",
            number: "",
            personalNumber: "",
            function: "",
            state: "",
            lotation: "",
            image: "",
            roleCodes: ["3"],
          }}
          onSubmit={handleSubmit}
          isPending={user.isPending}
        />
        <Separator className="my-4" />
        <div className="text-sm flex items-center gap-1 justify-center">
          <p>Já tem uma conta?</p>
          <Link to="/" className="text-muted-gold-yellow hover:underline">
            Entre aqui
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
