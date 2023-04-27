import { ProductType } from '../model/productType';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from './store';
import { calcTotalPrice } from 'shared/lib/calcTotalPrice';

interface CartState {
    products: ProductType[],
    subTotalPrice: number,
    totalPrice: number,
}

const initialState: CartState = {
    products: [],
    subTotalPrice: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductType>) => {
            const findItem = state.products.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.products.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = calcTotalPrice(state.products)
        },
        plusProduct: (state, action: PayloadAction<any>) => {
            const findItem = state.products.find((obj: any) => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            }
            state.totalPrice = calcTotalPrice(state.products)
        },
        minusProduct: (state, action: PayloadAction<any>) => {
            const findItem = state.products.find((obj: any) => obj.id === action.payload.id)
            if (findItem && findItem.count > 1) {
                findItem.count--
            }
            state.totalPrice = calcTotalPrice(state.products)
        },
        removeProduct: (state, action: PayloadAction<any>) => {
            state.products = state.products.filter((obj: any) => obj.id !== action.payload.id)
            state.totalPrice = calcTotalPrice(state.products)
        },
        clearProducts: (state) => {
            state.products = []
            state.totalPrice = 0
        },
    },
})
export const selectCart = (state: RootState) => state.cart

export const {addProduct, plusProduct, minusProduct, removeProduct, clearProducts} = cartSlice.actions
export default cartSlice.reducer