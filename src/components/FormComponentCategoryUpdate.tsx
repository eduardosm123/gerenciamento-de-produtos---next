"use client";

import { RootState } from "@/redux/store";
import { Alert, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
import { clearCategory, setCategory } from "@/redux/categorySlice";
import { FormEvent } from "react";
import { patchCategory } from "@/api/categories";
import { setError } from "@/redux/fetchSlice";
import { Grid } from "@mui/material";
import TextComponent from "./TextComponent";
import useFetchCategory from "@/Hook/useFetchCategory";

export default function FormComponentCategoryUpdate({ id }: { id: number }) {
  const data = useSelector((state: RootState) => state.category.data);
  const error = useSelector((state: RootState) => state.fetch.error);
  const loading = useSelector((state: RootState)=> state.fetch.loading)
  useFetchCategory(id)
  const dispatch = useDispatch();
  const router = useRouter();

  
  function handleUpdate(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      patchCategory({data: {
        id, name: data.name
      }})

      dispatch(clearCategory())
      router.push("/")
    } catch (error) {
      console.log(error)
      dispatch(setError("Erro: Ocorreu um erro durante o processo de edição da categoria."))
    }
     
  }

  return (
    <form className="flex flex-col w-[100%] items-center">
      { !loading && data ? <><p>Carregando</p></> : <>
      
        <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          variant="standard"
          placeholder="Digite o nome da categoria"
          value={data ? data.name : ""}
          onChange={(e) => dispatch(setCategory({id: id, name: e.target.value}))}
          required
          sx={{
            width: {
              sm: "65%",
              xs: "95%",
            },
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
      </Grid>

      <Grid
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          paddingTop: {
            xs: "95%",
            sm: "55%",
          },
        }}
      >
        <ButtonComponent
          color="error"
          onClick={() => {
            dispatch(clearCategory());
            router.push("/");
          }}
        >
          <TextComponent>voltar</TextComponent>
        </ButtonComponent>
        <Button
          color="primary"
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
      </>}
    </form>
  );
}
