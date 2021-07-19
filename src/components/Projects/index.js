import React from 'react';
import { ProjectsContainer, ProjectsTextContainer, ProjectCardContainer, ProjectCard, ProjectCardTitle, ProjectLink } from './style';
import { SectionHeaderBlack } from '../App/style';
import * as ROUTES from '../../constants/routes';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsTextContainer>
                <SectionHeaderBlack>
                    {/* My Projects: */}
                    Favorite Projects:
                </SectionHeaderBlack>
                    <ProjectCardContainer>
                        <ProjectCard>
                        <Link to={ROUTES.EMAIL_DEVELOPER_CASE_STUDY}>
                            <ProjectCardTitle>
                                Dynamic, Custom Email Template Creation &amp; Maintenance
                            </ProjectCardTitle>
                                I created and maintained email templates that were dynamically populated with custom content for a significant number of daily sends.
                                <ProjectLink>
                                    <Link to={ROUTES.EMAIL_DEVELOPER_CASE_STUDY}>Learn More</Link>
                                </ProjectLink>
                        </Link>
                    </ProjectCard>
                    <ProjectCard>
                        <Link to={ROUTES.FORM_CAPTURE_MODAL_CASE_STUDY}>
                            <ProjectCardTitle>
                                Integration of Form Capture with 3rd-Party Tool
                            </ProjectCardTitle>
                                I designed, built, and maintained the integration of an external tool that captured email/sms sign up information on StackCommerce’s multiple online shops.
                                <ProjectLink>
                                    <Link to={ROUTES.FORM_CAPTURE_MODAL_CASE_STUDY}>Learn More</Link>
                                </ProjectLink>
                        </Link>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectCardTitle>
                            LA Food Policy Council Dashboard
                        </ProjectCardTitle>
                            "Crowd Favorite Award" winner at the General Assembly Social Impact Hackathon.

                            {/* This project was part of the GA Social Impact Hackathon in September, 2019. Four teams of UX Designers and Software Engineers partnered up to create a Food System Dashboard for LA Food Policy Council to better serve their community in the name of "Good Food For All."

                            In three days, we planned, designed, built, and deployed this interactive dashboard as a React web app. 

                        Technologies used:  HTML, CSS/Styled Components, React, Node.js, Google Firebase/Realtime Database, Google Drive, and Figma. */}
                            <ProjectLink>
                                <a href='https://github.com/alexander215/lafpc-food-dashboard'>See the GitHub repo.</a>
                            </ProjectLink>
                            <ProjectLink>
                                <a href='https://lafpc-food-dashboard.firebaseapp.com/'>Visit the dashboard.</a>
                            </ProjectLink>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCardTitle>
                            Histor-ivia
                        </ProjectCardTitle>
                            A multiple-choice trivia game built in JavaScript.
                            <ProjectLink>
                                <a href='https://github.com/alexander215/trivia-game'>See the GitHub repo.</a>
                            </ProjectLink>
                            <ProjectLink>
                                <a href='https://alexander215.github.io/trivia-game/'>Test your knowledge.</a>
                            </ProjectLink>
                    </ProjectCard>
                </ProjectCardContainer>
            </ProjectsTextContainer>
        </ProjectsContainer>
        
    )
}

export default Projects;