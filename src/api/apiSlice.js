import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
        }),
    }),
});

// exportamos los metodos de getTasks renombrado automaticamente como useGet...
// para wsr usado desde el componente
export const { useGetTasksQuery } = apiSlice;
