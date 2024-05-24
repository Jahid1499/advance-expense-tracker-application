import { apiSlice } from "../api/apiSlice";

export const transactionsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTransactions: builder.query({
            query: () => "/transactions"
        }),

        addTransaction: builder.mutation({
            query: (data) => ({
                url: "/transactions",
                method: "POST",
                body: data,
            }),
        }),

        updateTransaction: builder.mutation({
            query: ({ id, data }) => ({
                url: `/transactions/${id}`,
                method: "PATCH",
                body: data,
            }),
        }),

        deleteTransaction: builder.mutation({
            query: (id) => ({
                url: `/transactions/${id}`,
                method: "DELETE",
            }),
        }),


    })
})

export const { useGetTransactionsQuery, useAddTransactionMutation, useDeleteTransactionMutation, useUpdateTransactionMutation } = transactionsApi;