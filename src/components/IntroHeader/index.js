import React from 'react';
import { IntroHeaderContainer, IntroTextContainer, IntroTitle, IntroSub, LinkContainer } from './style.js';
import github from './github-logo.png';
import linkedin from './LinkedInLogoBlack.png';

const IntroHeader = () => {
    return (
        <IntroHeaderContainer>
                <IntroTextContainer>
                    <IntroTitle>
                        Alexander Hoskinson 
                    </IntroTitle>
                    <IntroSub>
                        Full-Stack Web Developer
                    </IntroSub>
                    <LinkContainer>
                        <img src={github} alt="GitHub Logo" height='50px'/>
                        <img src={linkedin} alt="LinkedIn logo" height='50px'/>
                        
                    </LinkContainer>
                </IntroTextContainer>
        </IntroHeaderContainer>
    )

}

export default IntroHeader;