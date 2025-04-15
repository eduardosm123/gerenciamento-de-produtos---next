import { Grid, MenuItem, Select, TextField } from "@mui/material";
import TextComponent from "./TextComponent";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { setFilter, setPageProduct, setTypeFilter } from "@/redux/ListProductsSlice";

export default function FilterProduct() {
  const data = useSelector((state: RootState) => state.listProducts);
  const dispatch = useDispatch();

  return (
    <Grid
      sx={{
        width: {
          xs: "50%",
          sm: "30%"
        },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <TextField
        variant="standard"
        placeholder="Digite o valor do filtro"
        value={data ? data.filter : ""}
        onChange={(e) => {
          dispatch(setFilter(e.target.value.trim()))
          dispatch(setPageProduct(1))
        }}
        sx={{
          width: { 
            xs: "100%",
            sm: "50%",
          },
        }}
        InputProps={{
          sx: {
            fontSize: {
              sm: "1.1rem",
              xs: "0.7rem",
            },
          },
        }}
      >
        <TextComponent> Digite o valor do filtro</TextComponent>
      </TextField>
      <Select
        variant="standard"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        value={data ? data.typeFilter : "name"}
        onChange={(e)=> {
          dispatch(setTypeFilter(e.target.value))
          dispatch(setPageProduct(1))
        }}
        sx={{
          width: {
            xs: "100%",
            sm: "40%",
          },
        }}
      >
        <MenuItem value={"name"}>
          <TextComponent color="black">Nome</TextComponent>
        </MenuItem>
        <MenuItem value={"category_id"}>
          <TextComponent color="black">Id da Categoria</TextComponent>
        </MenuItem>
      </Select>
       
    </Grid>
  );
}
