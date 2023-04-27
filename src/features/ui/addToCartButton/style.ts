import styled from "styled-components"

export const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 3px;
    padding: 0;
    background-color: #3366FF;
    margin-right: 15px;
    cursor: pointer;

    &:hover {
        background-color: #FFFFFF;
        box-shadow: 0 0 4px #3366FF;
    }
    &:hover svg path{
        fill: #3366FF;
    }
`