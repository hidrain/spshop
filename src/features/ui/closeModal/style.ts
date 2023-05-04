import styled from "styled-components"

export const CloseModalButton = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    border: none;
    background: none;
    cursor: pointer;

    & svg  {
        width: 22px;
        height: 22px;
        & path {
            fill: #000000;
        }
    }

    &:hover svg path {
        fill: #3366FF;
    }
`