import { createSlice } from "@reduxjs/toolkit";
import { IListProduct } from "@/Interface/IProduct";

const initialState: IListProduct = {
  rows: [],
  totalPages: 0,
  page: 1,
  filter: "",
  typeFilter: "name",
};

export const listProductSlice = createSlice({
  name: "listProduct",
  initialState,
  reducers: {
    setListProduct: (state, { payload }) => {
      state.rows = payload;
    },
    setTotalPageProduct: (state, { payload }) => {
      state.totalPages = payload;
    },
    setPageProduct: (state, { payload }) => {
      state.page = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setTypeFilter: (state, { payload }) => {
      state.typeFilter = payload;
    },
  },
});

export const {
  setListProduct,
  setTotalPageProduct,
  setPageProduct,
  setFilter,
  setTypeFilter,
} = listProductSlice.actions;
