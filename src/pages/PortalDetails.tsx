import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PortalDetails = () => {
  const isBi = false;
  return (
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
            src="https://play-lh.googleusercontent.com/g3LS7hgd_gxh4FuVU9pBt60vybBtcj-endXIqfhM0bVyy7qTkDt7z1yQm6hbTyfXdu8"
            alt=""
            className="object-contain w-full h-full"
          />
        </figure>
        <h2 className="text-2xl font-semibold truncate pl-2">Ahgora</h2>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="border md:w-[40%] border-input p-4 rounded-sm transition-all duration-200 hover:shadow-md flex flex-col gap-2">
          <h4 className="text-xl font-semibold">Descrição</h4>
          <p className="text-muted-foreground text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            consequuntur sed dolorem impedit inventore aut vel explicabo ab
            architecto? Nam, quas. Eligendi voluptate facere rem asperiores
            rerum impedit odio dolorem. Cupiditate ut modi asperiores expedita
            voluptas nemo soluta impedit facilis fuga amet unde repellendus
            beatae eligendi molestiae aperiam vero delectus quis nulla, dolores,
            repellat minima, quasi alias? Quasi, similique alias.
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
            <TableRow>
              <TableCell className="py-6">Ahgora</TableCell>
              <TableCell>
                <a
                  href="https://ahgora.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  https://ahgora.com.br
                </a>
              </TableCell>
              {isBi && (
                <>
                  <TableCell>x</TableCell>
                  <TableCell>x</TableCell>
                </>
              )}
              <TableCell>Diany</TableCell>
              <TableCell>diany@cifraengenharia.com.br</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-6">Ahgora</TableCell>
              <TableCell>
                <a
                  href="https://ahgora.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  https://ahgora.com.br
                </a>
              </TableCell>
              {isBi && (
                <>
                  <TableCell>x</TableCell>
                  <TableCell>x</TableCell>
                </>
              )}
              <TableCell>Diany</TableCell>
              <TableCell>diany@cifraengenharia.com.br</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default PortalDetails;
