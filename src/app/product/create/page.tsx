"use client";

import FormTitle from "@/components/FormTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { Grid } from "@mui/material";
import FormComponentProductCreate from "@/components/FormComponentProductCreate";

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
                     xs: "75%",
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
                   <FormTitle>Formulário de cadastro de produtos</FormTitle>
                 </Grid>
                   <Grid sx={{
                     bgcolor: "#EEF8FF",
                     height: {
                       sm: "30.625rem",
                       xs: "22rem"
                     },
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                   }}>
                       <FormComponentProductCreate></FormComponentProductCreate>
                   </Grid>
                
               </Grid>
             </Grid>
           </NavbarComponent>
    )
}