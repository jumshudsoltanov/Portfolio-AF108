import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, login, logout } from '../features/authSlice'
import { showToast } from '../features/toastSlice'

const Auth = () => {
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    if (username && password) {
      dispatch(register({ username, password }))
      dispatch(showToast({ message: 'Registration successful!', type: 'success' }))
    } else {
      dispatch(showToast({ message: 'Please fill in all fields.', type: 'error' }))
    }
  }

  const handleLogin = () => {
    if (username && password) {
      dispatch(login({ username, password }))
      dispatch(showToast({ message: 'Login successful!', type: 'success' }))
    } else {
      dispatch(showToast({ message: 'Please fill in all fields.', type: 'error' }))
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(showToast({ message: 'Logged out successfully!', type: 'success' }))
  }

  return (
    <div className="auth-container">
      {!isAuthenticated ? (
        <>
          <h2>Register / Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
          </div>
        </>
      ) : (
        <>
          <h2>Welcome, {user.username}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  )
}

export default Auth
