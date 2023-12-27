import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const saveShifts = createAsyncThunk('shifts/saveShift', async (data) => {
    const response = await axios.post('http://localhost:5000/api/shift/create', data)
    return response
})

export const getShifts = createAsyncThunk('shifts/getShift', async (data) => {
    const response = await axios.post('http://localhost:5000/api/shifts', data)
    return response
})

export const getEmployeeShifts = createAsyncThunk('shifts/getEmployeeShifts', async (data) => {
    const response = await axios.post('http://localhost:5000/api/employeeShifts', data);
    return response
})

export const deleteShifts = createAsyncThunk('shifts/deleteShifts', async (data) => {
    const response = await axios.delete('http://localhost:5000/api/delete', {
        data
    })
    return response
})

const initialState = {
    shifts: [],
    isLoading: false
}

const shiftSlice = createSlice({
    name: 'shop',
    initialState,
    extraReducers: {
        [saveShifts.pending]: (state) => {
            state.isLoading = true
        },
        [saveShifts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.shifts = action.payload?.data.data
        },
        [saveShifts.rejected]: (state) => {
            state.isLoading = false
        },
        [getShifts.pending]: (state) => {
            state.isLoading = true
        },
        [getShifts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.shifts = action.payload?.data.data
        },
        [getShifts.rejected]: (state) => {
            state.isLoading = false
        },
        [getEmployeeShifts.pending]: (state) => {
            state.isLoading = true
        },
        [getEmployeeShifts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.shifts = action.payload?.data.data
        },
        [getEmployeeShifts.rejected]: (state) => {
            state.isLoading = false
        },
        [deleteShifts.pending]: (state) => {
            state.isLoading = true
        },
        [deleteShifts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.shifts = action.payload?.data.data
        },
        [deleteShifts.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export default shiftSlice.reducer
