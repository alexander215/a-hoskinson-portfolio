import React from 'react';
import { ProjectsContainer, ProjectsTextContainer, SectionHeaderBlack, ProjectCardContainer, ProjectCard, ProjectCardTitle } from './style';


const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsTextContainer>
                <SectionHeaderBlack>
                    My Projects:
                </SectionHeaderBlack>
                <ProjectCardContainer>
                    <ProjectCard>
                        <ProjectCardTitle>
                            LA Food Policy Council Dashboard
                        </ProjectCardTitle>
                            "Crowd Favorite Award" winner at the General Assembly Social Impact Hackathon.

                            {/* This project was part of the GA Social Impact Hackathon in September, 2019. Four teams of UX Designers and Software Engineers partnered up to create a Food System Dashboard for LA Food Policy Council to better serve their community in the name of "Good Food For All."

                            In three days, we planned, designed, built, and deployed this interactive dashboard as a React web app. 

                            Technologies used:  HTML, CSS/Styled Components, React, Node.js, Google Firebase/Realtime Database, Google Drive, and Figma. */}
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCardTitle>
                            Project 2
                        </ProjectCardTitle>
                            This is my second project
                    </ProjectCard>
                </ProjectCardContainer>
            </ProjectsTextContainer>
        </ProjectsContainer>
        
    )
}

export default Projects;