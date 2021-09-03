import React, { useState, useEffect } from 'react';
import {colors} from '../../UniversalValues';
import JournalEntry from '../JournalEntry';

type Props = {
    headerColor: string,
    otherColor: string,
    paragraphColor: string
}

const JournalEntries: React.FC<Props> = ({
    headerColor,
    otherColor,
    paragraphColor
}) => {
    const [entries, setEntries] = useState<any[]>([])
    useEffect(()=>{
        fetch('./journalEntries.json')
        .then(response => response.json())
        .then(data => setEntries(data));
    }, [entries])
    return (
        <div className="journal-entries-container">
            <h1 style={{color:headerColor}}>Coding Journal</h1>
            {entries.length?entries.map(x => <JournalEntry key={x?x.id:0} headerColor={headerColor} otherColor={otherColor} paragraphColor={paragraphColor} date={x.date} time={x.time} header={x.header} body={x.body} /> ):null}
        </div>
    )
}

export default JournalEntries
