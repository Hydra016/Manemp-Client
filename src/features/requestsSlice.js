import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRequests = createAsyncThunk('requests/fetchRequests', async () => {
    const response = await axios.get('http://localhost:5000/api/sendRequest');
    console.log(response)
})

const initialState = {
  isLoading: true,
  requests: []
};

const requestSlice = createSlice({
  name: "requests",
  initialState,
});

export default requestSlice.reducer;
