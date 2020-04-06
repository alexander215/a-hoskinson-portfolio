import React from 'react';
import { NavBarStyle } from './style';
// import { Link, Switch } from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';
// import { NavBarSection } from '../App/style';
// import Link from 'react-router-dom';

const NavBar = () => {
    return(
        <NavBarStyle>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#skills'>Skills</a>
            <a href='#experience'>Experience</a>
            <a href='#education'>Education</a>
        </NavBarStyle>
    )


}

export default NavBar;