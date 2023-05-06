import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// * Base Query Wrapper for pre-configuration eg: to always check if user is still authorized
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let response = await baseQuery(args, api, extraOptions);

  // * Intercept the response before process is fully completed
  if (response?.error?.status === 401) {
    // * Example, Do something if user is not authorizes or token has expired
  } else return response;
};


// * The actual baseConfiq Query
const baseQuery = fetchBaseQuery({
    baseUrl: "....put your base url here ==> from you env variable or hard code it",
    prepareHeaders: (headers, { getState }) => {

        // * You can access any data from your redux toolkit state here if you need to add any info from there to your api calls
      const { user: { user: { authToken }, } } = getState(); // * Example, i am getting the user token from the persisted user state

      // * Set the token to the headers, you can also set all content type here ==> it is fully customizable  as you want 
      if (authToken) {
        headers.set("authorization", `Bearer ${authToken}`);
      }
      return headers;
    },
});

// * Build the api configuration and export it
export const api = createApi({
    baseQuery: baseQueryWithReAuth,
  
    reducerPath: "apiPath",
    // * You will add all the tags you will create for each endpoints here, so the app can always remember so it can serve data from cache instead of re-fetching
    // * Example here is Users tag
    tagTypes: [
      "Users"
    ],
    endpoints: (builder) => ({}),
});