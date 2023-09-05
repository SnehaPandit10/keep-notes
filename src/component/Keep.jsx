import React, { useState } from 'react'
import './keep.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const Keep = ({ onAdd }) => {
    const [addNote, setAddNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    const submiButton = (event) => {
        onAdd(addNote);
        setAddNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    return (
        <div>
            <h2>Keep-Notes</h2>
            <div className='keep-add'>
                <form>
                    <input
                        value={addNote.title}
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                    />
                    <p>
                        <textarea
                            value={addNote.content}
                            name="content"
                            placeholder="Take a note..."
                            onChange={handleChange}
                        ></textarea>
                    </p>
                    <button type='submit' onClick={submiButton}><FontAwesomeIcon icon={faPlus} size='2x' /></button>
                </form>

            </div>

        </div>
    )
}
