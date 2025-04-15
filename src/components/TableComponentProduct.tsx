"use client";

import { useRouter } from "next/navigation";
import { Button, Grid, TableContainer, TextField } from "@mui/material";
import TextComponent from "./TextComponent";

export default function TableComponentProduct() {
    const router = useRouter();

  return (
    <div className="w-[80%]">
      <div className="w-[100%] flex justify-between mb-[2%]">
        <Button
          color="success"
          variant="contained"
          sx={{
            width: {
              xs: "40%",
              sm: "20%",
            },
          }}
          onClick={() => router.push("/product/create")}
        >
          <TextComponent>Cadastrar</TextComponent>
        </Button>
        <section>
            <TextField  variant="standard" placeholder="Digite o valor do filtro">Digite o valor do filtro</TextField>
            
        </section>
      </div>
    </div>
  );
}
