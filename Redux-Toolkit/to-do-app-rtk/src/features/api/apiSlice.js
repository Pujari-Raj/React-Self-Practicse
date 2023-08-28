import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// creating
export const apiSlice = createApi({
  // giving reducer name
  reducerPath: "api",
  /*  The fetchBaseQuery function is used to create a base query with a base URL of "http://localhost:3500 ↗". This means that all API requests will be sent to this base URL. */
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  /* It defines tag types that can be used to invalidate or refetch data. In this case, there is only one tag type defined: "Todos". */
  tagTypes: ["Todos"],
  /* : It defines the API endpoints and their corresponding methods (query or mutation) */
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      /* Sorting Posts In descending order */
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      /*In this code, the 'Todos' tag is associated with the getTodos query endpoint, which fetches a list of todos. When a mutation (add, update,delete) is performed on a todo item, the 'Todos' tag is invalidated. This means that any queries with the 'Todos' tag will be marked as invalid,and the next time they are executed,the data will be refetched from the server to ensure it is up to date.
      The purpose of invalidating the 'Todos' tag is to ensure that any mutations that modify the todo list (add, update,delete)trigger a refetch of the latest data. This helps to keep the data consistent and avoid displaying outdated information to the user. */
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        /* The HTTP method "PATCH" is Hypertext Transfer Protocol (HTTP) method for requesting and modifying resources on a web server. It is typically used to update or partially modify an existing resource. */
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    // here we're destructuring id from todos (todos.id)
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

/*rtk-query provides that it creates custom hooks based on the methods that we provide we're creating useGetTodosQuery (we can also create hooks like getPizza) */

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
