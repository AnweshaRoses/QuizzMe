import React, { useEffect } from 'react'
import { Questions } from './Questions'
import {useSelector,useDispatch} from 'react-redux'
import { MoveNextQuestion,MovePrevQuestion } from '../hooks/fetchQuestions'
export const Quiz = () => {
  const dispach=useDispatch()

    function next(){
      console.log("clicking next");
      
      dispach(MoveNextQuestion())
    }
    function prev(){
      dispach(MovePrevQuestion())
    }
   const  trace= useSelector(state=>state.questions.trace)
   useEffect(()=>{
    console.log(trace);
   })

  return (
    <div className="container">
        <h1 className='title
         text-l'>Quiz</h1>
         <Questions/>
         <div className="grid">
            <button className={`btn prev ${trace <= 0 ? 'disabled' : ''}`} disabled={trace===0}  onClick={prev}>Back</button>
            <button className="btn next" onClick={next}>Next</button>
         </div>
    </div>
  )
}
