"use client";

import { NavbarComponent } from "@/components/NavbarComponent";
import TableComponentProduct from "@/components/TableComponentProduct";
import { Grid } from "@mui/material";

export default function Product() {
  return (
    <NavbarComponent>
      <Grid
        sx={{
          paddingTop: {
            xs: "15%",
            sm: "5%",
          },
          justifyContent: "center",
          display: "flex"
        }}
      >
        <TableComponentProduct></TableComponentProduct>
      </Grid>
    </NavbarComponent>
  );
}
