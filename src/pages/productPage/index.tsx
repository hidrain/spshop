import CartBlock from "widgets/cartBlock";
import ProductBlockById from "widgets/productBlockById";
import { Wrapper } from "./style";

const ProductPage = () => {
    return (
        <Wrapper>
            <ProductBlockById />
            <CartBlock />
        </Wrapper>
    )
};

export default ProductPage