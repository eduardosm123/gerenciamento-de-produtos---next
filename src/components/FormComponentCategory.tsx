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

export default function FormComponentCategory() {
  const data = useSelector((state: RootState) => state.category.name);
  const error = useSelector((state: RootState)=> state.fetch.error)
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (data.trim()) {
      try {
        postCategory({ name: data });
        dispatch(clearCategory());
        router.push("/");
      } catch (err) {
        console.log(err);
        dispatch(setError("Erro: ocorreu um erro durante o cadastro da categoria"))
      }
    } else {
      dispatch(setError("Erro: campo nome de categoria vazio"))
    }
  }


  return (
    <form className="flex flex-col w-[100%] items-center">
      <section className="w-[100%] flex justify-center">
        <TextField
          variant="standard"
          placeholder="Digite o nome da categoria"
          value={data}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          required
          sx={{
            width: "65%",
          }}
        />
      </section>
      <section className="flex w-[100%] justify-around pt-75">
        <ButtonComponent
          color="error"
          onClick={() => {
            dispatch(clearCategory());
            router.push("/");
          }}

           
        >
          voltar
        </ButtonComponent>
        <Button
          color="success"
          variant="contained"
          onClick={(e) => handleSubmit(e)}
        >
          Cadastrar
        </Button>
      </section>
     {error ? <Alert severity="warning" onClose={()=> {
      dispatch(setError(""))
     }}>{error}</Alert>: <></>}
    </form>
  );
}
