import React from 'react';
import { AboutContainer, SectionHeaderYellow, AboutHeadingText } from './style';

const About = () => {
    return (
        <AboutContainer>
            <SectionHeaderYellow>
                About
            </SectionHeaderYellow>
            <AboutHeadingText>
                Hi, I’m Alex - a full-stack developer with a passion for creating enjoyable React apps. 
                <br/>
                <br/>
                I have the heart of an explorer, and I spent much of the past decade living out of my comfort zone in different corners of Europe. I learned to love the challenges of life abroad, and I perfected the art of adapting to new situations. 
                <br/>
                <br/>
                That’s also what I love about programming. An impossible task is easy when broken down into a million simple steps, and the struggle is what makes the result so enjoyable.
            </AboutHeadingText>

        </AboutContainer>

    )
}

export default About;