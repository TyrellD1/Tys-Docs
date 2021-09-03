import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

type Props = {

}

const CreateJournalEntry: React.FC<Props> = ({

}) => {
    const [heading, setHeading] = useState("I'm heading");
    const [body, setBody] = useState("<p>This is the initial content of the editor.</p>")
    const editorRef = useRef<any>(null);
    console.log(editorRef)
    axios.get("https://tys-docs-server.herokuapp.com/api/get_all_journal_entries")
        .then((result)=>console.log(result));
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("https://tys-docs-server.herokuapp.com/api/create_journal_entry", {heading: heading, body: body})
            .then((result) => {
                alert(result)
            }).catch((error) => {
                console.log(error)
            })
    }
    useEffect(()=> {
        setBody(body)
    }, [body])
    return (
        <form onSubmit={onSubmit}>
            <input value={heading} placeholder="heading" />
            <Editor
                ref={editorRef}
                value={body}
                textareaName="hello"
                init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button>Submit Journal</button>
        </form>
    )
}

export default CreateJournalEntry