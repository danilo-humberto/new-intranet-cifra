import Footer from "@/components/layout/Footer";
import FormLogin from "@/components/FormLogin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "@/hooks/useAuth";
import { toast } from "sonner";
import axios from "axios";
import { getStorageItem } from "@/utils/Storage";

const Login = () => {
  const isLoggedIn = !!getStorageItem("user");
  const navigate = useNavigate();
  const login = useLogin();

  const handleLogin = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();

    login.mutate(
      { email, password },
      {
        onSuccess: () => {
          toast.success("Login realizado com sucesso!");
          navigate("/portals");
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            toast.error("Email ou senha incorretos.");
          } else {
            toast.error("Erro ao realizar login.");
          }
        },
      }
    );
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
        {isLoggedIn ? (
          <div className="mt-4">
            <p className="text-center">
              Você já está logado(a). Clique no botão abaixo para acessar o
              dashboard.
            </p>

            <Button
              variant="default"
              className="w-full mt-4"
              onClick={() => navigate("/portals")}
            >
              Entrar
            </Button>
          </div>
        ) : (
          <>
            <FormLogin onSubmit={handleLogin} isPending={login.isPending} />
            <Separator className="my-4" />

            <div className="text-sm flex items-center gap-1 justify-center">
              <p>Não tem uma conta?</p>
              <Link
                to="/register"
                className="text-muted-gold-yellow hover:underline"
              >
                Criar conta
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
