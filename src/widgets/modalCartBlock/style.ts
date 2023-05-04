import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    width: 100vw;
    justify-items: center;
    overflow: scroll;
    padding-top: 40px;
    position: relative;
    grid-template-rows: max-content 1px max-content;

    @media (min-width: 968px) {
        display: none
    }
`