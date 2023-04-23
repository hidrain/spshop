import ProductCard from 'entities/product/ui/productCard'
import CartButton from 'features/ui/cartButton'
import { useParams } from 'react-router-dom'
import { productAPI } from 'shared/api/productService'
import { Wrapper } from './style'
import { skipToken } from '@reduxjs/toolkit/query/react'
import BackButton from 'shared/ui/backButton'

type Props = {}

const ProductBlockById = (props: Props) => {

    const { id }: { id?: number } = useParams()

    const { data: product } = productAPI.useFetchProductByIdQuery(id ?? skipToken)

    return (
        <Wrapper>
            {product &&
                <>
                    <BackButton />
                    <ProductCard product={product} key={product.id} children={<CartButton />} />
                </>
            }
        </Wrapper>
    )
}

export default ProductBlockById