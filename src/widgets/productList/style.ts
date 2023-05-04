import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(3,1fr);
    padding: 60px 0; 
    gap: 50px 70px;
    justify-items: center;
    justify-self: center;
    align-content: start;
}
    @media (max-width: 1300px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1,1fr);
    }
`