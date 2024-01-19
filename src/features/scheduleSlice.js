import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const saveSchedule = createAsyncThunk('schedule/saveSchedule', async (data) => {
    const response = await axios.post('http://localhost:5000/api/schedule/create', data)
    console.log(response)
    return response
})

export const getSchedule = createAsyncThunk('schedule/getSchedule', async (data) => {
    const response = await axios.post('http://localhost:5000/api/schedule', data)
    return response
})

export const deleteSchedule = createAsyncThunk('schedule/deleteSchedule', async (data) => {
    const response = await axios.delete('http://localhost:5000/api/schedule/delete', {
        data
    })
    console.log(response)
    return response
})

const initialState = {
    schedule: [],
    isLoading: false,
    // error: [
    //     ''
    // ]
}

const scheduleSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
    },
    extraReducers: {
        [saveSchedule.pending] : (state, action) => {
            state.isLoading = true
        },
        [saveSchedule.fulfilled] : (state, action) => {
            state.schedule = action.payload?.data.data;
            state.isLoading = false
        },
        [saveSchedule.rejected] : (state, action) => {
            state.isLoading = false
        },
        [getSchedule.pending] : (state, action) => {
            state.isLoading = true
        },
        [getSchedule.fulfilled] : (state, action) => {
            state.schedule = action.payload?.data.data;
            state.isLoading = false
        },
        [getSchedule.rejected] : (state, action) => {
            state.isLoading = false
        },
        [deleteSchedule.pending] : (state, action) => {
            state.isLoading = true
        },
        [deleteSchedule.fulfilled] : (state, action) => {
            state.schedule = action.payload?.data.data;
            state.isLoading = false
        },
        [deleteSchedule.rejected] : (state, action) => {
            state.isLoading = false
        }
    }
})

export default scheduleSlice.reducer
