"use client";
import { AppBar } from "@mui/material";
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
import TextComponent from "./TextComponent";

import { INavbarComponent } from "@/Interface/INavbarComponent";

export const NavbarComponent = ({ children, selected }: INavbarComponent) => {
  const router = useRouter();
  return (
    <div className="z-5">
      <AppBar
        position="fixed"
        sx={{
          top: "0px",
          background: "#1E173F",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          height: "7%",
          alignItems: "center",
        }}
      >
        <ButtonComponent
          color={selected === "category" ? "primary" : "secondary"}
          className="w-[17%] h-[65%] sm:w-[35%]"
          onClick={() => router.push("/")}
        >
          <TextComponent>categorias</TextComponent>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => router.push("/product")}
          color={selected === "category" ? "secondary" : "primary"}
          className="w-[17%] h-[65%] sm:w-[35%]"
        >
          <TextComponent>produtos</TextComponent>
        </ButtonComponent>
      </AppBar>
      {children}
    </div>
  );
};
