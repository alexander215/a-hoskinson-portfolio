import React from 'react';
import { IntroHeaderContainer, IntroTextContainer, IntroTitle, IntroSub } from './style.js';

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
                </IntroTextContainer>
                
        </IntroHeaderContainer>
    )

}

export default IntroHeader;