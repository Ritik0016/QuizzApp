import React, { useState } from 'react'
import P1LRC from '../Components/P1LRC'
import { SetIsLockContext, SetIsSelectContext, IsLockContext, IsSelectContext, SetAnsKeyContext, AnsKeyContext } from '../Context/Context1'
import { Link } from 'react-router-dom'



const StartQuiz = () => {


  const [IsLock, setIsLock] = useState(false)
  const [IsSelect, setIsSelect] = useState()
  const [Anskey, setAnskey] = useState([])

 
  function filtering(){
    const result = {};

    
    Anskey.forEach(item => {
     
      const [key, value] = Object.entries(item)[0];
     
      result[key] = value;
    });
    
    
    const finalAnskey = Object.entries(result).map(([key, value]) => ({ [key]: value }));
    
    console.log(finalAnskey)

    localStorage.setItem("submit", JSON.stringify(finalAnskey))
  }

  

  function evaluate(){
    filtering()
    const submitted_data = localStorage.getItem("submit")
    const parsed_data = JSON.parse(submitted_data)
    console.log(parsed_data)
  }

  return (
    <div style={{
      height:'calc(100vh - 48px)'
    }} className='bg-sky-200 w-full flex flex-col justify-evenly items-center relative top-12' >
      <SetAnsKeyContext.Provider value={setAnskey}>
        <AnsKeyContext.Provider value={Anskey}>
          <SetIsLockContext.Provider value={setIsLock}>
            <IsLockContext.Provider value={IsLock}>
              <SetIsSelectContext.Provider value={setIsSelect}>
                <IsSelectContext.Provider value={IsSelect}>
                  <P1LRC  />
                  <Link to= '/result'> <button onClick={evaluate} className='h-10 w-32 bg-green-800 rounded-xl text-white font-bold'>Submit</button> </Link>
                </IsSelectContext.Provider>
              </SetIsSelectContext.Provider>
            </IsLockContext.Provider>
          </SetIsLockContext.Provider>
        </AnsKeyContext.Provider>
      </SetAnsKeyContext.Provider>
            
    </div>
  )
}

export default StartQuiz