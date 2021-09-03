import React, {useState} from 'react'
import {colors} from '../UniversalValues'

type Props = {
    title: string,
    subtitle: string,
    headerColor: string
}

const PageTitle: React.FC<Props> = ({
    title,
    subtitle,
    headerColor
}) => {
    return (
        <div className="page-title-container">
            <h1 style={{color: headerColor}} className=''>{title}</h1>
            {subtitle?<h2 style={{color: headerColor}} className=''>{subtitle}</h2>:null}
        </div>
    )
}

export default PageTitle
