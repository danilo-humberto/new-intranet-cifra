import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePortalsById } from "@/hooks/usePortals";
import { ArrowLeft, Loader } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const PortalDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = usePortalsById(id || "");
  const isBi = /^BI/i.test(data?.name.trim());
  return (
    <>
      {isLoading ? (
        <div className="text-muted-foreground flex flex-col gap-2 items-center justify-center mt-10">
          <Loader className="animate-spin" />
          <span>Carregando...</span>
        </div>
      ) : isError ? (
        <div className="flex flex-col gap-2 text-red-500 items-center justify-center mt-10">
          <span className="text-2xl">404</span>
          <span>Erro ao carregar portais.</span>
        </div>
      ) : (
        <section className="py-4 px-5 flex flex-col gap-4">
          <Link
            to={"/portals"}
            className="text-gold-yellow flex items-center gap-2 transition-all duration-150 hover:bg-muted rounded-sm p-1 w-fit"
          >
            <ArrowLeft size={20} />
            Voltar aos Portais
          </Link>
          <div className="flex items-center">
            <figure className="w-16 h-16 shrink-0 rounded-sm overflow-hidden">
              <img
                src={data?.image}
                alt=""
                className="object-contain w-full h-full"
              />
            </figure>
            <h2 className="text-2xl font-semibold truncate pl-2">
              {data?.name}
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="border md:w-[40%] border-input p-4 rounded-sm transition-all duration-200 flex flex-col gap-2 h-fit">
              <h4 className="text-xl font-semibold">Descrição</h4>
              <p className="text-muted-foreground text-justify">
                {(data?.description?.trim() || data?.shortDescription)?.trim()}
              </p>
            </div>
            <Table className="flex-1">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-muted-foreground">Nome</TableHead>
                  <TableHead className="text-muted-foreground">Link</TableHead>
                  {isBi && (
                    <>
                      <TableHead className="text-muted-foreground">
                        Link da Base
                      </TableHead>
                      <TableHead className="text-muted-foreground">
                        Horários de Atualização
                      </TableHead>
                    </>
                  )}
                  <TableHead className="text-muted-foreground">
                    Responsável
                  </TableHead>
                  <TableHead className="text-muted-foreground">Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.details.map((item: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="py-6">{item.nameForm}</TableCell>
                    {item.url !== "" ? (
                      <TableCell>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {isBi ? "Acessar BI" : "Acessar"}
                        </a>
                      </TableCell>
                    ) : (
                      <TableCell></TableCell>
                    )}
                    {isBi && (
                      <>
                        <TableCell>
                          <a
                            href={item.baseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            Acessar base
                          </a>
                        </TableCell>
                        <TableCell>{item.updateSchedule}</TableCell>
                      </>
                    )}
                    <TableCell>{data.responsible}</TableCell>
                    <TableCell>{item.emailResponsible}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
};

export default PortalDetails;
