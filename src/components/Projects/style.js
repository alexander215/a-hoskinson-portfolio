import styled from 'styled-components'
import { deviceSize } from '../App/device.js'

export const ProjectsContainer = styled.div`
    background-color: #F9DC24;
    clip-path: polygon(50% 16%,100% 0,100% 85%,50% 100%,0% 85%,0 0);
    // padding: 10%;
`

export const ProjectsTextContainer = styled.div`
    max-width: 70%;
    margin: 5% auto 5% auto;
    padding: 10% 0; 
    // background-color: red;
`

export const SectionHeaderBlack = styled.h1`
    margin: 0;
    color: black;
    text-align: left;
    text-transform: uppercase;
    // text-decoration: underline;
    border-bottom: 3px solid;
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
    @media ${deviceSize.tablet}{
        width: 20%;

    }

`

export const ProjectCardTitle = styled.h3`
    margin: 0 0 5% 0;
    color: #F9DC24;
    text-decoration: underline;
`