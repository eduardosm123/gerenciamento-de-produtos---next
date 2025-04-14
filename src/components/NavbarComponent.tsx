"use client";
import { AppBar } from "@mui/material";
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
import TextComponent from "./TextComponent";
export const NavbarComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <div className="z-5">
      <AppBar position="fixed" sx={{ top: "0px", background: "#1E173F", display: "flex", justifyContent: "space-around", flexDirection: "row", height: "7%", alignItems: "center"}}>
        <ButtonComponent
          color="primary"
          className="w-[17%] h-[65%] sm:w-[35%]"
          onClick={() => router.push("/")}
        >
          <TextComponent>categorias</TextComponent>
        </ButtonComponent>
        <ButtonComponent color="secondary" className="w-[17%] h-[65%] sm:w-[35%]">
          <TextComponent>produtos</TextComponent>
        </ButtonComponent>
      </AppBar>
      {children}
    </div>
  );
};
