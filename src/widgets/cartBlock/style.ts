import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    width: 410px;
    border-left: 1px solid #CFCFCF;

    @media (max-width: 968px) {
        display: none
    }
`
export const CartWrapper = styled.div`
    display: grid;
    gap: 40px;
    border-bottom: 1px solid #CFCFCF;
    padding: 40px;

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