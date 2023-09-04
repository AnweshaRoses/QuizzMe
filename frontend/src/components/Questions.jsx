import React , {useState,useEffect}from 'react'
import englishQuizData from '../dummy'

export const Questions = () => {
    const [Check, setCheck] = useState(undefined)
    const question=englishQuizData[0]

    
    function onChange(){

    }
  return (
    <div className="questions">
        <h2 className='
         text-l'>{question.question}</h2>
         <ul key={question.id}>
            {
                question.options.map((q,i)=>(
                    <li key={i}>
                    <input type="radio"
                    value={true}
                    name="options"
                    id={`q${i}-option`}
                     onChange={onChange()} 
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
