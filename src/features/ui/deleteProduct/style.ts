import styled from "styled-components"

interface ButtonProps  {
    count: number
}

export const DeleteButton = styled.button<ButtonProps>`
    display: grid;
    border: none;
    background: none;
    align-items: center;
    cursor: pointer;

    &:hover svg path{
        fill: #3366FF;
    }
`