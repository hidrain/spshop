import { useSelector } from "react-redux";
import { selectCart } from "shared/api/cartSlice";
import ProductList from "widgets/productList";
import RightCartBlock from "widgets/rightCartBlock";
import { Wrapper } from './style'


const MainPage = () => {

    const { products } = useSelector(selectCart)

    return (
        <Wrapper>
            <ProductList />
            {products.length > 0 && <RightCartBlock />}
        </Wrapper>
    );
};

export default MainPage;