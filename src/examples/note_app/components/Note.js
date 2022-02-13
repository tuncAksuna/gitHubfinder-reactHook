import React, { useContext } from 'react';
import NotesContext from '../../context/notes-context';

const Note = ({ note }) => {

    const { dispatch } = useContext(NotesContext); // get removeNote() method from context via dispatch..

    return (
        <tr key={note.title}>
            <td style={{ width: '40%' }}>{note.title}</td>
            <td >{note.body}</td>
            <td style={{ width: '5%' }}>
                
                <button onClick={() => dispatch(
                    { type: 'REMOVE_NOTE', title: note.title }
                )} className="btn btn-danger btn-sm">

                    <i className="far fa-times"></i>
                </button>
            </td>
        </tr>
    )

}

export default Note;