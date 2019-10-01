import React from 'react';
import { IntroHeaderContainer, IntroTextContainer, IntroTitle, IntroSub, LinkContainer, LogoLink, LogoImg, SocialLogo } from './style.js';
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
                        <LogoLink>
                            <a href='https://github.com/alexander215' target="_blank" >
                                <SocialLogo img src={github} alt='GitHub Logo'></SocialLogo>
                            </a>
                        </LogoLink>
                        <LogoLink>
                            <a href='https://www.linkedin.com/in/alexhoskinson/' target='_blank'>
                                
                                <SocialLogo img src={linkedin} alt='LinkedIn Logo'></SocialLogo>
                            </a>
                        </LogoLink>

                        
                    </LinkContainer>
                </IntroTextContainer>
        </IntroHeaderContainer>
    )

}

export default IntroHeader;