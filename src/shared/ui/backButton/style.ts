import styled from "styled-components"

export const Button = styled.button`
    border: none;
    border-radius: 3px;
    padding: 8px 30px;
    background-color: #3366FF;
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.size.primary};
    line-height: 24px;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
        background-color: #FFFFFF;
        box-shadow: 0 0 4px #3366FF;
        color: #3366FF;
    }
`