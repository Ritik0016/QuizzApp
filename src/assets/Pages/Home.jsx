import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ 
        height: 'calc(100vh - 48px)'
      }} className='w-full bg-blue-200 relative top-12 flex justify-evenly items-center'>

          <div className='flex flex-col justify-evenly items-center bg-indigo-800 text-white p-10 rounded-xl w-11/12 h-4/5'>
            <div className="mb-5 text-8xl">
                <span>🧠</span>
            </div>
            <h1 className='text-5xl'><span className='text-7xl' >Q</span>uizz App</h1>
            <p className='text-xl'>Test your knowledge with this app!</p>
            <Link to='/startquiz'><button className='h-10 w-32 bg-green-800 rounded-xl text-white font-bold'>Play Now!</button></Link> 
          </div>
    </div>
  )
}

export default Home