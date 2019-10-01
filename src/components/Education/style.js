import styled from 'styled-components';
import { deviceSize } from '../App/device.js'

export const EducationContainer = styled.div`
    margin: 0;
`
export const EducationTextContainer = styled.div`
    max-width: 70%;
    margin: 5% auto 5% auto;
`

export const EducationItemContainer = styled.div`
    margin: 5% 5% 10% 5%;
    // text-align: left;
    text-align: center;
    @media ${deviceSize.tablet}{
        margin: 5%; 
        }
`

export const EducationItemTitle = styled.h3`
    margin: 1% 0;
    color: #F9DC24;
    text-decoration: underline;
`
export const EducationSchool = styled.div`
    font-weight: 700;
    font-style: italic;
`