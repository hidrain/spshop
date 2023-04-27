import { useSelector } from "react-redux";
import { selectCart } from "shared/api/cartSlice";
import CartBlock from "widgets/cartBlock";
import ProductList from "widgets/productList";
import { Wrapper } from './style'


const MainPage = () => {

    const { products } = useSelector(selectCart)

    return (
        <Wrapper>
            <ProductList />
            {products.length > 0 && <CartBlock />}
        </Wrapper>
    );
};

export default MainPage;