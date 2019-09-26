import React from 'react';
import { ProjectsContainer, ProjectsTextContainer, ProjectCardContainer, ProjectCard, ProjectCardTitle, ProjectLink } from './style';
import { SectionHeaderBlack } from '../App/style';


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
                        <ProjectLink>
                            <a href='https://github.com/alexander215/lafpc-food-dashboard'>See the dashboard.</a>
                        </ProjectLink>
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