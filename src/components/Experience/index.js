import React from 'react';
import { ExperienceContainer, ExperienceTextContainer, ExperienceItemContainer, ExperienceItemTitle, ExperienceLocation, ExperienceCompany } from './style';
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
                    <ExperienceCompany>
                        BOMA/GLA
                    </ExperienceCompany>
                    <ExperienceLocation>
                        Los Angeles, CA: 2018 – 2019
                    </ExperienceLocation>
                        Managed strategy, creation, and distribution of marketing activities of a trade association.
                </ExperienceItemContainer>
                <ExperienceItemContainer>
                    <ExperienceItemTitle>
                        PR Specialist
                    </ExperienceItemTitle>
                    <ExperienceCompany>
                        NNG
                    </ExperienceCompany>
                    <ExperienceLocation>
                        Budapest, Hungary: 2016 – 2017
                    </ExperienceLocation>
                        Website management and brand-building activities for a B2B, automotive software company.
                </ExperienceItemContainer>
                <ExperienceItemContainer>
                    <ExperienceItemTitle>
                        Video Editor
                    </ExperienceItemTitle>
                    <ExperienceCompany>
                        Zoomin.TV
                    </ExperienceCompany>
                    <ExperienceLocation>
                        Amsterdam, Netherlands: 2015 – 2016
                    </ExperienceLocation>
                        Identified, produced, and edited engaging online video content to be sold to partner companies. 
                </ExperienceItemContainer>
                <ExperienceItemContainer>
                    <ExperienceItemTitle>
                        Content Marketing Writer/Strategist
                    </ExperienceItemTitle>
                    <ExperienceCompany>
                        Freelance
                    </ExperienceCompany>
                    <ExperienceLocation>
                        2014 – 2019
                    </ExperienceLocation>
                        Created digital content and marketing materials supporting business aims of clients in varying industries. 
                </ExperienceItemContainer>
                <ExperienceItemContainer>
                    <ExperienceItemTitle>
                        English Teacher
                    </ExperienceItemTitle>
                    <ExperienceCompany>
                        Hungarian High Schools
                    </ExperienceCompany>
                    <ExperienceLocation>
                        Hungary: 2010 – 2012
                    </ExperienceLocation>
                        Taught all aspects of the English language to grades 9 through 12.
                </ExperienceItemContainer>
            </ExperienceTextContainer>
        </ExperienceContainer>
    )
}

export default Experience;