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

            providesTags: ['getAllTransaction'],
        }),

        addTransaction: builder.mutation({
            query: (data) => ({
                url: "/transactions",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                const { data } = await queryFulfilled;
                if (data?.id) {
                    dispatch(
                        transactionsApi.util.updateQueryData("getTransactions", {}, (draft) => {
                            if (draft.length == 5) {
                                draft.pop()
                            }
                            draft.unshift(data)
                        })
                    );
                }
            },
        }),

        updateTransaction: builder.mutation({
            query: ({ id, data }) => ({
                url: `/transactions/${id}`,
                method: "PATCH",
                body: data,
            }),

            async onQueryStarted({ id, data: { name, type, amount } }, { queryFulfilled, dispatch }) {
                const updateDraft = dispatch(
                    transactionsApi.util.updateQueryData("getTransactions", {}, (draft) => {
                        const draftTodos = draft.find(
                            (transaction) => transaction.id == id
                        );
                        draftTodos.name = name;
                        draftTodos.type = type;
                        draftTodos.amount = amount;
                    })
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    updateDraft.undo();
                }
            },

            invalidatesTags: ['getAllTransaction'],
        }),

        deleteTransaction: builder.mutation({
            query: (id) => ({
                url: `/transactions/${id}`,
                method: "DELETE",
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const updateDraft = dispatch(
                    transactionsApi.util.updateQueryData("getTransactions", {}, (draft) => {
                        const index = draft.findIndex(
                            (transaction) => transaction.id == arg
                        );
                        draft.splice(index, 1)
                    })
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    updateDraft.undo();
                }
            },

            invalidatesTags: ['getAllTransaction'],

        }),



    })
})

export const { useGetTransactionsQuery, useAddTransactionMutation, useDeleteTransactionMutation, useUpdateTransactionMutation, useGetFilteredTransactionsQuery } = transactionsApi;