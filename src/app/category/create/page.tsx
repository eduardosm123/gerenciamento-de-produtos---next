"use client";

import FormComponentCategoryCreate from "@/components/FormComponentCategoryCreate";
import { NavbarComponent } from "@/components/NavbarComponent";
import TextComponent from "@/components/TextComponent";
import { Grid } from "@mui/material";

export default function Page() {
  return (
    <NavbarComponent selected="category">
      <Grid
        sx={{
          paddingTop: {
            xs: "20%",
            sm: "5%",
          },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          sx={{
            width: {
              xs: "60%",
              sm: "40%",
            },
          }}
        >
          <Grid
            sx={{
              height: {
                xs: "3.4375rem",
              },
              bgcolor: "#1E173F",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <TextComponent>
              <span className="text-white">
                Formulário de cadastro de categorias
              </span>
            </TextComponent>
          </Grid>
            <Grid sx={{
              bgcolor: "#EEF8FF",
               
              height: {
                sm: "30.625rem",
                xs: "20rem"
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
               <FormComponentCategoryCreate></FormComponentCategoryCreate>
            </Grid>
         
        </Grid>
      </Grid>
    </NavbarComponent>
  );
}
