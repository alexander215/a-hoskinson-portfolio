import React from 'react';
import { NavBarStyle } from './style';
// import { Link, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
// import { NavBarSection } from '../App/style';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return(
        <NavBarStyle>
            <HashLink to='/'>Home</HashLink>
            <HashLink smooth to='/#about'>About</HashLink>
            <HashLink to='/#projects'>Projects</HashLink>
            <HashLink to='/#skills'>Skills</HashLink>
            <HashLink to='/#experience'>Experience</HashLink>
            <HashLink to='/#education'>Education</HashLink>
            <HashLink to='/case-study'>Case Study</HashLink>
        </NavBarStyle>
    )


}

export default NavBar;