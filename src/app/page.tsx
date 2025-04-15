"use client";

import { Grid } from "@mui/material";
import { NavbarComponent } from "../components/NavbarComponent";
import TableComponentCategory from "@/components/TableComponentCategory";

export default function Home() {
  return (
    <NavbarComponent selected="category">
      <Grid sx={{
        paddingTop: {
          xs: "15%",
          sm: "5%"
        },
        justifyContent: "center",
        display: "flex"
      }}>
        <TableComponentCategory></TableComponentCategory>
      </Grid>
       
    </NavbarComponent>
  );
}
