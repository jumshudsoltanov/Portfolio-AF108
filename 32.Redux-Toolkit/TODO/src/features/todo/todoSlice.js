import { createSlice } from '@reduxjs/toolkit'

let nextId = 1

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
    isModalOpen: false,
    currentTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: nextId++,
        title: action.payload,
        completed: false,
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.todo.find((t) => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((t) => t.id !== action.payload)
    },
    openModal: (state, action) => {
      state.isModalOpen = true
      state.currentTodo = action.payload ? action.payload : null
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.currentTodo = null
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload
      const todo = state.todo.find((t) => t.id === id)
      if (todo) {
        todo.title = title
      }
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, openModal, closeModal, editTodo } = todoSlice.actions
export default todoSlice.reducer