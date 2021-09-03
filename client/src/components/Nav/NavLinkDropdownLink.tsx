import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
    path: string,
    color: string,
    backgroundColor: string,
    hoverBackgroundColor: string
}

const NavLinkDropdownLink: React.FC<Props> = ({
    path,
    color,
    backgroundColor,
    hoverBackgroundColor,
    children
}) => {
    const [usedBackgroundColor, setUsedBackgroundColor] = useState(backgroundColor);
    const toggleDropdownLinkHover = () => {
        setUsedBackgroundColor(usedBackgroundColor===backgroundColor?hoverBackgroundColor:backgroundColor)
    }
    useEffect(()=>{
        setUsedBackgroundColor(backgroundColor)
    }, [backgroundColor])
    return (
        <li className="nav-link-dropdown-link" ><NavLink style={{color: color, backgroundColor: usedBackgroundColor, textDecoration: "none"}} onMouseEnter={()=>toggleDropdownLinkHover()} onMouseLeave={()=>toggleDropdownLinkHover()} to={path}>{children}</NavLink></li>
    )
}

export default NavLinkDropdownLink
