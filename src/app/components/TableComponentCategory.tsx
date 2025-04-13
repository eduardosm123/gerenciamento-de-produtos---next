import { ITableComponentCategory } from "@/Interface/ITableComponentCategory";
import { TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function TableComponentCategory({ body }: ITableComponentCategory) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NOME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((item, key) => (
            <TableRow key={key}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
