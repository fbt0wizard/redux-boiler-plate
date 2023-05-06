import { api } from "../baseConfig";

export const appUserSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    authUser: builder.mutation({
      query: (data) => ({
        url: "/user/login", // * Put your endpoint here
        method: "POST",
        body: data,
      }),
    }),
    getUsers: builder.query({
        query: () => ({
            url: "/users", // * Put your endpoint here
            method: "GET"
        }),
        // * This is where you assign tags to endpoints  also make sure the tags is in your baseConfig.js file
        providesTags: ["Users"]
    })
  }),
});

export const { useAuthUserMutation, useGetUsersQuery } = authenticationSlice;
