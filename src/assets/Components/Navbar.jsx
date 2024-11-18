import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='w-screen h-12 bg-sky-950 border-b-2 border-black text-white fixed flex justify-between'>
            <div className='w-1/5 h-full flex justify-around items-center text-lg font-black'>
               <Link to='/'>The Quizz App</Link>
            </div>
            <div className='w-1/3 h-full flex justify-around items-center text-sm font-bold'>
                <Link to='/'>Home</Link>
                <Link to='/startquiz' >Start Quiz</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact'>Contact us</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar