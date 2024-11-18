import React from 'react'
import Navbar from './assets/Components/Navbar'
import Home from './assets/Pages/Home'
import StartQuiz from './assets/Pages/StartQuiz'
import About from './assets/Pages/About'
import Contact from './assets/Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Result from './assets/Pages/Result'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/startquiz' element={<StartQuiz/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}  />
            <Route path='/result' element={<Result/>}/>
      </Routes>
      <div className='fixed bottom-0 left-0 text-gray-700 text-lg font-medium'>Developed with <span className='font-bold text-gray-950'>ReactJS</span> by <span className='font-bold text-gray-950'>Ritik</span></div>
    </>
  )
}

export default App