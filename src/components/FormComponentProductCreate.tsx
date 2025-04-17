import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import useFetchCategories from "@/Hook/useFetchCategories";
import { FormEvent, useEffect } from "react";
import { setError } from "@/redux/fetchSlice";
import { postProduct } from "@/api/products";
import {
  Alert,
  Button,
  TextField,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import { clearProduct, setProduct } from "@/redux/productSlice";
import TextComponent from "./TextComponent";
import { ButtonComponent } from "./ButtonComponent";
import { validationProductCreate } from "@/validations/productCreate";
import { ProductApiResponse } from "@/Types/Products";
 

export default function FormComponentProductCreate() {
  const product = useSelector((state: RootState) => state.product.data);
  const error = useSelector((state: RootState) => state.fetch.error);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(()=> {
    dispatch(clearProduct())
  }, [dispatch])
  
  const listCategories = useSelector(
    (state: RootState) => state.listCategories.rows
  );
  useFetchCategories();

  async function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    //console.log(data);

    if (validationProductCreate({ data: product })) {
      console.log("teste");
      try {
        const response: unknown = await postProduct({
          name: product.name,
          description: product.description,
          category_id: Number(product.category_id),
          image_url: product.image_url,
          price: product.price,
        });

        const productResponse = response as ProductApiResponse;
        if (productResponse && productResponse.status === 200) {
          dispatch(clearProduct());
          router.push("/product");
        } else {
          dispatch(setError("Erro: erro ao cadastrar produto"));
        }
      } catch (error) {
        console.log(error);
        dispatch(setError("Erro: erro ao cadastrar produto"));
      }
    } else {
      dispatch(setError("Erro: campo obrigatorio vazio"));
    }
  }

  return (
    <form className="flex flex-col w-[100%] items-center">
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

            paddingBottom: "5%"
          }}
        />
        <TextField
          variant="standard"
          label="Digite a descrição do produto"
          placeholder="Digite a descrição do produto"
          value={product ? product.description : ""}
          onChange={(e) =>
            dispatch(setProduct({ description: e.target.value }))
          }
          required
          sx={{
            width: {
              sm: "65%",
              xs: "95%",
            },
            paddingBottom:"5%"
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
          onChange={(e) =>
            dispatch(setProduct({ price: Number(e.target.value) }))
          }
          required
          sx={{
            width: {
              sm: "65%",
              xs: "95%",
            },
            paddingBottom: "5%"
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
          onChange={(e) => dispatch(setProduct({ image_url: e.target.value }))}
          required
          sx={{
            width: {
              sm: "65%",
              xs: "95%",
            },
            paddingBottom: "5%"
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
          value={
            product.category_id ? product.category_id : "Selecione a categoria"
          }
          sx={{
            width: {
              sm: "65%",
              xs: "95%",
            },
             
          }}
          onChange={(e) => {
            dispatch(setProduct({ category_id: Number(e.target.value) }));
          }}
        >
          <MenuItem value="Selecione a categoria">
            Selecione a categoria
          </MenuItem>
          {listCategories ? (
            listCategories.map((item, key) => (
              <MenuItem key={key} value={item.id}>
                {item.name}  
              </MenuItem>
            ))
          ) : (
            <MenuItem>
              <TextComponent color="black">
                Categorias não carregadas
              </TextComponent>
            </MenuItem>
          )}
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
            xs: "7%"
          },
          paddingBottom: "5%" 
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
          onClick={(e) => handleSubmit(e)}
        >
          <TextComponent>cadastrar</TextComponent>
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
    </form>
  );
}
