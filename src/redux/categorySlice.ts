import { ICategory } from "@/Interface/ICategory";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICategory = {
  data: {
    id: 0,
    name: "",
  }
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.data = payload;
    },
    clearCategory: (state) => {
      state.data.id = 0;
      state.data.name = ""
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;
