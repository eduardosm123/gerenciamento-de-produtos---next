"use client";

import { useRouter } from "next/navigation";
import { Button  } from "@mui/material";
import TextComponent from "./TextComponent";
import FilterProduct from "./FilterProduct";
 
export default function TableComponentProduct() {
  const router = useRouter();

  return (
    <div className="w-[80%]">
      <div className="w-[100%] flex justify-between mb-[2%] items-center">
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
              xs: "20%"
            },
            
          }}
          onClick={() => router.push("/product/create")}
        >
          <TextComponent>Cadastrar</TextComponent>
        </Button>
      </div>
    </div>
  );
}
