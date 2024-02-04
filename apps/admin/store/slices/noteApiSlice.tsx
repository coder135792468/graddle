import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const generateQueryStr = (baseString: string, query: Object): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

  return queryString;
};

export const notesApi = createApi({
  reducerPath: 'notes-api',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8080/`,
  }),

  endpoints: (builder) => ({
    getAllNotes: builder.query<any, Object>({
      // <Type of data the call will return, Type of parameter being passed to the query function>
      query: (queryParams) => {
        const queryStr = generateQueryStr('library?', queryParams);

        return { url: queryStr };
      },
    }),
    getCurrNote: builder.query<any, Object>({
      // <Type of data the call will return, Type of parameter being passed to the query function>
      query: (id) => {
        return { url: 'library/' + id };
      },
    }),
  }),
});

export const { useGetAllNotesQuery, useGetCurrNoteQuery } = notesApi;
