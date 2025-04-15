import { createSlice } from "@reduxjs/toolkit";
import { IListCategory } from "@/Interface/IListCategory";

const initialState: IListCategory = {
  rows: [], 
  totalPages: 0,
  page: 1
};

export const listCategorySlice = createSlice({
  name: "listCategory",
  initialState: initialState,
  reducers: {
    setList: (state, { payload }) => {
      state.rows = payload;
    }, 
    setTotalPage: (state, { payload }) => {
      state.totalPages = payload;
    },
    setPage: (state, { payload}) => {
      state.page = payload
    }
  },
});

export const { setList, setTotalPage, setPage } = listCategorySlice.actions;
