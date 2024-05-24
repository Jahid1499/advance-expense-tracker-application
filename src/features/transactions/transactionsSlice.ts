import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {

    }
})

// eslint-disable-next-line no-empty-pattern
export const { } = transactionsSlice.actions;
export default transactionsSlice.reducer;