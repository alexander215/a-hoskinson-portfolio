import styled from 'styled-components'
import { deviceSize } from '../App/device.js'

export const ExperienceContainer = styled.div`
    background-color: #F9DC24;
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    margin: 0;
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
    // margin: 0 0 5% 0;
    // color: #F9DC24;
    text-decoration: underline;
`
export const ExperienceJobTitle = styled.div`
    font-weight: 700;
`