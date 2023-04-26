import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    align-content: center;
    justify-items: center;
    height: calc(100vh - 81px);
    margin: 0 auto;
    overflow: hidden;

    & img {
        width: 120px;
        height: 120px;
    }
`