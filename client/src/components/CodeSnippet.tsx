import React, { useState, useEffect } from 'react';
import {colors} from "../UniversalValues";

type Props = {
    code: string,
    otherColor: string
}

const CodeSnippet: React.FC<Props> = ({
    code,
    otherColor
}) => {
    const [copy, setCopy] = useState(code)
    useEffect(()=>{
        // Breaks the code into an array of lines
        let x = code.split('\n');
        // Remove one line, starting at the first position
        x.splice(0,1);
        // Joins the lines back together with first removed and sets it to Copy
        setCopy(x.join('\n'))
    }, [copy])
    return (
        <div>
            <code style={{cursor: "pointer", color: otherColor}} onClick={() => navigator.clipboard.writeText(code)}>
{`${copy}`}   
            </code>
        </div>
    )
}

export default CodeSnippet
