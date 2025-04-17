import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import {
  Alert,
  Button,
  TextField,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import { ButtonComponent } from "./ButtonComponent";
import { clearProduct, setProduct } from "@/redux/productSlice";
import TextComponent from "./TextComponent";
import { setError } from "@/redux/fetchSlice";
import { useRouter } from "next/navigation";

import useFetchCategory from "@/Hook/useFetchCategory";
import useFetchProduct from "@/Hook/useFetchProduct";
import { FormEvent } from "react";
import { patchProduct } from "@/api/products";
import { ProductApiResponse } from "@/Types/Products";

export default function FormComponentProductUpdate({
  id,
  category_id,
}: {
  id: number;
  category_id: number;
}) {
  const product = useSelector((state: RootState) => state.product.data);
  const categoryProduct = useSelector(
    (state: RootState) => state.category.data
  );
  const error = useSelector((state: RootState) => state.fetch.error);
  const loading = useSelector((state: RootState) => state.fetch.loading);
  const dispatch = useDispatch();
  useFetchProduct(id);
  useFetchCategory(category_id);
  const router = useRouter();

  async function handleUpdate(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      if (product && product.name.trim()) {
        const response: unknown = await patchProduct(id, product.name);
        const productResponse = response as ProductApiResponse;
        console.log(response)
        if (productResponse && productResponse.status === 200) {
          dispatch(clearProduct());
          router.push("/product");
        } else if (productResponse && productResponse.status === 400) {
          dispatch(setError("Erro: produto com nome igual"))
        } else {
          dispatch(setError("Erro: erro durante a edição do produto"))
        }
      } else {
        dispatch(setError("Erro: preencha o nome campo"));
      }
    } catch (error) {
      console.log(error);
      dispatch(
        setError(
          "Erro: Ocorreu um erro durante o processo de edição do produto."
        )
      );
    }
  }
  return (
    <form className="flex flex-col w-[100%] items-center">
      {loading ? (
        <>
          <p>Carregando</p>
        </>
      ) : (
        <>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              variant="standard"
              label="Digite o nome do produto"
              placeholder="Digite o nome do produto"
              value={product ? product.name : ""}
              onChange={(e) => dispatch(setProduct({ name: e.target.value }))}
              required
              sx={{
                width: {
                  sm: "65%",
                  xs: "95%",
                },

                paddingBottom: "5%",
              }}
            />
            <TextField
              variant="standard"
              label="Digite a descrição do produto"
              placeholder="Digite a descrição do produto"
              value={product ? product.description : ""}
              disabled
              sx={{
                width: {
                  sm: "65%",
                  xs: "95%",
                },
                paddingBottom: "5%",
              }}
              InputProps={{
                sx: {
                  fontSize: {
                    sm: "1.1rem",
                    xs: "0.9rem",
                  },
                },
              }}
            />

            <TextField
              variant="standard"
              label="Digite o preço do produto"
              placeholder="Digite o preço do produto"
              value={product ? product.price : 0}
              type="number"
              disabled
              sx={{
                width: {
                  sm: "65%",
                  xs: "95%",
                },
                paddingBottom: "5%",
              }}
              InputProps={{
                sx: {
                  fontSize: {
                    sm: "1.1rem",
                    xs: "0.9rem",
                  },
                },
              }}
            />
            <TextField
              variant="standard"
              label="Digite a URL do produto"
              placeholder="Digite a URL do produto"
              value={product ? product.image_url : ""}
              type="text"
              disabled
              sx={{
                width: {
                  sm: "65%",
                  xs: "95%",
                },
                paddingBottom: "5%",
              }}
              InputProps={{
                sx: {
                  fontSize: {
                    sm: "1.1rem",
                    xs: "0.9rem",
                  },
                },
              }}
            />
            <Select
              variant="standard"
              label="Selecione a categoria"
              value={categoryProduct ? categoryProduct.name : ""}
              sx={{
                width: {
                  sm: "65%",
                  xs: "95%",
                },
              }}
              disabled
            >
              <MenuItem value={categoryProduct ? categoryProduct.name : ""}>
                {categoryProduct ? categoryProduct.name : ""}
              </MenuItem>
            </Select>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              width: {
                sm: "65%",
                xs: "95%",
              },

              justifyContent: "space-between",
              paddingTop: {
                sm: "5%",
                xs: "7%",
              },
              paddingBottom: "5%",
            }}
          >
            <ButtonComponent
              color="error"
              onClick={() => {
                dispatch(clearProduct());
                router.push("/product");
              }}
            >
              <TextComponent>voltar</TextComponent>
            </ButtonComponent>
            <Button
              color="success"
              variant="contained"
              onClick={(e) => handleUpdate(e)}
            >
              <TextComponent>Editar</TextComponent>
            </Button>
          </Grid>

          {error ? (
            <Alert
              severity="warning"
              onClose={() => {
                dispatch(setError(""));
              }}
            >
              {error}
            </Alert>
          ) : (
            <></>
          )}
        </>
      )}
    </form>
  );
}
