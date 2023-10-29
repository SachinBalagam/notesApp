// Write your code here
import {ListItem, ItemHeading, ItemDescription} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, note} = details
  return (
    <ListItem>
      <ItemHeading>{title}</ItemHeading>
      <ItemDescription>{note}</ItemDescription>
    </ListItem>
  )
}

export default NoteItem
