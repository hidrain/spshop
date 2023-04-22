import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ProductType } from 'entities/product/model/productType';

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://643c3f2e70ea0e6602a4e770.mockapi.io' }),
    endpoints: (build) => ({
        fetchAllProducts: build.query<ProductType[], number>({
            query: (limit: number = 6) => ({
                url: '/items',
                params: { _limit: limit }
            }),
        }),
    })
})