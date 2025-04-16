import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/Interface/IProduct";

const initialState: IProduct = {
  data: {
    id: "",
    name: "",
    category_id: "Selecione a categoria",
    description: "",
    image_url: "",
    price: 0,
    access_key_id: "",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.data = {
        ...state.data,
        ...payload
      };
    },
    clearProduct: (state) => {
      state.data = {
        id: "",
        name: "",
        category_id: "Selecione a categoria",
        description: "",
        image_url: "",
        price: 0,
        access_key_id: "",
      };
    },
  },
});


export const { setProduct, clearProduct} = productSlice.actions;