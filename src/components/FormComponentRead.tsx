import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import useFetchProduct from "@/Hook/useFetchProduct";

import { Alert, Button, Grid } from "@mui/material";
import { ButtonComponent } from "./ButtonComponent";
import { clearProduct, setImageError } from "@/redux/productSlice";
import TextComponent from "./TextComponent";
import { setError } from "@/redux/fetchSlice";
import { useRouter } from "next/navigation";
import useFetchCategory from "@/Hook/useFetchCategory";
 
import Image from "next/image";
import { validationImage } from "@/validations/productCreate";
 
 
export default function FormComponentProductRead({
  id,
  category_id,
}: {
  id: number;
  category_id: number;
}) {
  const data = useSelector((state: RootState) => state.product.data);
  const imageError = useSelector((state: RootState)=> state.product.imageError)
  const categoryProduct = useSelector(
    (state: RootState) => state.category.data
  );
  const error = useSelector((state: RootState) => state.fetch.error);
  const loading = useSelector((state: RootState) => state.fetch.loading);
  const dispatch = useDispatch();
  useFetchProduct(id);
  useFetchCategory(category_id);
  const router = useRouter();

  return (
    <div className="flex flex-col w-[100%] items-center">
      {!loading && data ? (
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
            {!imageError ?  <Image width={100} height={100} src={  validationImage(data.image_url) ? data.image_url : "/erroImagem.png"} alt={data.name || "Imagem de Erro" }
            
            onError={({ currentTarget })=> {
              currentTarget.onerror = null;
              currentTarget.src = "/erroImagem.png"
              currentTarget.alt = "Imagem de Erro"
              dispatch(setImageError(true))
            }}
            ></Image> : <Image src={"/erroImagem.png"} alt="Imagem de Erro" width={100} height={100}></Image>}
            

            <Grid sx={{width: "100%", paddingLeft: {
              sm: "30%",
              xs: "5%"
            },
            paddingTop: {
              sm: "5%",
              xs: "7%",
            },}}>
              <p className="text-black text-wrap"> <span className="font-bold">Nome: </span>  {data ? data.name : ""}</p>
              <p className="text-black text-wrap pt-1"> <span className="font-bold">Descrição: </span>  {data ? data.description : ""}</p>
              <p className="text-black text-wrap pt-1"> <span className="font-bold">Preço: </span> R$ {data ? data.price : ""}</p>
              <p className="text-black text-wrap pt-1"> <span className="font-bold">Categoria: </span>  {categoryProduct ? categoryProduct.name : ""}</p>
            </Grid>
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
              color="primary"
              variant="contained"
              onClick={() => {
                dispatch(clearProduct());
                router.push("/product");
              }}
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
    </div>
  );
}
