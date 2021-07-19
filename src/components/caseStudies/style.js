import styled from 'styled-components'
import { deviceSize } from '../App/device.js'


export const CaseStudyContainer = styled.div`
  background-color: #F9DC24;
  color: black;
  margin: 0;
  padding-top: 3em;
`
export const CaseStudyIntroTextContainer = styled.div`
  min-height: 40vh;
  max-width: 90%;
  margin: 0 auto;
  a {
    color: #000000;
  }
`
export const CaseStudyTitle = styled.h1`
  margin-top: 4.5rem;
  margin-bottom: 2.5rem;
  font-size: 3.12rem;
  font: Oswald, sans-serif;
  @media ${deviceSize.mobileL} {
    font-size: 3.9rem;
  }
  @media ${deviceSize.laptop} {
    font-size: 4.88rem;
    margin-bottom: 4.5rem;
  }
`
export const CaseStudySub = styled.p`
  max-width: 80%;
  text-align: center;
  margin: 2.5rem auto;
  padding-bottom: 4.5rem;
  border-bottom: solid 4px #707070;
  @media ${deviceSize.mobileL} {
    font-size: 2.5rem;
  }
  @media ${deviceSize.laptop} {
    font-size: 3.125rem;
    padding-top: 4.5rem;
  }
`

export const CSIntroNav = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  padding-bottom: 4rem;
  ul {
    max-width: 70%;
    list-style-type: none;
    padding: 0;
    padding-top: 1.5rem
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    font-weight: 500;
    padding: 1rem .5rem 0 .5rem;
    text-decoration: underline;
  }
  @media ${deviceSize.mobileL} {
    font-size: 1.6rem;
  }
  @media ${deviceSize.laptop} {
    font-size: 1.8rem;
    padding-bottom: 11rem;
    padding-top: 5rem;
  }
`

export const CSBodySection = styled.div`
  margin: 0 auto;

  .content-container {
    max-width: 100rem;
    // width: 100rem;
    margin: 0 auto;
  }
  
  p {
    max-width: 85%;
    margin: 0 auto;
    font-size: 1.6rem;
    line-height: 2.7rem;
    padding-bottom: 8rem;
    text-align: left;
    @media ${deviceSize.mobileL} {
      max-width: 50rem;
      padding-top: 1.5rem;
      padding-bottom: 10rem;
    }
      
    @media ${deviceSize.laptop} {
      margin-right: 0;
      padding-bottom: 13rem;
      font-size: 1.8rem;
    }
  }
  
  ul {
    color: #ffffff;
    list-style-type: none;
    text-align: left;
    font-size: 2rem;
    line-height: 2.6rem;
    max-width: 85%;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 8rem;
    @media ${deviceSize.mobileL} {
      max-width: 37rem;
      padding-top: 1.5rem;
      padding-bottom: 10rem;
    }
      
    @media ${deviceSize.laptop} {
      margin-right: 12rem;
      // display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;
      // max-width: 100%
      // font-size: 2.5rem
      // gap: 4rem;
    }
  
    li {
        padding-bottom: 1.5rem;
      }
  }
  
  h2 {
    margin: 0 auto 5rem auto;
    color: #000;
    font-size: 2.5rem;
    padding-top: 8.9rem;
    padding-bottom: 1.5rem;
    width: fit-content;
    border-bottom: 2px solid #ffffff;
    
    @media ${deviceSize.mobileL} {
      font-size: 3.12rem;
    }
    
    @media ${deviceSize.laptop} {
      font-size: 3.9rem;
      padding-top: 12rem;
      margin-left: 0;
    }
  }
  
  a {
    color: #000;
  }

  .dark-section {
    background-color: #000;
  
    h2 {
      color: #FCD73A;
    }

    p,a {
      color: #FFFFFF;
    }
  }

`
