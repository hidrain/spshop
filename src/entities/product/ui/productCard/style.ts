import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
`
export const ProductImg = styled.div`
    border: 1px solid #D5D5D5;
    margin: 20px 0;
        & img {
            width: 100%;
            height: 100%;
        }
`
export const ProductInfo= styled.div`
    margin-bottom: 20px;
    & p {
        font-weight: ${props => props.theme.weight.bold};
        font-size: ${props => props.theme.size.tetriary};
        line-height: ${props => props.theme.lineHeight.secondary};
        padding-bottom: 5px;
    }  
`
export const PriceWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    & span {
        font-size: ${props => props.theme.size.tetriary};
        line-height: ${props => props.theme.lineHeight.secondary};
    }  
`




