import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  changeList: false
};

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setChangeList: (state, { payload }) => {
      state.changeList = payload;
    },
    clearFetch: (state) => {
      state.error = "";
      state.loading = false;
      state.changeList = false;
    },
  },
});

export const { setError, setLoading, setChangeList, clearFetch } = fetchSlice.actions;