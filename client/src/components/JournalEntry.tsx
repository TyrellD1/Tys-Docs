import React, { useRef, useEffect } from 'react';
import {colors} from '../UniversalValues';
import Anchor from './Anchor';

type Props = {
    date: string,
    time: string,
    header: string,
    body: string,
    headerColor: string,
    otherColor: string,
    paragraphColor: string,
    id?: string,
}

const JournalEntry: React.FC<Props> = ({
    date,
    time,
    header,
    body,
    headerColor,
    otherColor,
    paragraphColor,
    id
}) => {
    const bodyRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        bodyRef!.current!.innerHTML = body;
    }, [body])
    return (
        <div className="journal-entry-container">
            <h2 style={{color:headerColor}}>{header}</h2>
            <h3 style={{color:otherColor}}>{date || time?`${date} - ${time}`:null}</h3>
            <p style={{color:paragraphColor}} ref={bodyRef}></p>
        </div>
    )
}

export default JournalEntry
