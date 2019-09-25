import React from 'react';
import { SectionHeaderYellow } from '../App/style';
import { SkillsContainer, SkillsTextContainer, SkillsList, SkillsListItem } from './style';


const Skills = () => {
    return (
        <SkillsContainer>
            <SkillsTextContainer>
                <SectionHeaderYellow>
                    Technical Skills:

                </SectionHeaderYellow>
                <SkillsList>
                    <SkillsListItem>
                        HTML5
                    </SkillsListItem>
                    <SkillsListItem>
                        CSS3
                    </SkillsListItem>
                    <SkillsListItem>
                        JavaScript ES6
                    </SkillsListItem>
                    <SkillsListItem>
                        Git
                    </SkillsListItem>
                    <SkillsListItem>
                        GitHub
                    </SkillsListItem>
                    <SkillsListItem>
                        NodeJS
                    </SkillsListItem>
                    <SkillsListItem>
                        ReactJS
                    </SkillsListItem>
                    <SkillsListItem>
                        Express
                    </SkillsListItem>
                    <SkillsListItem>
                        Python
                    </SkillsListItem>
                    <SkillsListItem>
                        MongoDB                
                    </SkillsListItem>
                    <SkillsListItem>
                        PostgreSQL                                
                    </SkillsListItem>
                    <SkillsListItem>
                        Flask                                
                    </SkillsListItem>
                    <SkillsListItem>
                        Sass
                    </SkillsListItem>
                </SkillsList>
            
                
                

            </SkillsTextContainer>
        </SkillsContainer>
        
    )
}
 export default Skills;