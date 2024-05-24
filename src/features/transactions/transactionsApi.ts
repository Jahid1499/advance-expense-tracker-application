import { apiSlice } from "../api/apiSlice";

export const transactionsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTransactions: builder.query({
            query: () => "/transactions"
        })

        // end points hear
    })
})