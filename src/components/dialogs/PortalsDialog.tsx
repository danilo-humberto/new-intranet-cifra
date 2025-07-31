import { PlusCircle, Trash } from "lucide-react";
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

const AddPortalsDialog = () => {
  const [extraData, setExtraData] = useState<
    {
      name: string;
      portalLink: string;
      baseLink: string;
      updateSchedule: string;
      emailResponsible: string;
    }[]
  >([]);

  const handleAdd = () => {
    setExtraData([
      ...extraData,
      {
        name: "",
        portalLink: "",
        baseLink: "",
        updateSchedule: "",
        emailResponsible: "",
      },
    ]);
  };

  const handleRemove = (index: number) => {
    const updated = [...extraData];
    updated.splice(index, 1);
    setExtraData(updated);
  };

  const handleChange = (
    index: number,
    field:
      | "name"
      | "portalLink"
      | "baseLink"
      | "updateSchedule"
      | "emailResponsible",
    value: string
  ) => {
    const updated = [...extraData];
    updated[index][field] = value;
    setExtraData(updated);
  };
  return (
    <DialogContent className="max-h-[95vh] overflow-y-auto md:max-w-xl scrollbar-hide">
      <DialogHeader>
        <DialogTitle className="text-start">Adicionar Portal</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor="name" className="font-semibold">
            Nome
          </label>
          <input
            name="name"
            id="name"
            type="text"
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
            placeholder="Descrição longa"
            className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor="email" className="font-semibold">
            Email do Responsável
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Insira o email do responsável"
            className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor="imageUrl" className="font-semibold">
            Imagem
          </label>
          <input
            name="imageUrl"
            id="imageUrl"
            type="text"
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
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor="portalLink" className="font-semibold">
            Link do Portal
          </label>
          <input
            name="portalLink"
            id="portalLink"
            type="text"
            placeholder="Insira o link do portal"
            className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <Button variant="ghost" size="sm" onClick={handleAdd}>
            <PlusCircle size={16} />
            Adicionar Dados
          </Button>
          <Badge variant="outline">
            {extraData.length > 1
              ? `${extraData.length} adicionados`
              : `${extraData.length} adicionado`}
          </Badge>
        </div>
      </div>
      {extraData.length > 0 && (
        <Accordion type="multiple">
          {extraData.map((data, index) => (
            <AccordionItem key={index} value={String(index)}>
              <AccordionTrigger>Dados {index + 1}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 text-sm">
                  <label htmlFor="nameData" className="font-semibold">
                    Nome
                  </label>
                  <input
                    name="nameData"
                    id="nameData"
                    type="text"
                    value={data.name}
                    onChange={(e) =>
                      handleChange(index, "name", e.target.value)
                    }
                    placeholder="Insira o nome"
                    className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <label htmlFor="portalLink" className="font-semibold">
                    Link do Portal
                  </label>
                  <input
                    name="portalLink"
                    id="portalLink"
                    type="text"
                    value={data.portalLink}
                    onChange={(e) =>
                      handleChange(index, "portalLink", e.target.value)
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
                      handleChange(index, "baseLink", e.target.value)
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
                      handleChange(index, "updateSchedule", e.target.value)
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
                      handleChange(index, "emailResponsible", e.target.value)
                    }
                    placeholder="Insira o email do responsável"
                    className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none"
                  />
                </div>
                <Button
                  variant="destructive"
                  onClick={() => handleRemove(index)}
                >
                  <Trash size={16} />
                  <span>Remover Dados</span>
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
      <DialogFooter className="flex-row">
        <DialogClose asChild>
          <Button variant="outline" className="flex-1">
            Cancelar
          </Button>
        </DialogClose>
        <Button type="submit" className="flex-1">
          Salvar
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddPortalsDialog;
