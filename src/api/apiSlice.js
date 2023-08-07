import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
            providesTags: ["tasks"], // definimos el nombre a toda la funcion de traer las tareas (tasks)
            //    metodo para transformar la respuesta
            transformResponse: (response) => response.sort((a, b) => b.id - a.id),
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: "/tasks",
                method: "POST",
                body: newTask,
            }),
            invalidatesTags: ["tasks"],
        }),
    }),
});

// exportamos los metodos de getTasks renombrado automaticamente como useGet...
// para wsr usado desde el componente
export const { useGetTasksQuery, useCreateTaskMutation } = apiSlice;
