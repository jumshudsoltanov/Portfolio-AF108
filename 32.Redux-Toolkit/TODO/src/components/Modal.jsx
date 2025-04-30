
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, addTodo, editTodo } from '../features/todo/todoSlice'

const Modal = () => {
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.todo.isModalOpen)
  const currentTodo = useSelector((state) => state.todo.currentTodo)
  const [title, setTitle] = useState(currentTodo ? currentTodo.title : '')

  const handleSave = () => {
    if (currentTodo) {
      dispatch(editTodo({ id: currentTodo.id, title }))
    } else {
      dispatch(addTodo(title))
    }
    dispatch(closeModal())
  }

  if (!isModalOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{currentTodo ? 'Edit Todo' : 'Add Todo'}</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo başlığını daxil et"
        />
        <button onClick={handleSave}>{currentTodo ? 'Save' : 'Add'}</button>
        <button onClick={() => dispatch(closeModal())}>Close</button>
      </div>
    </div>
  )
}

export default Modal
