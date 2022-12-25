const DONE = 'DONE'
const DELETED = 'DELETED'
const ADD = 'ADD'
const CLEAR = 'CLEAR'
const COMPLETED = 'COMPLETED'
const ACTIVED = 'ACTIVED'
const ALL = 'ALL'

const initialState = {
  todos: [],
  filters: [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newState = {
        ...state,
        todos: [
          ...state.todos,
          {
            userId: Math.random(),
            id: Math.random(),
            title: action.title,
            completed: false,
          },
        ],
      }
      return newState
    case DELETED:
      return {
        ...state,
        todos: state.todos.filter((elem) => elem.id !== action.id),
      }
    case CLEAR:
      return { todos: [], filters: [] }

    case COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          } else {
            return todo
          }
        }),
      }
    case ACTIVED:
      return {
        ...state,
        filters: state.todos.filter((elem) => elem.completed !== true),
      }
    case DONE:
      return {
        ...state,
        filters: state.todos.filter((elem) => elem.completed === true),
      }
    case ALL:
      return {
        ...state,
        filters: state.todos,
      }
    default:
      return state
  }
}

// action creators
export const addAC = (title) => ({ type: ADD, title })
export const deleteAC = (id) => ({ type: DELETED, id })
export const completeAC = (id) => ({ type: COMPLETED, id })
export const activedTodosAC = () => ({ type: ACTIVED })
export const doneTodosAC = () => ({ type: DONE })
export const allTodosAC = () => ({ type: ALL })
export const clearA = { type: CLEAR }
