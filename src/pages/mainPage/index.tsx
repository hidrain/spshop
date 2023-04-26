import CartBlock from "widgets/cartBlock";
import ProductList from "widgets/productList";
import { Wrapper } from './style'


const MainPage = () => {
    return (
        <Wrapper>
            <ProductList />
            <CartBlock />
        </Wrapper>
    );
};

export default MainPage;