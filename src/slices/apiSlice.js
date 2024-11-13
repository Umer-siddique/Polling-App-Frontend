/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:8000/api/v1`,
  prepareHeaders: (headers, { getState, body }) => {
    const token = getState()?.auth?.userInfo?.token;

    // Set Authorization header if token is available
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    if (body instanceof FormData) {
      // No need to set the boundary manually, let the browser handle it
      headers.set("Content-Type", "multipart/form-data");
    } else if (typeof body === "object" && !headers.has("Content-Type")) {
      // Only set the content-type to json if appropriate
      headers.set("Content-Type", "application/json");
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Poll"],
  endpoints: (builder) => ({}),
});
