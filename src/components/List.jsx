import { AutoDelete } from '@mui/icons-material'
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'
import { completeAC, deleteAC } from '../store/reducers/todoReducer'

const List = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  const handleChecked = (id) => {
    dispatch(completeAC(id))
  }

  const handleDeleteTodo = (id) => {
    if (window.confirm('Вы точно хотите удалить задачу?'))
      dispatch(deleteAC(id))
  }

  return (
    <ListItem>
      <ListItemIcon onClick={() => handleChecked(id)}>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText id={id} primary={title} sx={{ color: 'navy' }} />
      <AutoDelete onClick={() => handleDeleteTodo(id)} />
    </ListItem>
  )
}

export default List
