import { Button, Grid, MenuItem, Select, TextField } from "@mui/material"
import TextComponent from "./TextComponent"



export default function FilterProduct() {


    return (
        <Grid sx={{
            width:  "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
                xs: "column",
                sm: "row"
            }
          }}>
            <TextField variant="standard" placeholder="Digite o valor do filtro"  sx={{
                width: {
                    xs: "100%",
                    sm: "30%"
                  }
              }}
              
              InputProps={{
                sx: { fontSize: {
                  sm:  "1.1rem",
                  xs: "0.7rem"
                } }
              }}>
             <TextComponent> Digite o valor do filtro</TextComponent>
            </TextField>
            <Select
              variant="standard"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={"name"}
              sx={{
                width: {
                    xs: "100%",
                    sm: "30%"
                  }
              }}
            >
              <MenuItem value={"name"}><TextComponent color="black">Nome</TextComponent></MenuItem>
              <MenuItem value={"category_id"}><TextComponent color="black">Id da Categoria</TextComponent></MenuItem>
            </Select>
              <Button variant="contained" color="primary"
              
              sx={{
                width: {
                    xs: "100%",
                    sm: "35%"
                  } 
              }}>Buscar</Button>
          </Grid>
    )
}