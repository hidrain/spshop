import styled from "styled-components"

export const CartWrapper = styled.div`
    display: grid;
    gap: 40px;
    padding: 40px;
    width: 410px;

    & p {
        font-weight: ${props => props.theme.weight.bold};
        font-size: ${props => props.theme.size.secondary};
        line-height: 21.09px;
    }

`
export const PriceWrapper = styled.div`
    display: grid;
    gap: 10px;
    padding: 40px;
    width: 410px;
    grid-template-rows: repeat(4,max-content);
    
    & div {
        display: inline-flex;
        justify-content: space-between;
    }
    & div:last-child {
        font-weight: ${props => props.theme.weight.bold};
        font-size: ${props => props.theme.size.secondary};
        line-height: ${props => props.theme.lineHeight.tetriary};
    }
`
export const Separater = styled.div`
    width: 100vw;
    border-bottom: 1px solid #CFCFCF;

`
