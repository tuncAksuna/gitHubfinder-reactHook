import React, { useEffect, useReducer } from 'react'
import AddNoteForm from './AddNoteForm';
import NoteList from './NoteList'
import notesReducer from '../reducers/notes'
import NotesContext from '../../context/notes-context';

const NoteApp = () => {

    //*  using useReducer() --> dispatch = cases
    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if (notesData) {
            dispatch({
                type: 'POPULATE_NOTES',
                notes: notesData
            })
            // setNotes(notesData);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <div className="container p-5">
                <h1 >Note app to learn <em>React HOOK</em></h1>
                <br />
                <div className="card mb-3">
                    <div className="card-header">Notes</div>
                    {
                        notes && (
                            <table className="table table -sm table-striped mb-0">
                                <tbody>
                                    {
                                        <NoteList />
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="card mb-3">
                    <div className="card-header">Add a new note</div>
                    <div className="card-body">
                        <AddNoteForm />
                    </div>
                </div>
            </div >
        </NotesContext.Provider>
    )
}

export default NoteApp;
