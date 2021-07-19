import styled from 'styled-components'
import { deviceSize } from '../App/device.js'

export const ProjectsContainer = styled.div`
    background-color: #F9DC24;
    clip-path: polygon(50% 16%,100% 0,100% 85%,50% 100%,0% 85%,0 0);
    @media ${deviceSize.mobileS}{
        clip-path: polygon(50% 6%,100% 0,100% 95%,50% 100%,0% 95%,0 0);
        // clip-path: polygon(50% 6%,100% 0,100% 85%,50% 91%,0% 85%,0 0);
        

    }
`

export const ProjectsTextContainer = styled.div`
    max-width: 70%;
    margin: 5% auto 5% auto;
    padding: 10% 0; 
    @media ${deviceSize.mobileS}{
        padding: 30% 0 15% 0;

    }
    
    @media ${deviceSize.mobileM} {

    }
    
    @media ${deviceSize.mobileL}{

    }
    @media ${deviceSize.tablet}{
        padding: 15% 0 7% 0;

    }
    @media ${deviceSize.laptop}{

    }
    @media ${deviceSize.laptopL}{

    }
    @media ${deviceSize.desktop}{

    }
`

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    

`
export const ProjectCard = styled.div`
    background-color: black;
    width: 50%;
    color: white;
    padding: 5%;
    margin: 10% auto;
    text-align: left;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);
    border-radius: 25px;
    @media ${deviceSize.mobileS}{
        width: 90%;
        
    }
    
    @media ${deviceSize.mobileM} {
        
    }
    
    @media ${deviceSize.mobileL}{
        
    }
    @media ${deviceSize.tablet}{
        margin: 10% auto 0 auto;
        // width: 20%;
        width: 35%;
        

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

export const ProjectCardTitle = styled.h3`
    margin: 0 0 5% 0;
    color: #F9DC24;
    text-decoration: underline;
    text-align: center;
`

export const ProjectLink = styled.div`
    text-align: center;
    margin: 5% 0 0 0;
    a:link {
        color: #F9F9F3;
    }
    a:visited {
        color: #F9F9F3;
        }
    a:hover {
        text-decoration: none;
        color: #F9DC24;
        text-transform: uppercase;
        }
`