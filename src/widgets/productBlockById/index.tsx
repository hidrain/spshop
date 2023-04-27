import ProductCard from 'entities/product/ui/productCard'
import AddToCartButton from 'features/ui/addToCartButton'
import { useParams } from 'react-router-dom'
import { useFetchProductByIdQuery } from 'shared/api/productService'
import { Wrapper } from './style'
import { skipToken } from '@reduxjs/toolkit/query/react'
import BackButton from 'shared/ui/backButton'

type Props = {}

const ProductBlockById = (props: Props) => {

    const { id }: { id?: number } = useParams()

    const { data: product } = useFetchProductByIdQuery(id ?? skipToken)

    return (
        <Wrapper>
            {product &&
                <>
                    <BackButton />
                    <ProductCard product={product} key={product.id} children={<AddToCartButton item={product} />} />
                </>
            }
        </Wrapper>
    )
}

export default ProductBlockById