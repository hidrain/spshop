import { ProductType } from './../../../entities/product/model/productType';
import { fetchProducts} from './actionCreators';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
    users: ProductType[],
    isLoading: boolean,
    error: string,
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const ProductSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<ProductType[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
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

export default ProductSlice.reducer