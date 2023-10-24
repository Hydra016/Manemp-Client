import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuOpened: false,
    modalOpened: false
}

const commonSlice = createSlice({
    name: 'commonSlice',
    initialState, 
    reducers: {
        openMenu: (state, action) => {
            state.menuOpened = action.payload
        },
        openModal: (state, action) => {
            state.modalOpened = action.payload
        }
    }
})

export const { openMenu, openModal } = commonSlice.actions;
export default commonSlice.reducer;

