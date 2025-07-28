import Footer from "@/components/layout/Footer";
import FormLogin from "@/components/FormLogin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center p-4">
      <div className="bg-background py-4 px-6 rounded-sm shadow-md w-full xl:w-[30%]">
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
              onClick={() => navigate("/dashboard")}
            >
              Entrar
            </Button>
          </div>
        ) : (
          <>
            <FormLogin />
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
