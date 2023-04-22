import styled from "styled-components"

export const CardWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    width: 250px;
    height: 300px;
    border: 1px solid #E7E7E7;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`
export const ProductImg = styled.div`
    height: 130px;
    width: 228px; 
    justify-self: center;  
    margin: 29px 0;
    & img {
        width: 100%;
        height: 100%;
    }
`
export const ProductInfo = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    margin: 0 15px;

    & p {
        grid-column: 1/3;
        padding-bottom: 12px;
        font-weight: ${props => props.theme.weight.bold};
    }
`


