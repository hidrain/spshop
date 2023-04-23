import styled from "styled-components"

export const Wrapper = styled.button`
    position: relative;
    border: none;
    background: none;
    width: fit-content;
`

export const Ellipse = styled.span`
    display: flex;
    width: 13px;
    height: 13px;
    border-radius: 30px;
    padding: 0;
    background-color: #3366FF;
    color: ${props => props.theme.color.white};
    font-size: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -5px;
    left: 17px;
`