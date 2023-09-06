import React , {useState,useEffect}from 'react'


import { useFetchQuestions } from '../hooks/fetchQuestions'
import { useDispatch, useSelector } from 'react-redux'

import { updateResult } from '../hooks/setResult'



export const Questions = ({onChecked}) => {

    const [checked, setChecked] = useState(undefined)
    const {trace}=useSelector(state=>state.questions)
    const result =useSelector(state=>state.result.result)
    const [{isLoading,apiData,serverError}]=useFetchQuestions()
    const dispach=useDispatch()
    const questions= useSelector(state=>state.questions.queue[state.questions.trace])
  
  useSelector(state=>console.log(state));
    useEffect(()=>{
      dispach(updateResult({trace,checked}))
    },[checked])
 
    
   if(isLoading) return <h3 className='text-l'>isLoading</h3>
   if(serverError) return <h3 className='text-l'>{serverError||"Unkown Error"}</h3>
    
    
    function onChange(i){
      onChecked(i)
      setChecked(i)
    }
   
  return (
    <div className="questions">
        <h2 className='
         text-l'>{questions?.question}</h2>
         <ul key={questions?.id}>
            {
                questions?.options.map((q,i)=>(
                    <li key={i}>
                    <input type="radio"
                    value={true}
                    name="options"
                    id={`q${i}-option`}
                     onChange={()=>onChange(i)} 
                    />
                    <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                    <div className={`check ${result[trace]===i? 'checked': ''}`}></div>
                </li>
                ))
            }
         </ul>
    </div>
  )
}
