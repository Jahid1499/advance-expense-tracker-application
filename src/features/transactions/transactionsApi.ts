import { apiSlice } from "../api/apiSlice";

export const transactionsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTransactions: builder.query({
            query: () => `/transactions?_sort=id&_order=desc&_limit=${import.meta.env.VITE_ENVIRONMENT_PAGE_PER_TRANSACTION}`
        }),

        getFilteredTransactions: builder.query({
            query: ({ search, type, pageNumber }) => `/transactions?${type?.length > 0 ? `type_like=${type}` : ''}${search !== "" ? `&q=${search}` : ''}&_page=${pageNumber}&_limit=${import.meta.env.VITE_ENVIRONMENT_PAGE_PER_TRANSACTION}&_sort=id&_order=desc`,

            transformResponse(apiResponse, meta) {
                const totalCount = meta?.response?.headers.get("X-Total-Count");
                return {
                    data: apiResponse,
                    totalCount,
                };
            },
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

export const { useGetTransactionsQuery, useAddTransactionMutation, useDeleteTransactionMutation, useUpdateTransactionMutation, useGetFilteredTransactionsQuery } = transactionsApi;