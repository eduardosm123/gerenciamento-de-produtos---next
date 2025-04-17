"use client";

import { Grid } from "@mui/material";
import { useParams } from "next/navigation";

import { NavbarComponent } from "@/components/NavbarComponent";
import FormTitle from "@/components/FormTitle";
import FormComponentProductRead from "@/components/FormComponentRead";

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
            <FormComponentProductRead
              id={params && params.id ? Number(params.id) : 0}
              category_id={params && params.id ? Number(params.category_id) : 0}
            ></FormComponentProductRead>
          </Grid>
        </Grid>
      </Grid>
    </NavbarComponent>
  );
}
