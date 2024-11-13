import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetUser: builder.query({
      query: () => ({
        method: "GET",
        url: "/user/get-me",
      }),
      providesTags: ["User"],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `/users/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery, useLoginMutation, useRegisterMutation } =
  userApiSlice;
