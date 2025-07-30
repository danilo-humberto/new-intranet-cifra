import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const DiaryTable = () => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="text-muted-foreground">Nome</TableHead>
          <TableHead className="text-muted-foreground">Email</TableHead>
          <TableHead className="text-muted-foreground">
            Telefone Funcional
          </TableHead>
          <TableHead className="text-muted-foreground">
            Telefone Pessoal
          </TableHead>
          <TableHead className="text-muted-foreground">Cargo</TableHead>
          <TableHead className="text-muted-foreground">Estado</TableHead>
          <TableHead className="text-muted-foreground">Lotação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 15 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell className="py-6">Danilo Humberto Paz de Melo</TableCell>
            <TableCell>danilohumberto@cifraengenharia.com.br</TableCell>
            <TableCell>(81) 98321-5029</TableCell>
            <TableCell>(81) 91111-1111</TableCell>
            <TableCell>Desenvolvedor Júnior</TableCell>
            <TableCell>Pernambuco</TableCell>
            <TableCell>Recife</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DiaryTable;
