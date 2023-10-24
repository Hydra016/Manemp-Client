import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await axios.get(`http://localhost:5000/api/current_user`, {
      withCredentials: true
    });
    return response;
  });

  export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/logout`, {
        withCredentials: true
      });
      return response;
    } catch (error) {
      console.log(error.message)
    }
  });

  export const singupUser = createAsyncThunk("user/signup", async (data) => {
    try {
      	const response = await axios.put('http://localhost:5000/api/completeSetup', data)
        return response;
    } catch (err) {
      console.log(err.message)
    }
  })
  

const initialState = {
  user: {},
  isLoading: false,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = action.payload?.data.isAuthenticated;
      state.user = action.payload?.data.data;
    },
    [fetchUser.rejected]: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    [singupUser.pending]: (state) => {
      state.isLoading = true;
    },
    [singupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.data.data;
    },
    [singupUser.rejected]: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    [logoutUser.pending]: (state) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = {};
      state.isAuthenticated = action.payload.data?.isAuthenticated
    },
    [logoutUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
