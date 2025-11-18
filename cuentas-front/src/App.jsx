import './App.css'
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}