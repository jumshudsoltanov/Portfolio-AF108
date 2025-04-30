// src/App.jsx
import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Modal from './components/Modal'
import './index.css'

const App = () => {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
      <Modal />
    </div>
  )
}

export default App
