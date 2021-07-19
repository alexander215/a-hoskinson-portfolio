import React from 'react';
import { CaseStudyContainer, CaseStudyIntroTextContainer, CaseStudyTitle, CaseStudySub, CSIntroNav, CSBodySection, CSBodyHeadingYellow, CSBodyCopyYellow, CSBodyCopyDark, CSBodyListDark } from '../style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';

const EmailDeveloperCaseStudy = () => {
  const thisPage = '/email-developer-case-study';

  return (
    <CaseStudyContainer>
            <CaseStudyIntroTextContainer>
                <CaseStudyTitle>
                    Dynamic, Custom Email Template Creation &amp; Maintenance 
                </CaseStudyTitle>
                <FontAwesomeIcon icon={faEnvelope} size='3x'/>
                <CaseStudySub>
                    I created and maintained email templates that were dynamically populated with custom content for a significant number of daily sends.
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
                    StackCommerce builds and runs branded online shops for many different publishing companies. A major part of their marketing strategy revolves around email, and they use the Iterable service to send a ton of daily emails for marketing and purchasing purposes. Some emails are daily marketing emails, some are transactional emails (such as a shipping confirmation), and others are one-time notifications (such as a password reset).
                    All of these emails are white label, meaning they need to contain the logo and brand characteristics of a distinct store. Also, some get a payload of event data, while others connect with data feeds for the necessary info.
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
                    I was responsible for migrating/maintaining the front end aspects of dozens of these emails when they started being sent from Iterable. After the initial setup, I had to regularly make design changes or fix bugs.
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
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Iterable native syntax (similar to JavaScript logic)</li>
                    <li>Email on Acid testing</li>
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
                    If you want to see one of these in the wild, head over to <a href="https://stacksocial.com/">StackSocial</a>, <a href="https://www.citizengoods.com/">Citizen Goods</a>, or <a href="https://www.joyus.com/">Joyus</a> and sign up for the newsletter or create an account.
                  </p>
                </div>
              </div>
            </CSBodySection>
    </CaseStudyContainer>
  )
}

export default EmailDeveloperCaseStudy;
