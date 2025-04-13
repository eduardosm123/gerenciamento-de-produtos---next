"use client";

import useFetchCategories from "@/Hook/useFetchCategories";
import { Button, TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ButtonComponent } from "./ButtonComponent";


export default function TableComponentCategory() {
  const data = useSelector((state: RootState) => state.listCategories.rows);
  useFetchCategories(0);

  return (
    <div className="w-[80%]">
      <div className="w-[100%] flex justify-end mb-[2%]">
        <ButtonComponent color="success" className="w-[17%]">Cadastrar</ButtonComponent>
      </div>
      <TableContainer  component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><span className="font-bold">ID</span></TableCell>
            <TableCell align="center" className="font-bold"><span className="font-bold">NOME</span></TableCell>
            <TableCell align="center" className="font-bold"><span className="font-bold">AÇÃO</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0 ? (
            data.map((item, key) => (
              <TableRow key={key}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center" >
                  <Button variant="contained" color="primary">editar</Button>
                  <Button variant="contained" color="error" sx={{
                    marginLeft: "10%"
                  }}>excluir</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <p>Dados não carregados</p>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
