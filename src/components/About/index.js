import React from 'react';
import { AboutTextContainer, AboutHeadingText, AboutContainer } from './style';
import { SectionHeaderYellow } from '../App/style';

const About = () => {
    return (
        <AboutContainer id="about">
            <AboutTextContainer>
                <SectionHeaderYellow>
                    About Me:
                </SectionHeaderYellow>
                <AboutHeadingText>
                    Hi, <b>I’m Alex</b> - a full-stack developer with a passion for creating enjoyable React apps. 
                    <br/>
                    <br/>
                    I have the heart of an explorer, and I spent much of the past decade living out of my comfort zone in different corners of Europe. I learned to love the challenges of life abroad, and I perfected the art of adapting to new situations. 
                    <br/>
                    <br/>
                    That’s also what I love about programming. An impossible task is easy when broken down into a million simple steps, and the struggle is what makes the result so enjoyable.
                </AboutHeadingText>
            </AboutTextContainer>
        </AboutContainer>

    )
}

export default About;