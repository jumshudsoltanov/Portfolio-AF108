// src/components/TodoItem.jsx
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo, openModal } from '../features/todo/todoSlice'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.title}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Sil</button>
      <button onClick={() => dispatch(openModal(todo))}>Dəyiş</button>
    </li>
  )
}

export default TodoItem
