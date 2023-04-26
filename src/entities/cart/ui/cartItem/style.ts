import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr 30px;
    height: 100px;
    padding: 0 40px;
`
export const ProductImg = styled.div` 
    display: grid;  
    align-items: center;
    justify-content: center;
 
    & img {
        height: 51px;
    }
`
export const ProductInfo = styled.div`
    display: grid;
    grid-template-rows: 32px 1fr;
    gap: 15px;
`
export const ProductCalc = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    height: max-content;
`
export const ProductCounter = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-right: 25px;
    justify-items: center;
    align-items: center;
`




