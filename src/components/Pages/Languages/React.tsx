import React from 'react';
import CodeSnippet from '../../CodeSnippet';

type Props = {
    headerColor: string,
    otherColor: string
}

const ReactPage: React.FC<Props> = ({
    headerColor,
    otherColor
}) => {
    return (
        <div className="page-container">
              <h1 style={{color: headerColor}} className=''>React</h1>
              <CodeSnippet otherColor={otherColor} code={
                `
import React, { useState } from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import NavLinkDropdown from './Nav/NavLinkDropdown';
import { ReactComponent as ReactLogo } from '../svgs/react.svg'

type Props = {
    visibility: string
}

const Nav: React.FC<Props> = ({
    visibility
}) => {
    return (
        <nav style={{top: visibility}} className="master-navbar">
            <div className="nav-link-container">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="journal-entries">Coding Journal</NavLink>
                <NavLink className="nav-link" to="blockchain">BlockChain</NavLink>
                <NavLinkDropdown title="Cloud" >
                    <ul>
                        <li className="nav-link-dropdown-link" ><NavLink to="aws">AWS</NavLink></li>
                    </ul>
                </NavLinkDropdown>
                <NavLinkDropdown title="Coding Languages" >
                    <ul>
                        <li className="nav-link-dropdown-link" ><NavLink to="react">React</NavLink></li>
                        <li className="nav-link-dropdown-link" ><NavLink to="typescript">TypeScript</NavLink></li>
                        <li className="nav-link-dropdown-link" ><NavLink to="html">HTML</NavLink></li>
                        <li className="nav-link-dropdown-link" ><NavLink to="css">CSS</NavLink></li>
                        <li className="nav-link-dropdown-link" ><NavLink to="javascript">JavaScript</NavLink></li>
                    </ul>
                </NavLinkDropdown>
            </div>
        </nav>
    )
}

export default Nav
                `
              } />
        </div>
    )
}

export default ReactPage
