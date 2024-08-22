// Write your code here
import {NoteItemLi, NoteItemTitle, NoteItemText} from './styledComponents'
const NoteItem = props => {
  const {noteDetails} = props
  const {titleInput, textInput} = noteDetails
  return (
    <NoteItemLi>
      <NoteItemTitle>{titleInput}</NoteItemTitle>
      <NoteItemText>{textInput}</NoteItemText>
    </NoteItemLi>
  )
}

export default NoteItem
