import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {

    }
})

// eslint-disable-next-line no-empty-pattern
export const { } = filtersSlice.actions;
export default filtersSlice.reducer;