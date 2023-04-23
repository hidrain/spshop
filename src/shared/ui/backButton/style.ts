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
`