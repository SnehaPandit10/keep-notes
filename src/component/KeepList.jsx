import React from 'react'
import './keep.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const KeepList = ({ title, content, onDelete, id }) => {
    return (
        <div>
            <div className='note'>
                <h1>{title}</h1>
                <p>{content}</p>
                <button type='submit' onClick={() => onDelete(id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}
