import React, { useState } from 'react';
import { colors } from '../UniversalValues'
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import NavLinkDropdown from './Nav/NavLinkDropdown';
import NavLinkDropdownLink from './Nav/NavLinkDropdownLink';
import { ReactComponent as ReactLogo } from '../svgs/react.svg';

type Props = {
    visibility: string,
    accentColor: string,
    headerColor: string,
    accentHoverColor: string
}

const Nav: React.FC<Props> = ({
    visibility,
    accentColor,
    headerColor,
    accentHoverColor
}) => {
    return (
        <nav style={{backgroundColor: accentColor, top: `-${visibility}`}} className="master-navbar">
            <div className="nav-link-container">
                <NavLink style={{color: headerColor}} className="nav-link" to="/">Home</NavLink>
                <NavLink style={{color: headerColor}} className="nav-link" to="journal-entries">Coding Journal</NavLink>
                <NavLinkDropdown navLinkColor={headerColor} title="BlockChain" >
                    <ul style={{backgroundColor: accentColor}}>
                        <NavLinkDropdownLink color={headerColor} backgroundColor={accentColor} hoverBackgroundColor={accentHoverColor} path="blockchain/developing">Developing</NavLinkDropdownLink>
                    </ul>
                </NavLinkDropdown>
                <NavLinkDropdown navLinkColor={headerColor} title="Cloud" >
                    <ul>
                        <NavLinkDropdownLink color={headerColor} backgroundColor={accentColor} hoverBackgroundColor={accentHoverColor} path="aws">AWS</NavLinkDropdownLink>
                    </ul>
                </NavLinkDropdown>
                <NavLinkDropdown navLinkColor={headerColor} title="Testing" >
                    <ul>
                        <NavLinkDropdownLink color={headerColor} backgroundColor={accentColor} hoverBackgroundColor={accentHoverColor} path="cypress">Cypress</NavLinkDropdownLink>
                    </ul>
                </NavLinkDropdown>
                <NavLinkDropdown navLinkColor={headerColor} title="Coding Languages" >
                    <ul style={{backgroundColor: accentColor}}>
                        <NavLinkDropdownLink color={headerColor} backgroundColor={accentColor} hoverBackgroundColor={accentHoverColor} path="react">React</NavLinkDropdownLink>
                        <NavLinkDropdownLink color={headerColor} backgroundColor={accentColor} hoverBackgroundColor={accentHoverColor} path="typescript">TypeScript</NavLinkDropdownLink>
                        <NavLinkDropdownLink color={headerColor} backgroundColor={accentColor} hoverBackgroundColor={accentHoverColor} path="html">HTML</NavLinkDropdownLink>
                        <NavLinkDropdownLink color={headerColor} backgroundColor={accentColor} hoverBackgroundColor={accentHoverColor} path="css">CSS</NavLinkDropdownLink>
                        <NavLinkDropdownLink color={headerColor} backgroundColor={accentColor} hoverBackgroundColor={accentHoverColor} path="javascript">JavaScript</NavLinkDropdownLink>
                    </ul>
                </NavLinkDropdown>
            </div>
        </nav>
    )
}

export default Nav
