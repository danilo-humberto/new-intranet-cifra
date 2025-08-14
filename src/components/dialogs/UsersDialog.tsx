import { useState } from "react";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Eye, EyeOff, Loader } from "lucide-react";
import { Button } from "../ui/button";
import type { UserPayload } from "@/types/User";

interface UsersDialogProps {
  initialValue: UserPayload;
  handleSubmit: (data: UserPayload) => void;
  isPending?: boolean;
  title?: string;
}

const UsersDialog = ({
  initialValue,
  handleSubmit,
  isPending,
  title = "Adicionar Usuário",
}: UsersDialogProps) => {
  const [formData, setFormData] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "number" || name === "personalNumber") {
      let cleanedValue = value.replace(/\D/g, "");
      if (cleanedValue.length > 11) {
        cleanedValue = cleanedValue.slice(0, 11);
      }

      let numberFormatted = cleanedValue;

      if (cleanedValue.length > 2) {
        numberFormatted = `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(
          2,
          7
        )}-${cleanedValue.slice(7)}`;
      }

      setFormData({
        ...formData,
        [name]: numberFormatted,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
  };
  return (
    <DialogContent className="max-h-[95vh] overflow-y-auto md:max-w-xl scrollbar-hide">
      <DialogHeader>
        <DialogTitle className="text-start">{title}</DialogTitle>
      </DialogHeader>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="name" className="font-semibold">
              Nome
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Nome do usuário"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
              value={formData?.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email do usuário"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
              value={formData?.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="number" className="font-semibold">
              Telefone Funcional
            </label>
            <input
              name="number"
              id="number"
              type="text"
              placeholder="Telefone funcional do usuário"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
              value={formData?.number || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="personalNumber" className="font-semibold">
              Telefone Pessoal{" "}
              <span className="text-xs text-muted-foreground">(opcional)</span>
            </label>
            <input
              name="personalNumber"
              id="personalNumber"
              type="text"
              placeholder="Telefone pessoal do usuário"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
              value={formData?.personalNumber || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="function" className="font-semibold">
              Cargo{" "}
              <span className="text-xs text-muted-foreground">(opcional)</span>
            </label>
            <input
              name="function"
              id="function"
              type="text"
              placeholder="Cargo do usuário"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
              value={formData?.function || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="state" className="font-semibold">
              Estado{" "}
              <span className="text-xs text-muted-foreground">(opcional)</span>
            </label>
            <input
              name="state"
              id="state"
              type="text"
              placeholder="Estado do usuário"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
              value={formData?.state || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="lotation" className="font-semibold">
              Lotação{" "}
              <span className="text-xs text-muted-foreground">(opcional)</span>
            </label>
            <input
              name="lotation"
              id="lotation"
              type="text"
              placeholder="Lotação do usuário"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
              value={formData?.lotation || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="lotation" className="font-semibold">
              Role
            </label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, roleCodes: [value] })
              }
              value={formData?.roleCodes[0] || ""}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">Funcionário</SelectItem>
                <SelectGroup>
                  <SelectLabel>Compesa</SelectLabel>
                  <SelectItem value="2-1">Gerente / Compesa</SelectItem>
                  <SelectItem value="2-1-1">
                    Gerente / Recuperação de Clientes Cortados
                  </SelectItem>
                  <SelectItem value="2-1-2">
                    Gerente / Corte e Religação
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>BRK</SelectLabel>
                  <SelectItem value="2-2">Gerente / BRK</SelectItem>
                  <SelectItem value="2-2-1">
                    Gerente / BRK / Pavimentação
                  </SelectItem>
                  <SelectItem value="2-2-2">
                    Gerente / BRK / Fiscalização
                  </SelectItem>
                  <SelectItem value="2-2-3">
                    Gerente / BRK / Hidrometração
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>DESO</SelectLabel>
                  <SelectItem value="2-3">Gerente / DESO</SelectItem>
                  <SelectItem value="2-3-1">
                    Gerente / DESO / Corte e Religação
                  </SelectItem>
                  <SelectItem value="2-3-2">
                    Gerente / DESO / Cadastro Técnico
                  </SelectItem>
                  <SelectItem value="2-3-3">
                    Gerente / DESO / Hidrometração
                  </SelectItem>
                  <SelectItem value="2-3-4">
                    Gerente / DESO / Macromedidores
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>CASAL</SelectLabel>
                  <SelectItem value="2-4">Gerente / CASAL</SelectItem>
                  <SelectItem value="2-4-1">
                    Gerente / CASAL / Corte e Religação
                  </SelectItem>
                  <SelectItem value="2-4-2">
                    Gerente / CASAL / Hidrometração
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>CAERN</SelectLabel>
                  <SelectItem value="2-5">Gerente / CAERN</SelectItem>
                  <SelectItem value="2-5-1">
                    Gerente / CAERN / Hidrometração
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Obras</SelectLabel>
                  <SelectItem value="2-6">Gerente / Obras</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="password" className="font-semibold">
              Senha
            </label>
            <div className="flex gap-2 items-center justify-between border border-input rounded-sm px-2 py-3 focus-within:border-gold-yellow">
              <input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Senha do usuário"
                className="border-none outline-none w-full"
                value={formData?.password || ""}
                onChange={handleChange}
              />
              {showPassword ? (
                <EyeOff
                  size={20}
                  className="text-muted-foreground cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  size={20}
                  className="text-muted-foreground cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
        </div>
      </form>
      <DialogFooter className="flex-row">
        <DialogClose asChild>
          <Button variant="outline" className="flex-1">
            Cancelar
          </Button>
        </DialogClose>
        <Button
          type="submit"
          className="flex-1"
          onClick={() => handleSubmit(formData)}
        >
          {isPending ? (
            <>
              <Loader className="animate-spin mr-2" />
              <span>Editando ...</span>
            </>
          ) : (
            "Salvar"
          )}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default UsersDialog;
