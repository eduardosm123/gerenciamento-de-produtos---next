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
  imageError: false
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
      state.imageError = false
    },
    setImageError: (state, {payload})=> {
      state.imageError = payload
    }
  },
});


export const { setProduct, clearProduct, setImageError} = productSlice.actions;