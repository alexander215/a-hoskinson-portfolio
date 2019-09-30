import styled from 'styled-components'
import { deviceSize } from '../App/device.js'

export const IntroHeaderContainer = styled.div`
    height: 90vh;
    background-color: #F9DC24;
    color: black;
    margin: 0;
    font-size: 6rem;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
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

    }
    @media ${deviceSize.laptop}{

    }
    @media ${deviceSize.laptopL}{

    }
    @media ${deviceSize.desktop}{

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
    @media ${deviceSize.mobileS}{

    }
    
    @media ${deviceSize.mobileM} {
        
    }
    
    @media ${deviceSize.mobileL}{
        
    }
    @media ${deviceSize.tablet}{

    }
    @media ${deviceSize.laptop}{

    }
    @media ${deviceSize.laptopL}{

    }
    @media ${deviceSize.desktop}{

    }
`

export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2%;

`
// margin: 100 0 0 0;