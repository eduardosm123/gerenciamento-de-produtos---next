"use client";

import { RootState } from "@/redux/store";
import { Alert, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
import { clearCategory, setCategory } from "@/redux/categorySlice";
import { FormEvent, useEffect } from "react";
import { postCategory } from "@/api/categories";
import { setError } from "@/redux/fetchSlice";
import { Grid } from "@mui/material";
import TextComponent from "./TextComponent";
import { CategoryApiResponse } from "@/Types/Categories";

export default function FormComponentCategoryCreate() {
  const data = useSelector((state: RootState) => state.category.data);
  const error = useSelector((state: RootState) => state.fetch.error);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearCategory());
  }, [dispatch]);

  async function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (data && data.name.trim()) {
      try {
        const response: unknown = await postCategory({ name: data.name });
        const categoryResponse = response as CategoryApiResponse;

        if (categoryResponse && categoryResponse.status === 200) {
          dispatch(clearCategory());
          router.push("/");
        } else if (categoryResponse && categoryResponse.status === 400) {
          dispatch(setError("Erro: categoria com o nome igual"));
        } else {
          dispatch(
            setError("Erro:  ocorreu um erro durante o cadastro da categoria")
          );
        }
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
          onChange={(e) => dispatch(setCategory({ name: e.target.value }))}
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
