import styled from "styled-components"

export const Ellipse = styled.div`
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
`