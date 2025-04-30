// src/components/TodoList.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TotalItem'

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todo)

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
