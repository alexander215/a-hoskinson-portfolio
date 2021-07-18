import React from 'react';
import { CaseStudyContainer, CaseStudyIntroTextContainer, CaseStudyTitle, CaseStudySub, CSIntroNav } from '../style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const EmailDeveloperCaseStudy = () => {
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
                  Jump to Section:
                  <ul>
                    <li>Background</li>
                    <li>My Role</li>
                    <li>Tech Used</li>
                    <li>View Live</li>
                  </ul>
                </CSIntroNav>
            </CaseStudyIntroTextContainer>
    </CaseStudyContainer>
  )
}

export default EmailDeveloperCaseStudy;
