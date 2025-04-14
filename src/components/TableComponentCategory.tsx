"use client";

import useFetchCategories from "@/Hook/useFetchCategories";
import { Button, TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {   useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
import PaginationCategoryComponent from "./PaginationCategoryComponent";
import { deleteCategory } from "@/api/categories";
 

export default function TableComponentCategory() {
  const router = useRouter();
  const data = useSelector((state: RootState) => state.listCategories.rows);

  useFetchCategories(); 


  return (
    <div className="w-[80%] z-1">
      <div className="w-[100%] flex justify-end mb-[2%] z-1">
        <ButtonComponent
          color="success"
          className="w-[17%] z-1"
          onClick={() => router.push("/category/create")}
        >
          Cadastrar
        </ButtonComponent>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <span className="font-bold">ID</span>
              </TableCell>
              <TableCell align="center" className="font-bold">
                <span className="font-bold">NOME</span>
              </TableCell>
              <TableCell align="center" className="font-bold">
                <span className="font-bold">AÇÃO</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.length > 0 ? (
              data.map((item, key) => (
                <TableRow key={key}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary" onClick={() => router.push(`/category/update/${item.id}`)} disabled={item.access_key_id ? false : true}>
                      editar
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        marginLeft: "10%",
                      }}
                      disabled={item.access_key_id ? false : true}
                      onClick={()=> {
                        deleteCategory(item.id) 
                        window.location.reload();
                      }}
                    >
                      excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>dados não carregados</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
      <PaginationCategoryComponent></PaginationCategoryComponent>
      </div>
    </div>
  );
}
