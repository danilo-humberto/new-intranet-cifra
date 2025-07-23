import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="mt-4 flex flex-col gap-4">
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
        Entrar
      </Button>
    </form>
  );
};

export default FormLogin;
