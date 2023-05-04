import styled from "styled-components"

export const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content;
    width: 100%;
    height: 81px;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px solid #CFCFCF;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 10;

    & img {
        width: 89px;
        z-index: 20;
    }
`

interface BurgerCartProps {
    click: boolean
}
export const BurgerCart = styled.div<BurgerCartProps>`
    @media (min-width: 1024px) {
        display: none
}

    @media (max-width: 1024px) {
        position: fixed;
        top: 81px;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        z-index: 50;
        background-color: #ffffff;
        display: grid;
        /* position: relative; */

        transform: ${props => props.click ? 'translateY(0)' : 'translateY(1000%)'};
        transition: all 0.3 easy;
        flex-direction: column;
        justify-content: center;
    }
`



