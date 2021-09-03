import React, {useState} from 'react';
import {colors} from '../UniversalValues';

type Props = {
    href: string,
}

const Anchor: React.FC<Props> = ({
    href,
    children
}) => {
    const [linkColor, setLinkColor] = useState(colors.pallete1.otherColor)
    console.log(colors)
    const toggleLinkColor = () => {
        setLinkColor(linkColor===colors.pallete1.otherColor?colors.pallete1.otherHoverColor:colors.pallete1.otherColor)
    }
    return (
        <a style={{color: linkColor}} href={href} target='_blank' onMouseEnter={()=>toggleLinkColor()} onMouseLeave={()=>toggleLinkColor()} >{children}</a>
    )
}

export default Anchor
