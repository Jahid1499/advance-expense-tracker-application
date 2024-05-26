import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import filterSliceReducer from '../features/filters/filtersSlice';
import paginateSliceReducer from '../features/pagination/paginationSlice';
import transactionsSliceReducer from '../features/transactions/transactionsSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        transaction: transactionsSliceReducer,
        filters: filterSliceReducer,
        pagination: paginateSliceReducer,
    },
    devTools: import.meta.env.VITE_ENVIRONMENT_SERVER !== "production",
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});






// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch