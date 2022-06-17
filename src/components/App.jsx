import React, {useState} from "react";


const Note = ({id, content, date, important}) => {
    return(
        <ol>
            <li>{id}</li>
            <li>{content}</li>
            <li>{date}</li>
            <li>{important ? 'true' : 'false'}</li>
        </ol>
    )
}
export default function App() {
    const listNotes = [
        {
            id: 1,
        },
        {
            id:2
        },
        {
            id:3
        }
    ]

    //Al useState de abajo le puedo mandar como parametro listNotes si quiero que se inicie por defecto como seria en una base de datos que traigo el array de objetos, o vacio [].
    const [notes, setNotes] = useState(listNotes);
    const [newNote, setNewNote] = useState('');
    const [showAll, setShowAll] = useState(true);

    const handleChange = (event) => {
        setNewNote(event.target.value)
    }

    const handleSubmit = () => {
        event.preventDefault();
        //Creo un objeto y lo añado al estado notes
        const noteToAddToState = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() >= 0.5
        }

        setNotes([...notes, noteToAddToState])
        setNewNote('')

        console.log(notes);
    }

    const handleShowAll = () => {
        setShowAll(() => !showAll);
    }
    return(
        <div>
            <h1>Notes</h1>
            <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show All"}</button>

            {notes.
            filter(note => {
                if(showAll === true) {
                    return true
                }

                //retorname aquellas notas que el improtant es true, cuando showAll esta en falso.
                return note.important === true;
                }
            )
            .map(note => (
                <Note key={note.id} {...note} />
            ))}

            <h1>Add new Note:</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={newNote} type="text" />
                    <button>Crear Nota</button>
                </form>
        </div>
        )
    }
