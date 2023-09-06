import React , {useState,useEffect}from 'react'


import { useFetchQuestions } from '../hooks/fetchQuestions'
import { useSelector } from 'react-redux'


export const Questions = ({onChecked}) => {
    const [Check, setCheck] = useState(undefined)
    const [{isLoading,apiData,serverError}]=useFetchQuestions()

    const questions= useSelector(state=>state.questions.queue[state.questions.trace])
    // const trace=useSelector(state=>state.questions.trace)
    useEffect(()=>{
    //  console.log(questions);
    })
 
    
   if(isLoading) return <h3 className='text-l'>isLoading</h3>
   if(serverError) return <h3 className='text-l'>{serverError||"Unkown Error"}</h3>
    
    
    function onChange(i){
      onChecked(i)
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
                    <div className="check "></div>
                </li>
                ))
            }
         </ul>
    </div>
  )
}
