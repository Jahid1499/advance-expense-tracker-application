import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editing: {},
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state) => {
            state.editing = {};
        },
    }
})

// eslint-disable-next-line no-empty-pattern
export const { editActive, editInActive } = transactionsSlice.actions;
export default transactionsSlice.reducer;