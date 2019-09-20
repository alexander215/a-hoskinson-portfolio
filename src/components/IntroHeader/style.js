import styled from 'styled-components'

export const IntroHeaderContainer = styled.div`
    height: 90vh;
    background-color: #F9DC24;
    color: black;
    margin: 0;
    font-size: 6rem;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    
`
export const IntroTextContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

`
export const IntroTitle = styled.h1`
    padding: .5rem 0 0 0;
    margin: 0;
`

export const IntroSub = styled.h3`
    margin: 0;
    color: black;
`
// margin: 100 0 0 0;