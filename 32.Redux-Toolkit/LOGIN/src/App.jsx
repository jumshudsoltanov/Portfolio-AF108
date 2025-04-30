import React from 'react'
import Auth from './components/Auth'
import Toast from './components/Toast'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Authentication Example</h1>
      <Auth />
      <Toast />
    </div>
  )
}

export default App
