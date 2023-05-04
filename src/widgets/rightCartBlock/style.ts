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