import {
  Button,
  Divider,
  Grid,
  List,
  TextField,
  Typography,
} from '@mui/material'

import Listi from './List'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAC,
  clearA,
  activedTodosAC,
  doneTodosAC,
  allTodosAC,
} from '../store/reducers/todoReducer'
import { useState } from 'react'

const Lists = () => {
  const [value, setValue] = useState('')
  const [isOn, setIsOn] = useState(true)
  const todos = useSelector((state) => state.todo.todos)
  const activeTodos = useSelector((state) =>
    state.todo.todos.filter((el) => el.completed !== true),
  )
  const filters = useSelector((state) => state.todo.filters)

  const dispatch = useDispatch()

  const handleAddTodo = (title) => {
    dispatch(addAC(title))
    setIsOn(true)
  }

  const handleClearTodos = () => {
    if (window.confirm('Вы точно хотите удалить все задачы?')) dispatch(clearA)
  }

  const handleChangeValue = ({ target }) => {
    setValue(target.value)
  }
  ////////\\\\\\
  const handleALLActiveTodos = () => {
    dispatch(activedTodosAC())
    setIsOn(false)
  }
  const handleAllDoneTodos = () => {
    dispatch(doneTodosAC())
    setIsOn(false)
  }
  const handleAllTodos = () => {
    dispatch(allTodosAC())
    setIsOn(true)
  }
  ///////\\\\\\\\
  return (
    <>
      <Grid
        container
        sx={{ mt: '20px', mb: '20px', alignItems: 'center' }}
        spacing={4}
      >
        <Grid item>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="outlined"
            value={value}
            onChange={handleChangeValue}
          />
        </Grid>
        <Grid item>
          <Button onClick={() => handleAddTodo(value)}>Add To do</Button>
        </Grid>
      </Grid>
      <Divider />
      <List>
        {isOn
          ? todos?.length > 0 &&
            todos.map((todo) => {
              return <Listi key={todo.id} {...todo} />
            })
          : filters?.length > 0 &&
            filters.map((todo) => {
              return <Listi key={todo.id} {...todo} />
            })}
      </List>
      <Divider />
      <Grid
        container
        sx={{
          mb: '20px',
          mt: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            background: '#1976d2',
            padding: '0.70rem',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '17px',
          }}
        >
          {activeTodos?.length} todos left
        </Typography>
        <Grid style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Button onClick={handleAllTodos}>All</Button>
          <Button onClick={handleALLActiveTodos}>Active</Button>
          <Button onClick={handleAllDoneTodos}>Completed</Button>
          <Button onClick={handleClearTodos}>Clear All</Button>
        </Grid>
      </Grid>
      <Divider />
    </>
  )
}

export default Lists
