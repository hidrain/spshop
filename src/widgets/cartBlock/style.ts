import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    width: 410px;
    border-left: 1px solid #CFCFCF;

    @media (max-width: 768px) {
        display: none
    }
`
export const CartWrapper = styled.div`
    display: grid;
    border-bottom: 1px solid #CFCFCF;

    & p {
        font-weight: ${props => props.theme.weight.bold};
        font-size: ${props => props.theme.size.secondary};
        line-height: 21.09px;
        padding: 40px;
        padding-bottom: 30px;
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