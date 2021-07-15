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
                    Hi, <b>I’m Alex</b> - I’m a design-minded software engineer who lives at the intersection of humans and technology. 
                    <br/>
                    <br/>
                    My interests keep me closer to front-end development, but I stick with my full-stack mindset because I believe success comes with understanding the whole picture. Much of my experience has been around React apps, Rails apps, email development, and integrating 3rd party tools.
                    <br/>
                    <br/>
                    Prior to my career pivot into the engineering world in 2019, I spent years working in various marketing roles where I was heavily focused on UX/UI Design and was often tasked with managing &amp; maintaining digital properties.
                </AboutHeadingText>
            </AboutTextContainer>
        </AboutContainer>

    )
}

export default About;