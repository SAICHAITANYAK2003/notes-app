// Write your code here

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  NotesTitle,
  FormContainer,
  TitleInput,
  TextInput,
  TitleTextContainer,
  ButtonContainer,
  Button,
  NotesListContainer,
  NotesList,
  EmptyNotes,
  EmptyNotesTitle,
  EmptyNotesImage,
  EmptyNotesText,
} from './styledComponents'

const Notes = () => {
  const [titleInput, setTitleInput] = useState('')
  const [textInput, setTextInput] = useState('')
  const [notesList, setNotesList] = useState([])
  const onAddNote = event => {
    event.preventDefault()
    const addNewNote = {
      id: uuidv4(),
      titleInput,
      textInput,
    }
    setNotesList(prevNotesList => [...prevNotesList, addNewNote])
    setTextInput('')
    setTitleInput('')
  }

  const onChangeTitleInput = event => {
    setTitleInput(event.target.value)
  }
  const onChangeTextInput = event => {
    setTextInput(event.target.value)
  }
  const renderNotes = () => (
    <NotesList>
      {notesList.map(eachNote => (
        <NoteItem noteDetails={eachNote} key={eachNote.id} />
      ))}
    </NotesList>
  )

  const renderEmptyNotes = () => (
    <EmptyNotes>
      <EmptyNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesTitle>No Notes Yet</EmptyNotesTitle>
      <EmptyNotesText>Notes you add will appear here</EmptyNotesText>
    </EmptyNotes>
  )

  return (
    <MainContainer>
      <NotesTitle>Notes</NotesTitle>
      <FormContainer onSubmit={onAddNote}>
        <TitleTextContainer>
          <TitleInput
            type="text"
            placeholder="Title"
            value={titleInput}
            onChange={onChangeTitleInput}
          />
          <TextInput
            type="text"
            placeholder="Take a Note..."
            value={textInput}
            onChange={onChangeTextInput}
          />
        </TitleTextContainer>
        <ButtonContainer>
          <Button type="submit">Add</Button>
        </ButtonContainer>
      </FormContainer>
      <NotesListContainer>
        {notesList.length === 0 ? renderEmptyNotes() : renderNotes()}
      </NotesListContainer>
    </MainContainer>
  )
}
export default Notes
