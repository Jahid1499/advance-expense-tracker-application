import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    type: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        searched: (state, action) => {
            state.search = action.payload;
        },

        typed: (state, action) => {
            state.type = action.payload;
        },

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        clearFilter: (state, _action) => {
            state.search = "";
            state.type = "";
        },
    },
})

// eslint-disable-next-line no-empty-pattern
export const { searched, clearFilter, typed } = filtersSlice.actions;
export default filtersSlice.reducer;