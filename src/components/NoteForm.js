import { useState } from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: Math.random() > 0.5,
    })

    setNewNote('')
  }

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div className="formDiv">
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input
          id="note-input"
          value={newNote}
          onChange={handleChange}
          placeholder="write note here"
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm
