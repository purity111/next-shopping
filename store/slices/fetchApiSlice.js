import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: builder => ({
    getData: builder.query({
      query: ({ url, token }) => ({
        url,
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: token },
      }),
    }),

    postData: builder.mutation({
      query: ({ url, body, token }) => ({
        url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body,
      }),
    }),

    patchData: builder.mutation({
      query: ({ url, body, token }) => ({
        url,
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body,
      }),
    }),

    putData: builder.mutation({
      query: ({ url, body, token }) => ({
        url,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body,
      }),
    }),

    deleteData: builder.mutation({
      query: ({ url, token }) => ({
        url,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: token },
      }),
    }),
  }),
})

export const {
  useGetDataQuery,
  usePostDataMutation,
  usePatchDataMutation,
  usePutDataMutation,
  useDeleteDataMutation,
} = fetchApi

export default fetchApi
