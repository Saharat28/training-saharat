import React from 'react'
import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFount from './pages/NotFount';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Course" element={<Course/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<NotFount/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App