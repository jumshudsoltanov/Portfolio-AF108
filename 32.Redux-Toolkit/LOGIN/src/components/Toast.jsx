import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideToast } from '../features/toastSlice'

const Toast = () => {
  const dispatch = useDispatch()
  const { message, type } = useSelector((state) => state.toast)

  if (!message) return null

  return (
    <div className={`toast ${type}`}>
      <p>{message}</p>
      <button onClick={() => dispatch(hideToast())}>X</button>
    </div>
  )
}

export default Toast
