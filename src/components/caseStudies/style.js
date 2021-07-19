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
    font-size: 2rem;
  }
  @media ${deviceSize.laptop} {
    font-size: 2.5rem;
  }
`

export const CSBodySection = styled.div`
  margin: 0 auto;
  
  p {
      max-width: 85%;
    margin: 0 auto;
    font-size: 1.6rem;
    line-height: 2.7rem;
    padding-bottom: 8rem;
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

// export const CSBodyHeadingDark = styled.h2`
//   margin: 0 auto 5rem auto;
//   color: #FCD73A;
//   font-size: 2.5rem;
//   padding-top: 8.9rem;
//   padding-bottom: 1.5rem;
//   width: fit-content;
//   border-bottom: 2px solid #ffffff;
// `

// export const CSBodyCopyDark = styled.p`
//   color: #FFFFFF;
//   max-width: 85%;
//   margin: 0 auto;
//   font-size: 1.6rem;
//   line-height: 2.7rem;
//   padding-bottom: 8rem;
// `

// export const CSBodySectionYellow = styled.div`
//   margin: 0 auto;
//   // background-color: #000;
// `

// export const CSBodyHeadingYellow = styled.h2`
//   margin: 0 auto 5rem auto;
//   color: #000000;
//   font-size: 2.5rem;
//   padding-top: 8.9rem;
//   padding-bottom: 1.5rem;
//   width: fit-content;
//   border-bottom: 2px solid #ffffff;
// `

// export const CSBodyCopyYellow = styled.p`
//   // color: #000000;
//   max-width: 85%;
//   margin: 0 auto;
//   font-size: 1.6rem;
//   line-height: 2.7rem;
//   padding-bottom: 8rem;
// `

// export const CSBodyListDark = styled.ul`
//   color: #ffffff;
//   list-style-type: none;
//   text-align: left;
//   font-size: 2rem;
//   line-height: 2.6rem;
//   max-width: 70%;
//   margin: 0 auto;
//   padding: 0;
//   // li {
//   //   color: green;
//   // }
// `