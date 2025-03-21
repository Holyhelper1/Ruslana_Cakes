

// example

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL_PRODUCTS = "https://fakestoreapi.com/";

export interface IGoods {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: URL_PRODUCTS,
    prepareHeaders(headers) {
      // headers.set('x-api-key', PROD_API_KEY)
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchGoods: builder.query<IGoods[], number | void>({
        query(limit = 10) {
          return `/products?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchGoodsQuery } = apiSlice;
