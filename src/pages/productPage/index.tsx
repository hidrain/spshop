import { useSelector } from "react-redux";
import { selectCart } from "shared/api/cartSlice";
import Header from "widgets/header";
import ProductBlockById from "widgets/productBlockById";
import RightCartBlock from "widgets/rightCartBlock";
import { Wrapper } from "./style";

const ProductPage = () => {

    const { products } = useSelector(selectCart)

    return (
        <>
            <Header />
            <Wrapper>
                <ProductBlockById />
                {products.length > 0 && <RightCartBlock />}
            </Wrapper>
        </>
    )
};

export default ProductPage