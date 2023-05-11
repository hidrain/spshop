import { useSelector } from "react-redux";
import { selectCart } from "shared/api/cartSlice";
import Header from "widgets/header";
import ProductList from "widgets/productList";
import RightCartBlock from "widgets/rightCartBlock";
import { Wrapper } from './style'


const MainPage = () => {

    const { products } = useSelector(selectCart)

    return (
        <>
            <Header />
            <Wrapper>
                <ProductList />
                {products.length > 0 && <RightCartBlock />}
            </Wrapper>
        </>
    );
};

export default MainPage;