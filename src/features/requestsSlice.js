import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendRequest = createAsyncThunk('requests/sendRequest', async (data) => {
    const response = await axios.post('http://localhost:5000/api/sendRequest', data);
    return response;
})

export const fetchRequests = createAsyncThunk('request/fetchRequests', async (data) => {
    const response = await axios.post('http://localhost:5000/api/getRequests', data);
    return response;
})

export const deleteRequest = createAsyncThunk('request/deleteRequest', async (data) => {
 const response = await axios.delete('http://localhost:5000/api/deleteRequest', {
  data
 });
  return response;
})

export const acceptRequest = createAsyncThunk('request/acceptRequest', async (data) => {
  const response = await axios.put('http://localhost:5000/api/acceptRequest', data);
  console.log(response)
  return response;
});

const initialState = {
  isLoading: true,
  requests: [],
};

const requestSlice = createSlice({
  name: "requests",
  initialState,
  extraReducers: {
    [sendRequest.pending] : (state) => {
      state.isLoading = true;
    },
    [sendRequest.fulfilled] : (state, action) => {
      state.isLoading = false;
      state.requests = action.payload?.data.data
    },
    [sendRequest.rejected] : (state) => {
      state.isLoading = false
    },
    [fetchRequests.pending] : (state) => {
      state.isLoading = true;
    },
    [fetchRequests.fulfilled] : (state, action) => {
      state.isLoading = false;
      state.requests = action.payload?.data.data
    },
    [fetchRequests.rejected] : (state) => {
      state.isLoading = false
    },
    [deleteRequest.pending] : (state) => {
      state.isLoading = true;
    },
    [deleteRequest.fulfilled] : (state, action) => {
      state.isLoading = false;
      state.requests = action.payload?.data.data
    },
    [deleteRequest.rejected] : (state) => {
      state.isLoading = false
    },
    [acceptRequest.pending] : (state) => {
      state.isLoading = true;
    },
    [acceptRequest.fulfilled] : (state, action) => {
      state.isLoading = false;
      state.requests = action.payload?.data.data
    },
    [acceptRequest.rejected] : (state) => {
      state.isLoading = false
    },
  }
});

export default requestSlice.reducer;
