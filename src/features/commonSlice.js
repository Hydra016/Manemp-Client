import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuOpened: false,
    modalOpened: false,
    searchModal: false
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
        },
        openSearchModal: (state, action) => {
            state.searchModal = action.payload
        }
    }
})

export const { openMenu, openModal, openSearchModal } = commonSlice.actions;
export default commonSlice.reducer;

