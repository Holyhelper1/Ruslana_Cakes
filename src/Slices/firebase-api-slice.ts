import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth } from "firebase/auth";

const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;

export interface IFirestoreField {
  stringValue: string;
  integerValue: number;
}

export interface IFirestoreDocument {
  name: string;
  fields: {
    Image: {
      stringValue: string;
    };
    Price: {
      integerValue: number;
    };
    Description: {
      stringValue: string;
    };
  };
  createTime: string;
  updateTime: string;
  isEditingText?: boolean;
  isEditingImage?: boolean;
  isEditingPrice?: boolean;
}

export interface ICakesResponse {
  documents: IFirestoreDocument[];
}

export interface ICake {
  id: string;
  Image: string;
  Description: string;
  Price: number;
}

const auth = getAuth();

export const firebaseApiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const user = auth.currentUser;
    let token = "";
    if (user) {
      token = await user.getIdToken();
    }

    const headers = new Headers();
    headers.set("Authorization", `Bearer ${token}`);

    const result = await fetchBaseQuery({
      baseUrl: `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/`,
    })(args, api, { ...extraOptions, headers });

    return result;
  },
  endpoints(builder) {
    return {
      fetchCakes: builder.query<ICakesResponse, void>({
        query() {
          return "cakes";
        },
      }),
      fetchBento: builder.query<ICakesResponse, void>({
        query() {
          return "bento";
        },
      }),
      fetchCupcakes: builder.query<ICakesResponse, void>({
        query() {
          return "cupcake";
        },
      }),
      createCake: builder.mutation<ICake, Partial<ICake>>({
        query(cake) {
          return {
            url: "cakes",
            method: "POST",
            body: { ...cake },
          };
        },
      }),
      createBento: builder.mutation<ICake, Partial<ICake>>({
        query(bento) {
          return {
            url: "bento",
            method: "POST",
            body: { ...bento },
          };
        },
      }),
      createCupcake: builder.mutation<ICake, Partial<ICake> & { id: string }>({
        query(cupcake) {
          return {
            url: "cupcake",
            method: "POST",
            body: { ...cupcake },
          };
        },
      }),

      updateCake: builder.mutation<
        ICake,
        { id: string; fields: IFirestoreDocument["fields"] }
      >({
        query({ id, fields }) {
          return {
            url: `cakes/${id}`,
            method: "PATCH",
            body: { fields },
          };
        },
      }),

      updateBento: builder.mutation<
        ICake,
        { id: string; fields: IFirestoreDocument["fields"] }
      >({
        query({ id, fields }) {
          return {
            url: `bento/${id}`,
            method: "PATCH",
            body: { fields },
          };
        },
      }),
      updateCupcake: builder.mutation<
        ICake,
        { id: string; fields: IFirestoreDocument["fields"] }
      >({
        query({ id, fields }) {
          return {
            url: `cupcake/${id}`,
            method: "PATCH",
            body: { fields },
          };
        },
      }),
      deleteCake: builder.mutation<void, string>({
        query(id) {
          return {
            url: `cakes/${id}`,
            method: "DELETE",
          };
        },
      }),
      deleteBento: builder.mutation<void, string>({
        query(id) {
          return {
            url: `bento/${id}`,
            method: "DELETE",
          };
        },
      }),
      deleteCupcake: builder.mutation<void, string>({
        query(id) {
          return {
            url: `cupcake/${id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchCakesQuery,
  useFetchBentoQuery,
  useFetchCupcakesQuery,
  useUpdateCakeMutation,
  useUpdateBentoMutation,
  useUpdateCupcakeMutation,
  useCreateCakeMutation,
  useCreateBentoMutation,
  useCreateCupcakeMutation,
  useDeleteCakeMutation,
  useDeleteBentoMutation,
  useDeleteCupcakeMutation,
} = firebaseApiSlice;
