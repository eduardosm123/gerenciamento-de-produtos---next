"use client";

import FormComponentCategoryUpdate from "@/components/FormComponentCategoryUpdate";
import FormTitle from "@/components/FormTitle";
import { NavbarComponent } from "@/components/NavbarComponent";

import { Grid } from "@mui/material";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

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
            <FormTitle>Formulário de edição de categorias</FormTitle>
          </Grid>
          <Grid
            sx={{
              bgcolor: "#EEF8FF",
              height: {
                sm: "30.625rem",
                xs: "20rem",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormComponentCategoryUpdate
              id={Number(params.id)}
            ></FormComponentCategoryUpdate>
          </Grid>
        </Grid>
      </Grid>
    </NavbarComponent>
  );
}
