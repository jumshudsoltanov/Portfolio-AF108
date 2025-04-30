
import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../features/todo/todoSlice'

const TodoForm = () => {
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(openModal())
  }

  return (
    <div className="todo-form">
      <button onClick={handleAddTodo}>Yeni Todo Əlavə et</button>
    </div>
  )
}

export default TodoForm
