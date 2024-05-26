
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageNumber: 1,
};
const paginateSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        pagination: (state, action) => {
            state.pageNumber = action.payload;
        },
    },
});

export default paginateSlice.reducer;
export const { pagination } = paginateSlice.actions;
