import styled from 'styled-components'
import { deviceSize } from '../App/device.js'

export const ExperienceContainer = styled.div`
    background-color: #F9DC24;
    margin: 0;
    @media ${deviceSize.mobileS}{
        clip-path: polygon(20% 0%,80% 0%,100% 3%,100% 96%,80% 100%,20% 100%,0% 96%,0% 3%);
        
    }
    
    @media ${deviceSize.mobileM} {
        
    }
    
    @media ${deviceSize.mobileL}{
        
    }
    @media ${deviceSize.tablet}{
        clip-path: polygon(20% 0%,80% 0%,100% 10%,100% 90%,80% 100%,20% 100%,0% 90%,0% 10%);

    }
    @media ${deviceSize.laptop}{

    }
    @media ${deviceSize.laptopL}{

    }
    @media ${deviceSize.desktop}{

    }
    @media ${deviceSize.tablet}{

    }

    `
export const ExperienceTextContainer = styled.div`
    max-width: 70%;
    margin: 5% auto 5% auto;
    padding: 5% 0;
    color: black;
`

export const ExperienceItemContainer = styled.div`
    margin: 5%;
    text-align: left;

`

export const ExperienceItemTitle = styled.h3`
    margin: 1% 0;
    text-decoration: underline;
`
export const ExperienceCompany = styled.div`
    font-weight: 700;
`
export const ExperienceLocation = styled.div`
    font-style: italic;
`