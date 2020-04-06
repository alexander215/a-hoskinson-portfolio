import styled from 'styled-components';
import { deviceSize } from '../App/device.js'


export const NavBarStyle = styled.div`
  margin: 0 auto;
  padding: 1em;
  max-width: 80%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  a {
    color: white;
    text-decoration: none;
    padding: 0.1em 1em;
    @media ${deviceSize.mobileL}{
      padding: 0;
    }
  }
  a:hover {
    text-transform: uppercase;
    border-bottom: 2px solid #F9DC24;
  }:
  @media ${deviceSize.mobileL}{
    background-color: black;
    justify-content: space-between;
    max-width: 60%;
  }
`
