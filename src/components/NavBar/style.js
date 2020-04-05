import styled from 'styled-components';
import { deviceSize } from '../App/device.js'


export const NavBarStyle = styled.div`
  margin: 0 auto;
  padding: 1em;
  max-width: 60%;
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-transform: uppercase;
    border-bottom: 2px solid #F9DC24;
  }:
  @media ${deviceSize.mobileL}{
    background-color: orange;
    max-width: 10%
  }
`
