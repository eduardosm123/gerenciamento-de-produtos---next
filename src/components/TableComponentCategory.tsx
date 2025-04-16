"use client";

import useFetchCategories from "@/Hook/useFetchCategoriesPagination";
import { Button, Grid, TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import PaginationCategoryComponent from "./PaginationCategoryComponent";
import { deleteCategory } from "@/api/categories";
import TextComponent from "./TextComponent";
import { CategoryApiResponse } from "@/Types/Categories";

export default function TableComponentCategory() {
  const router = useRouter();
  const data = useSelector((state: RootState) => state.listCategories.rows);
  const loading = useSelector((state: RootState) => state.fetch.loading);
  useFetchCategories();

  return (
    <div className="w-[80%]">
      <div className="w-[100%] flex justify-end mb-[2%]">
        <Button
          color="success"
          variant="contained"
          sx={{
            width: {
              xs: "40%",
              sm: "20%",
            },
          }}
          onClick={() => router.push("/category/create")}
        >
          <TextComponent>Cadastrar</TextComponent>
        </Button>
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
            {!loading && data && data.length > 0 ? (
              data.map((item, key) => (
                <TableRow key={key}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => router.push(`/category/update/${item.id}`)}
                      disabled={item.access_key_id ? false : true}
                      sx={{
                        marginLeft: {
                          xs: "0%",
                          sm: "10%",
                        },
                        width: {
                          xs: "20%",
                          sm: "30%",
                        },
                      }}
                    >
                      <TextComponent>Editar</TextComponent>
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        marginLeft: {
                          xs: "0%",
                          sm: "10%",
                        },
                        width: {
                          xs: "20%",
                          sm: "30%",
                        },
                      }}
                      disabled={item.access_key_id ? false : true}
                      onClick={async() => {
                        const response: unknown = await deleteCategory(item.id);
                        const categoryResponse = response as CategoryApiResponse

                        if (categoryResponse && categoryResponse.status === 200) {
                          window.location.reload();
                        }
                        
                      }}
                    >
                      <TextComponent>Excluir</TextComponent>
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
       
      <Grid>
        <PaginationCategoryComponent></PaginationCategoryComponent>
      </Grid>
    </div>
  );
}
