import { apiSlice } from "./apiSlice";

export const pollsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetPolls: builder.query({
      query: () => ({
        method: "GET",
        url: "/polls",
      }),
      providesTags: ["Poll"],
    }),

    GetPoll: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/polls/${id}`,
      }),
      providesTags: ["Poll"],
    }),

    createPoll: builder.mutation({
      query: (data) => ({
        url: `/polls`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Poll"],
    }),

    deletePoll: builder.mutation({
      query: (id) => ({
        url: `/polls/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Poll"],
    }),
    updatePoll: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/polls/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Poll"],
    }),

    voteOnPoll: builder.mutation({
      query: ({ pollId, optionIndex }) => ({
        url: `/polls/${pollId}/vote`,
        method: "PATCH",
        body: { optionIndex },
      }),
      invalidatesTags: ["Poll"],
    }),
  }),
});

export const {
  useGetPollQuery,
  useGetPollsQuery,
  useCreatePollMutation,
  useDeletePollMutation,
  useVoteOnPollMutation,
  useUpdatePollMutation,
} = pollsApiSlice;
