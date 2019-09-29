import React from 'react';
import { ExperienceContainer, ExperienceTextContainer, ExperienceItemContainer, ExperienceItemTitle, ExperienceJobTitle } from './style';
import { SectionHeaderBlack } from '../App/style';


const Experience = () => {
    return (
        <ExperienceContainer>
            <ExperienceTextContainer>
                <SectionHeaderBlack>
                    Experience:
                </SectionHeaderBlack>
                <ExperienceItemContainer>
                    <ExperienceItemTitle>
                        Marketing and Communications Manager 
                    </ExperienceItemTitle>
                    <ExperienceJobTitle>
                        BOMA/GLA, Los Angeles, CA: 2018 – 2019
                    </ExperienceJobTitle>
                    Managed strategy, creation, and distribution of marketing activities of a trade association.
                </ExperienceItemContainer>
            </ExperienceTextContainer>
        </ExperienceContainer>
    )
}

export default Experience;