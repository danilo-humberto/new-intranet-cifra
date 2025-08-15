import type { UserResponse } from "@/types/User";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { getStorageItem } from "@/utils/Storage";
import { FaWhatsapp } from "react-icons/fa";

interface DiaryTableProps {
  users: UserResponse[] | [];
}

const DiaryTable = ({ users }: DiaryTableProps) => {
  const storage = getStorageItem("user");
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="text-muted-foreground">Nome</TableHead>
          <TableHead className="text-muted-foreground">Email</TableHead>
          <TableHead className="text-muted-foreground">
            Telefone Funcional
          </TableHead>
          <TableHead></TableHead>
          {storage?.roles[0].code === "1" && (
            <TableHead className="text-muted-foreground">
              Telefone Pessoal
            </TableHead>
          )}
          <TableHead className="text-muted-foreground">Cargo</TableHead>
          <TableHead className="text-muted-foreground">Estado</TableHead>
          <TableHead className="text-muted-foreground">Lotação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user._id}>
            <TableCell className="py-6">{user.name}</TableCell>
            <TableCell>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </TableCell>
            <TableCell>{user.number}</TableCell>
            <TableCell>
              <a
                href={`https://wa.me/55${user.number.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.number && (
                  <FaWhatsapp size={25} className="text-green-500" />
                )}
              </a>
            </TableCell>
            {storage?.roles[0].code === "1" && (
              <TableCell>{user.personalNumber}</TableCell>
            )}
            <TableCell>{user.function}</TableCell>
            <TableCell>{user.state}</TableCell>
            <TableCell>{user.lotation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DiaryTable;
