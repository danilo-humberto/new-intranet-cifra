import { Button } from "@/components/ui/button";
import { useEditUser, useUserById } from "@/hooks/useUsers";
import { getStorageItem } from "@/utils/Storage";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import InputMask from "@kerim-keskin/react-input-mask";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    data: userData,
    isLoading,
    isError,
  } = useUserById(getStorageItem("user")?._id as string);
  const [data, setData] = useState(userData);
  const editUser = useEditUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setData(userData?.user);
    }
  }, [userData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editUser.mutate(
      {
        id: getStorageItem("user")?._id as string,
        user: data,
      },
      {
        onSuccess: () => {
          toast.success("Perfil editado com sucesso!");
          navigate("/portals");
        },
        onError: () => {
          toast.error("Erro ao editar perfil.");
        },
      }
    );
  };

  return (
    <section className="py-4 px-5">
      <h2 className="text-2xl font-semibold">⚙️ Editar Perfil</h2>
      {isLoading ? (
        <div className="text-muted-foreground flex flex-col gap-2 items-center justify-center mt-10">
          <Loader className="animate-spin" />
          <span>Carregando seus dados...</span>
        </div>
      ) : isError ? (
        <div className="flex flex-col gap-2 text-red-500 items-center justify-center mt-10">
          <span className="text-2xl">404</span>
          <span>Erro ao carregar os seus dados.</span>
        </div>
      ) : (
        <form
          className="flex flex-col md:flex-row gap-30 w-full mt-8 md:max-w-[1280px] md:mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <figure className="grid place-items-center select-none">
              {data?.image ? (
                <img
                  src={data?.image}
                  alt={data?.name}
                  className="w-80 h-80 rounded-full object-center"
                />
              ) : (
                <img
                  src="https://media.istockphoto.com/id/1495088043/pt/vetorial/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=S7d8ImMSfoLBMCaEJOffTVua003OAl2xUnzOsuKIwek="
                  alt="foto teste"
                  className="w-80 h-80 rounded-full"
                />
              )}
            </figure>
            <div className="flex flex-col gap-1">
              <input
                name="image"
                id="image"
                value={data?.image ?? ""}
                onChange={(e) => setData({ ...data!, image: e.target.value })}
                type="text"
                placeholder="Insira a url da imagem"
                className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none w-full text-sm"
              />
              <span className="text-xs text-muted-foreground">
                Hospede a foto no{" "}
                <a
                  href="https://postimages.org/"
                  target="_blank"
                  rel="noreferrer nopener"
                  className="underline text-blue-600"
                >
                  postimages
                </a>{" "}
                e cole o <strong>link direto</strong> aqui .
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
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
                value={data?.name ?? ""}
                onChange={(e) => setData({ ...data!, name: e.target.value })}
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
                value={data?.email ?? ""}
                onChange={(e) => setData({ ...data!, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="number" className="font-semibold">
                Telefone Funcional
              </label>
              <InputMask
                mask={
                  (data?.number?.replace(/\D/g, "") || "").length > 2 &&
                  "(99) 99999-9999"
                }
                maskChar={null}
                name="number"
                id="number"
                type="text"
                placeholder="Telefone funcional do usuário"
                className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                value={data?.number ?? ""}
                onChange={(e: any) =>
                  setData({ ...data!, number: e.target.value })
                }
                inputMode="numeric"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="personalNumber" className="font-semibold">
                Telefone Pessoal
              </label>
              <InputMask
                mask={
                  (data?.number?.replace(/\D/g, "") || "").length > 2 &&
                  "(99) 99999-9999"
                }
                maskChar={null}
                name="personalNumber"
                id="personalNumber"
                type="text"
                placeholder="Telefone pessoal do usuário"
                className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                value={data?.personalNumber ?? ""}
                onChange={(e: any) =>
                  setData({ ...data!, personalNumber: e.target.value })
                }
                inputMode="numeric"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="function" className="font-semibold">
                Cargo
              </label>
              <input
                name="function"
                id="function"
                type="text"
                placeholder="Cargo do usuário"
                className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                value={data?.function ?? ""}
                onChange={(e) =>
                  setData({ ...data!, function: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="state" className="font-semibold">
                Estado
              </label>
              <input
                name="state"
                id="state"
                type="text"
                placeholder="Estado do usuário"
                className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                value={data?.state ?? ""}
                onChange={(e) => setData({ ...data!, state: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="lotation" className="font-semibold">
                Lotação
              </label>
              <input
                name="lotation"
                id="lotation"
                type="text"
                placeholder="Lotação do usuário"
                className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                value={data?.lotation ?? ""}
                onChange={(e) =>
                  setData({ ...data!, lotation: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="password" className="font-semibold">
                Senha
              </label>
              <div className="flex gap-2 items-center justify-between border border-input rounded-sm px-2 py-3 focus-within:border-gold-yellow">
                <input
                  name="password"
                  id="password"
                  value={data?.password ?? ""}
                  onChange={(e) =>
                    setData({ ...data!, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha do usuário"
                  className="border-none outline-none w-full"
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
            <Button
              size={"lg"}
              className="mt-2 md:w-1/3 self-center"
              type="submit"
            >
              Atualizar
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Profile;
