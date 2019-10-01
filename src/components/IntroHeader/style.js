import styled from 'styled-components'
import { deviceSize } from '../App/device.js'

export const IntroHeaderContainer = styled.div`
    height: 90vh;
    
    background-color: #F9DC24;
    color: black;
    margin: 0;
    font-size: 6rem;
    // clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    @media ${deviceSize.mobileS}{
        font-size: 3.5rem;
        clip-path: polygon(0 0, 100% 0, 100% 72vh, 0 100%);
        height: 80vh;
    }
    
    @media ${deviceSize.mobileM} {
        font-size: 4rem;
    }
    
    @media ${deviceSize.mobileL}{
        font-size: 5rem;
    }
    @media ${deviceSize.tablet}{
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
        height: 100vh;        
    }   
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
    line-height: 1.1;

`

export const IntroSub = styled.h3`
    margin: 0;
    color: black;
`

export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2% auto;
    max-width: 30%;
    img-height: 40px;
    @media ${deviceSize.tablet}{
        max-width: 30%;
    }
    @media ${deviceSize.laptop}{
        max-width: 20%;
    }
    
    `
export const LogoLink = styled.a`
    cursor: pointer;
    `
export const SocialLogo = styled.img`
        height: 25px;

        @media ${deviceSize.tablet}{
            height: 40px;
    }
`