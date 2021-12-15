import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
  name: string;
}

export type Users = User[];

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => 'users',
    })
  })
});

export const {useGetUsersQuery} = userApi;