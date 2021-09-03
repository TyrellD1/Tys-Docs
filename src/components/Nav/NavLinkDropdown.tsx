import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
    route?: string,
    title: string,
    navLinkColor: string
}

const NavLinkDropdown: React.FC<Props> = ({
    route,
    title,
    navLinkColor,
    children
}) => {
    const [dropdownClass, setDropdownClass] = useState("dropdown-hover-false")
    return (
        <div style={{cursor: "pointer", color: navLinkColor}} onMouseEnter={()=> setDropdownClass("dropdown-hover-true")} onMouseLeave={()=> setDropdownClass("dropdown-hover-false")} className={`nav-link nav-link-dropdown ${dropdownClass}`} >
            {title}
            {children}
        </div>
    )
}

export default NavLinkDropdown;
