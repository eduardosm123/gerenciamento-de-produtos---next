"use client";

import { RootState } from "@/redux/store";
import { Alert, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
import { clearCategory, setCategory } from "@/redux/categorySlice";
import { FormEvent } from "react";
import { postCategory } from "@/api/categories";
import { setError } from "@/redux/fetchSlice";
import { Grid} from "@mui/material";
import TextComponent from "./TextComponent";

export default function FormComponentCategoryCreate() {
  const data = useSelector((state: RootState) => state.category.data.name);
  const error = useSelector((state: RootState) => state.fetch.error);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (data && data.trim()) {
      try {
        postCategory({ name: data });
        dispatch(clearCategory());
        router.push("/");
      } catch (err) {
        console.log(err);
        dispatch(
          setError("Erro: ocorreu um erro durante o cadastro da categoria")
        );
      }
    } else {
      dispatch(setError("Erro: campo nome de categoria vazio"));
    }
  }

  return (
    <form className="flex flex-col w-[100%] items-center">
      <Grid sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
         <TextField
          variant="standard"
          placeholder="Digite o nome da categoria"
          value={data}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          required
          sx={{
            width: {
              sm: "65%",
              xs: "95%"
            },
          }}
          InputProps={{
            sx: { fontSize: {
              sm:  "1.1rem",
              xs: "0.9rem"
            } }
          }}
      
        />
      </Grid>
      
      <Grid sx={{
         display: "flex",
         width: "100%",
         justifyContent: "space-around",
         paddingTop: {
          xs: "95%",
          sm: "55%"
         }
      }}>
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
