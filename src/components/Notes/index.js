// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem/index'

import {
  AppContainer,
  MainContainer,
  Heading,
  FormContainer,
  Input,
  InputTextArea,
  CustomButton,
  NoListContainer,
  Image,
  NoListHeading,
  NoListDescription,
  NotesListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])

  const onTitleChange = event => setTitle(event.target.value)
  const onNoteChange = event => setNote(event.target.value)

  const onClickAdd = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNoteList(prevState => [...prevState, newNote])
    setTitle('')
    setNote('')
  }

  const showNoListView = noteList.length <= 0

  return (
    <AppContainer>
      <MainContainer>
        <Heading>Notes</Heading>
        <FormContainer onSubmit={onClickAdd}>
          <Input
            type="text"
            placeholder="Title"
            onChange={onTitleChange}
            value={title}
          />
          <InputTextArea
            placeholder="Take a Note..."
            onChange={onNoteChange}
            value={note}
          />
          <CustomButton type="submit">Add</CustomButton>
        </FormContainer>

        {showNoListView ? (
          <NoListContainer>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoListHeading>No Notes Yet</NoListHeading>
            <NoListDescription>
              Notes you add will appear here
            </NoListDescription>
          </NoListContainer>
        ) : (
          <NotesListContainer>
            {noteList.map(eachNote => (
              <NoteItem key={eachNote.id} details={eachNote} />
            ))}
          </NotesListContainer>
        )}
      </MainContainer>
    </AppContainer>
  )
}

export default Notes
