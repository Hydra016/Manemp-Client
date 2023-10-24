import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createShop = createAsyncThunk("shop/createShop", async (data) => {
  const response = await axios.post(`http://localhost:5000/api/add-shop`, data);
  return response;
});

export const getAllShops = createAsyncThunk("shop/getAllShops", async (data) => {
  const response = await axios.post(`http://localhost:5000/api/shops`, data);
  return response;
})

const initialState = {
  shops: [],
  shop: {},
  isLoading: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: {
    [createShop.pending]: (state) => {
      state.isLoading = true;
    },
    [createShop.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createShop.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllShops.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllShops.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.shops = action.payload?.data.data;
    },
    [getAllShops.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default shopSlice.reducer;
