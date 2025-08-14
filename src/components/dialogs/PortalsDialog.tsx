import { Loader, PlusCircle, Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import type { Portals } from "@/types/Portals";

interface PortalsProps {
  initialValue: Portals;
  handleSubmit: (data: Portals) => void;
  isPending?: boolean;
  title?: string;
}

const emptyDetail = (): Required<Portals>["details"][number] => ({
  url: "",
  baseLink: "",
  updateSchedule: "",
  nameForm: "",
  emailResponsible: "",
});

const PortalsDialog = ({
  initialValue,
  handleSubmit,
  isPending,
  title = "Adicionar Portal",
}: PortalsProps) => {
  const [data, setData] = useState<Portals>({
    ...initialValue,
    details: initialValue.details || [],
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.currentTarget;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDetails = () => {
    setData((prev) => ({
      ...prev,
      details: [...(prev.details ?? []), emptyDetail()],
    }));
  };

  const handleRemoveDetails = (index: number) => {
    setData((prev) => ({
      ...prev,
      details: prev.details?.filter((_, i) => i !== index) ?? [],
    }));
  };

  const handleChangeDetails = (
    index: number,
    field:
      | "nameForm"
      | "url"
      | "baseLink"
      | "updateSchedule"
      | "emailResponsible",
    value: string
  ) => {
    setData((prev) => {
      const details = [...prev.details];
      details[index] = { ...details[index], [field]: value };
      return { ...prev, details };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(data);
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
              value={data.name}
              onChange={handleChange}
              placeholder="Nome do portal"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="responsible" className="font-semibold">
              Responsável
            </label>
            <input
              name="responsible"
              id="responsible"
              type="text"
              value={data.responsible}
              onChange={handleChange}
              placeholder="Nome do responsável do portal"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="shortDescription" className="font-semibold">
              Descrição Curta
            </label>
            <textarea
              name="shortDescription"
              id="shortDescription"
              value={data.shortDescription}
              onChange={handleChange}
              placeholder="Descrição curta"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="description" className="font-semibold">
              Descrição Longa
            </label>
            <textarea
              name="description"
              id="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Descrição longa"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="image" className="font-semibold">
              Imagem
            </label>
            <input
              name="image"
              id="image"
              type="text"
              value={data.image}
              onChange={handleChange}
              placeholder="Insira a url da imagem"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
            />
            <span className="text-xs">
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
          <div className="flex items-center justify-between mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleAddDetails}
              type="button"
            >
              <PlusCircle size={16} />
              Adicionar Dados
            </Button>
            <Badge variant="outline">
              {data.details.length > 1
                ? `${data.details.length} adicionados`
                : `${data.details.length} adicionado`}
            </Badge>
          </div>
        </div>
        {data.details.length > 0 && (
          <Accordion type="multiple">
            {data.details.map((data, index) => (
              <AccordionItem key={index} value={String(index)}>
                <AccordionTrigger>Dados {index + 1}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="nameForm" className="font-semibold">
                      Nome
                    </label>
                    <input
                      name="nameForm"
                      id="nameForm"
                      type="text"
                      value={data.nameForm}
                      onChange={(e) =>
                        handleChangeDetails(index, "nameForm", e.target.value)
                      }
                      placeholder="Insira o nome"
                      className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="url" className="font-semibold">
                      Link do Portal
                    </label>
                    <input
                      name="url"
                      id="url"
                      type="text"
                      value={data.url}
                      onChange={(e) =>
                        handleChangeDetails(index, "url", e.target.value)
                      }
                      placeholder="Insira o link do portal"
                      className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="baseLink" className="font-semibold">
                      Link da Base
                    </label>
                    <input
                      name="baseLink"
                      id="baseLink"
                      type="text"
                      value={data.baseLink}
                      onChange={(e) =>
                        handleChangeDetails(index, "baseLink", e.target.value)
                      }
                      placeholder="Insira o link da base"
                      className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="updateSchedule" className="font-semibold">
                      Horários de Atualização
                    </label>
                    <input
                      name="updateSchedule"
                      id="updateSchedule"
                      type="text"
                      value={data.updateSchedule}
                      onChange={(e) =>
                        handleChangeDetails(
                          index,
                          "updateSchedule",
                          e.target.value
                        )
                      }
                      placeholder="Insira o horário de atualização"
                      className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="emailResponsible" className="font-semibold">
                      Email do Responsável
                    </label>
                    <input
                      name="emailResponsible"
                      id="emailResponsible"
                      type="text"
                      value={data.emailResponsible}
                      onChange={(e) =>
                        handleChangeDetails(
                          index,
                          "emailResponsible",
                          e.target.value
                        )
                      }
                      placeholder="Insira o email do responsável"
                      className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                    />
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => handleRemoveDetails(index)}
                  >
                    <Trash size={16} />
                    <span>Remover Dados</span>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
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
          onClick={() => handleSubmit(data)}
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

export default PortalsDialog;
