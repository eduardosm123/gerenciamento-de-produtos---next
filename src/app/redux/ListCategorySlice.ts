import { createSlice } from "@reduxjs/toolkit";
import { IListCategory } from "@/Interface/IListCategory";

const initialState: IListCategory = {
  rows: [],
  offset: 0,
  total: 0,
};

export const listCategorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setList: (state, { payload }) => {
      state.rows = payload;
    },
    setOffset: (state, { payload }) => {
      state.offset = payload;
    },
    setTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { setList, setOffset, setTotal } = listCategorySlice.actions;
