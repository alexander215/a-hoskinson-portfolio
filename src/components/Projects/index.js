import React from 'react';
import { ProjectsContainer, ProjectsTextContainer, ProjectCardContainer, ProjectCard, ProjectCardTitle, ProjectLink, LinkContainer } from './style';
import { SectionHeaderBlack } from '../App/style';


const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsTextContainer>
                <SectionHeaderBlack>
                    {/* My Projects: */}
                    Favorite Projects:
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
                        <LinkContainer>
                            <ProjectLink>
                                <a href='https://github.com/alexander215/lafpc-food-dashboard'>See the GitHub repo.</a>
                            </ProjectLink>
                            <ProjectLink>
                                <a href='https://lafpc-food-dashboard.firebaseapp.com/'>Visit the dashboard.</a>
                            </ProjectLink>
                        </LinkContainer>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCardTitle>
                            People Behind the Projects
                        </ProjectCardTitle>
                            Full-stack React app that allows early-stage developers to share projects and feedback.
                        <ProjectLink>
                            <a href='https://github.com/alexander215/frontend-dev-social-network'>Test your profile.</a>
                        </ProjectLink>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCardTitle>
                            Escape Route
                        </ProjectCardTitle>
                            A trip-planning CRUD app built on MongoDB, Express, and Node.js.
                        <ProjectLink>
                            <a href='https://github.com/alexander215/Travel-CRUD-Project'>Plan your trip.</a>
                        </ProjectLink>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCardTitle>
                            Histor-ivia
                        </ProjectCardTitle>
                            A multiple-choice trivia game built in JavaScript.
                        <ProjectLink>
                            <a href='https://github.com/alexander215/trivia-game'>Test your knowledge.</a>
                        </ProjectLink>
                    </ProjectCard>
                </ProjectCardContainer>
            </ProjectsTextContainer>
        </ProjectsContainer>
        
    )
}

export default Projects;