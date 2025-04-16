"use client";

import { useRouter } from "next/navigation";
import {
  Button,
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TextComponent from "./TextComponent";
import FilterProduct from "./FilterProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useFetchProducts from "@/Hook/useFetchProducts";
import Table from "@mui/material/Table";
import PaginationProductComponent from "./PaginationProductComponent";
import { deleteProduct } from "@/api/products";
export default function TableComponentProduct() {
  const router = useRouter();
  const data = useSelector((state: RootState) => state.listProducts.rows);
  const loading = useSelector((state: RootState) => state.fetch.loading);

  useFetchProducts();

  return (
    <div className="w-[80%]">
      <div className="w-[100%] flex justify-between mb-[2%] items-center flex-col">
        <section className="w-[100%] flex justify-between mb-[2%] items-center">
          <FilterProduct></FilterProduct>
          <Button
            color="success"
            variant="contained"
            sx={{
              width: {
                xs: "40%",
                sm: "20%",
              },
              height: {
                xs: "20%",
              },
            }}
            onClick={() => router.push("/product/create")}
          >
            <TextComponent>Cadastrar</TextComponent>
          </Button>
        </section>
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
                  <span className="font-bold">DESCRIÇÃO</span>
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
                    <TableCell align="center">{item.description}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          router.push(`/category/update/${item.id}`)
                        }
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
                        onClick={() => {
                          deleteProduct(item.id);
                          window.location.reload();
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
      </div>
      <Grid>
        <PaginationProductComponent></PaginationProductComponent>
      </Grid>
    </div>
  );
}
