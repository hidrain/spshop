import { ProductType } from '../model/productType';
import { fetchProducts} from './actionCreators';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ProductsState {
    products: ProductType[],
    isLoading: boolean,
    error: string,
}

const initialState: ProductsState = {
    products: [],
    isLoading: false,
    error: '',
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<ProductType[]>) => {
            state.isLoading = false
            state.error = ''
            state.products = action.payload
        },
        [fetchProducts.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default productsSlice.reducer