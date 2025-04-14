"use client";
import { AppBar } from "@mui/material";
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
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
          className="w-[17%] h-[65%]"
          onClick={() => router.push("/")}
        >
          categorias
        </ButtonComponent>
        <ButtonComponent color="secondary" className="w-[17%] h-[65%]">
          produtos
        </ButtonComponent>
      </AppBar>
      {children}
    </div>
  );
};
