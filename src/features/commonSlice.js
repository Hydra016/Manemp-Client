import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuOpened: false,
    modalOpened: false,
    searchModal: false,
    saveModal: false,
    salaryModal: {
        status: false,
        employeeId: null
    },
    currentSelectedShop: null
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
        },
        openSaveModal: (state, action) => {
            state.saveModal = action.payload
        },
        OpenSalaryModal: (state, action) => {
            state.salaryModal.status = action.payload.status
            state.salaryModal.employeeId = action.payload.employeeId
        },
        setCurrentShop: (state, action) => {
            state.currentSelectedShop = action.payload
        }
    }
})

export const { openMenu, openModal, openSearchModal, openSaveModal, OpenSalaryModal, setCurrentShop } = commonSlice.actions;
export default commonSlice.reducer;

