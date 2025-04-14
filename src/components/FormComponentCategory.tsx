"use client";

import { RootState } from "@/redux/store";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
import { clearCategory, setCategory } from "@/redux/categorySlice";
import { FormEvent } from "react";
import { postCategory } from "@/api/categories";

export default function FormComponentCategory() {
  const data = useSelector((state: RootState) => state.category.name);

  const dispatch = useDispatch();
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      postCategory({ name: data });
      dispatch(clearCategory());
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className="flex flex-col">
      <TextField
        variant="standard"
        placeholder="Digite o nome da categoria"
        value={data}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        required
      />
      <section>
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
    </form>
  );
}
