import React from 'react';
import { CaseStudyContainer, CaseStudyIntroTextContainer, CaseStudyTitle, CaseStudySub, CSIntroNav, CSBodySection, CSBodyHeadingYellow, CSBodyCopyYellow, CSBodyCopyDark, CSBodyListDark } from '../style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import * as ROUTES from '../../../constants/routes';

const EmailDeveloperCaseStudy = () => {
  const thisPage = ROUTES.FORM_CAPTURE_MODAL_CASE_STUDY;

  return (
    <CaseStudyContainer>
            <CaseStudyIntroTextContainer>
                <CaseStudyTitle>
                    Integration of Form Capture with 3rd-Party Tool
                </CaseStudyTitle>
                <FontAwesomeIcon icon={faEnvelope} size='3x'/>
                <CaseStudySub>
                    I designed, built, and maintained the integration of an external tool that captured email/sms sign up information on StackCommerce’s multiple online shops.
                </CaseStudySub>
                <CSIntroNav>
                  Jump to a Section:
                  <ul>
                    <li><HashLink to={thisPage + "#background"}>Background</HashLink></li>
                    <li><HashLink to={thisPage + "#my-role"}>My Role</HashLink></li>
                    <li><HashLink to={thisPage + "#tech-used"}>Tech Used</HashLink></li>
                    <li><HashLink to={thisPage + "#view-live"}>View Live</HashLink></li>
                  </ul>
                </CSIntroNav>
            </CaseStudyIntroTextContainer>
            <CSBodySection>
              <div  className="dark-section" id="background">
                <div className="content-container">
                  <h2>
                    Background:
                  </h2>
                  <p>
                    StackCommerce builds and runs branded online shops for many different publishing companies. A major part of their marketing strategy revolves around email, and they use an external tool to launch a pop-up modal to new visitors to their site.
                    These modals have a customized appearance depending on the shop where they are displayed.
                    An additional project I worked on included adding SMS capture as another step to the flow.
                  </p>
                </div>
              </div>
            </CSBodySection>
            <CSBodySection>
              <div className="yellow-section" id="my-role">
                <div className="content-container">
                  <h2>
                    My Role:
                  </h2>
                  <p>
                    I was responsible for creating and maintaining the front end aspects of all of these modals. The 3rd-party tool uses an interface that was designed for people with less technical experience, but it does allow for custom CSS and JavaScript to be added in. I routinely had to find creative ways to hack solutions together that would satisfy our needs.
                  </p>
                </div>
              </div>
            </CSBodySection>
            <CSBodySection>
              <div  className="dark-section" id="tech-used">
                <div className="content-container">
                  <h2>
                    Technology Used:
                  </h2>
                  <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </CSBodySection>
            <CSBodySection>
              <div  className="yellow-section" id="view-live">
                <div className="content-container">
                  <h2>
                    View Live:
                  </h2>
                  <p>
                    Visit <a href="https://stacksocial.com/">StackSocial</a>, <a href="https://www.citizengoods.com/">Citizen Goods</a>, or <a href="https://www.joyus.com/">Joyus</a> and wait a few seconds to see a box pop up and ask you to subscribe. If it doesn’t appear, try it in a private browsing session.
                  </p>
                </div>
              </div>
            </CSBodySection>
    </CaseStudyContainer>
  )
}

export default EmailDeveloperCaseStudy;
