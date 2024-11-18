import React, { useContext} from 'react'
import { AnsKeyContext, Countcontext, IsLockContext, IsSelectContext, Questioncontext, SetAnsKeyContext, SetIsLockContext, SetIsSelectContext } from '../Context/Context1'



const Block = (props) => {
  const Counting = useContext(Countcontext)
  const Helloques = useContext(Questioncontext)
  const IsSelect = useContext(IsSelectContext)
  const setIsSelect = useContext(SetIsSelectContext)
  const IsLock = useContext(IsLockContext)
  const setIsLock = useContext(SetIsLockContext)
  const setAnsKey = useContext(SetAnsKeyContext)
  const AnsKey = useContext(AnsKeyContext)


  const IsCorrect = Helloques[Counting].CorrectAnswer
 
  console.log("selected option is", IsSelect)



  function select(){
    if(IsLock==false){
      setIsSelect(Helloques[Counting].Options[props.Optionnumber])
      // setIsLock(true)
      setAnsKey([...AnsKey, {[Counting] :Helloques[Counting].Options[props.Optionnumber]} ])

    }
  }
  console.log(AnsKey)
    
  return (
    <div onClick={select}  className= {` ${IsSelect ? 'green':'blue'} `} >
     {Helloques[Counting].Options[props.Optionnumber]}
    </div>
  )
}  

export default Block