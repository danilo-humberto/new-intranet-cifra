import {
  Eye,
  EyeClosed,
  Globe,
  GraduationCap,
  Lock,
  Mail,
  PhoneCall,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="mt-4 flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm">
          Nome
        </label>
        <div className="flex gap-2 items-center border border-input rounded-sm p-2">
          <User size={16} />
          <input
            type="text"
            placeholder="Insira seu nome"
            className="text-sm outline-none border-none w-full"
            name="name"
            id="name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <div className="flex gap-2 items-center border border-input rounded-sm p-2">
          <Mail size={16} />
          <input
            type="email"
            placeholder="user@cifraengenharia.com.br"
            className="text-sm outline-none border-none w-full"
            name="email"
            id="email"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="personalNumber" className="text-sm">
            Número Pessoal{" "}
            <span className="text-xs text-muted-foreground">(Opcional)</span>
          </label>
          <div className="flex gap-2 items-center border border-input rounded-sm p-2">
            <PhoneCall size={16} />
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              className="text-sm outline-none border-none w-full"
              name="personalNumber"
              id="personalNumber"
            />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="number" className="text-sm">
            Número Funcional
          </label>
          <div className="flex gap-2 items-center border border-input rounded-sm p-2">
            <PhoneCall size={16} />
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              className="text-sm outline-none border-none w-full"
              name="number"
              id="number"
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="function" className="text-sm">
          Cargo
        </label>
        <div className="flex gap-2 items-center border border-input rounded-sm p-2">
          <GraduationCap size={16} />
          <input
            type="text"
            placeholder="Insira o seu cargo"
            className="text-sm outline-none border-none w-full"
            name="function"
            id="function"
          />
        </div>
      </div>
      <div>
        <label htmlFor="state" className="text-sm">
          Estado{" "}
          <span className="text-xs text-muted-foreground">(Opcional)</span>
        </label>
        <div className="flex gap-2 items-center border border-input rounded-sm p-2">
          <Globe size={16} />
          <input
            type="text"
            placeholder="Insira o seu estado"
            className="text-sm outline-none border-none w-full"
            name="state"
            id="state"
          />
        </div>
      </div>
      <div>
        <label htmlFor="lotation" className="text-sm">
          Lotação{" "}
          <span className="text-xs text-muted-foreground">(Opcional)</span>
        </label>
        <div className="flex gap-2 items-center border border-input rounded-sm p-2">
          <Globe size={16} />
          <input
            type="text"
            placeholder="Insira a sua lotação"
            className="text-sm outline-none border-none w-full"
            name="lotation"
            id="lotation"
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="text-sm">
          Senha
        </label>
        <div className="flex gap-2 items-center border border-input rounded-sm p-2">
          <Lock size={16} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="********"
            className="text-sm outline-none border-none w-full"
            name="password"
            id="password"
          />
          {showPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword(false)}
              className="cursor-pointer"
            >
              <Eye size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword(true)}
              className="cursor-pointer"
            >
              <EyeClosed size={16} />
            </button>
          )}
        </div>
      </div>
      <Button variant="default" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default FormRegister;
