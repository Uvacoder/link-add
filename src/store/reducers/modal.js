import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    modals: []
};

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.modals = [...state.modals, { id: uuidv4(), maxWidth: action.payload.maxWidth, name: action.payload.name, data: action.payload.data }];
        },
        closeModal: (state, action) => {
            state.modals = state.modals.filter(m => m.id !== action.payload);
        }
    }
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer; 
