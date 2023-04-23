import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductType } from '../model/productType';

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ProductType[]>(`https://643c3f2e70ea0e6602a4e770.mockapi.io/items`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Error: can't get products")
        }
    }
)