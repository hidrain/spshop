import { ProductType } from "shared/model/productType";

export const calcTotalPrice = (products: ProductType[]) => {
    return products.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};