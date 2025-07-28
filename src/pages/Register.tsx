import Footer from "@/components/layout/Footer";
import FormRegister from "@/components/FormRegister";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Register = () => {
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
        <FormRegister />
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
