import React from 'react';
import { SectionHeaderYellow } from '../App/style';
import { EducationContainer, EducationTextContainer, EducationItemContainer, EducationItemTitle, EducationSchool } from './style';


const Education = () => {
    return (
        <EducationContainer id="education">
            <EducationTextContainer>
                <SectionHeaderYellow>
                    Education:
                </SectionHeaderYellow>
                    <EducationItemContainer>
                        <EducationItemTitle>
                            Software Engineering Immersive Program
                        </EducationItemTitle>
                        <EducationSchool>
                            General Assembly
                        </EducationSchool>
                            Los Angeles, CA: 2019
                    </EducationItemContainer>
                    <EducationItemContainer>
                        <EducationItemTitle>
                            M.B.A. – Business Administration
                        </EducationItemTitle>
                        <EducationSchool>
                            Corvinus University of Budapest
                        </EducationSchool>
                            Budapest, Hungary: 2014
                    </EducationItemContainer>
                    <EducationItemContainer>
                        <EducationItemTitle>
                            B.S. - Business Administration
                        </EducationItemTitle>
                        <EducationSchool>
                            University of Colorado at Boulder
                        </EducationSchool>
                            Boulder, CO: 2008
                    </EducationItemContainer>
                    <EducationItemContainer>
                        <EducationItemTitle>
                            Semester Abroad Program
                        </EducationItemTitle>
                        <EducationSchool>
                            Vrije Universiteit Brussel – Vesalius College
                        </EducationSchool>
                            Brussels, Belgium: 2007
                    </EducationItemContainer>
            </EducationTextContainer>
        </EducationContainer>
    )
}

export default Education;