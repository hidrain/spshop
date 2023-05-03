import styled from "styled-components"

interface ButtonProps  {
    count: number
    isDisabled: boolean
}

export const MinusButton = styled.button<ButtonProps>`
    display: grid;
    border: none;
    background: none;
    align-items: center;
    cursor: pointer;

    &:hover svg path{
        fill: #3366FF;
    }
    & svg path{
        fill: ${(props) => (props.isDisabled && '#c2c2c2')};
    }
`