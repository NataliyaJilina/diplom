import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { IDetailsResponse } from "./types";

export const detailsApi = createApi({
    reducerPath: "detailsApi",
    baseQuery: fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers) => {
        headers.set(
          "X-RapidAPI-Key",
          "9b8e6c1fd2msh08f241e0c727f8cp10e82ajsn87f924e539f6"
        );
        headers.set("X-RapidAPI-Host", "bayut.p.rapidapi.com");
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getDetails: builder.query<IDetailsResponse, string>({
        query: (externalID) => ({
          url: "/properties/detail",
          params: {
            externalID,
          },
        }),
      }),
    }),
  });
  
  export const {useGetDetailsQuery} = detailsApi