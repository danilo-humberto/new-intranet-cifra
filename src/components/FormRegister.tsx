import {
  Eye,
  EyeClosed,
  Globe,
  GraduationCap,
  Loader,
  Lock,
  Mail,
  PhoneCall,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InputMask from "@kerim-keskin/react-input-mask";
import type { UserPayload } from "@/types/User";

interface FormRegisterProps {
  user: UserPayload;
  onSubmit: (user: UserPayload) => void;
  isPending?: boolean;
}

const FormRegister = ({ user, onSubmit, isPending }: FormRegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="number" className="text-sm">
            Número Funcional
          </label>
          <div className="flex gap-2 items-center border border-input rounded-sm p-2">
            <PhoneCall size={16} />
            <InputMask
              mask={
                (formData?.number?.replace(/\D/g, "") || "").length > 2 &&
                "(99) 99999-9999"
              }
              maskChar={null}
              type="text"
              placeholder="(00) 00000-0000"
              className="text-sm outline-none border-none w-full"
              name="number"
              id="number"
              inputMode="numeric"
              value={formData.number}
              onChange={(e: any) =>
                setFormData({ ...formData, number: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="personalNumber" className="text-sm">
            Número Pessoal{" "}
            <span className="text-xs text-muted-foreground">(Opcional)</span>
          </label>
          <div className="flex gap-2 items-center border border-input rounded-sm p-2">
            <PhoneCall size={16} />
            <InputMask
              mask={
                (formData?.personalNumber?.replace(/\D/g, "") || "").length >
                  2 && "(99) 99999-9999"
              }
              maskChar={null}
              type="text"
              placeholder="(00) 00000-0000"
              className="text-sm outline-none border-none w-full"
              name="personalNumber"
              id="personalNumber"
              inputMode="numeric"
              value={formData.personalNumber}
              onChange={(e: any) =>
                setFormData({ ...formData, personalNumber: e.target.value })
              }
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
            value={formData.function}
            onChange={(e) =>
              setFormData({ ...formData, function: e.target.value })
            }
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
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
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
            value={formData.lotation}
            onChange={(e) =>
              setFormData({ ...formData, lotation: e.target.value })
            }
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {showPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword(false)}
              className="cursor-pointer"
            >
              <EyeClosed size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword(true)}
              className="cursor-pointer"
            >
              <Eye size={16} />
            </button>
          )}
        </div>
      </div>
      <Button variant="default" type="submit">
        {isPending ? (
          <>
            <Loader className="animate-spin mr-2" />
            <span>Cadastrando...</span>
          </>
        ) : (
          "Cadastrar"
        )}
      </Button>
    </form>
  );
};

export default FormRegister;
