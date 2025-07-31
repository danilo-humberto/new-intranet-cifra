import { SquarePen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const ManagementePortalsTable = () => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="text-muted-foreground">Nome</TableHead>
          <TableHead className="text-muted-foreground">Responsável</TableHead>
          <TableHead className="text-muted-foreground">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 15 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell className="py-6">Danilo Humberto Paz de Melo</TableCell>
            <TableCell>danilohumberto@cifraengenharia.com.br</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="default" size="icon">
                  <SquarePen size={16} />
                </Button>
                <Button variant="destructive" size="icon">
                  <Trash size={16} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ManagementePortalsTable;
