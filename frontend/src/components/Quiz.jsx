import React, { useEffect ,useState} from 'react'
import { Questions } from './Questions'
import {useSelector,useDispatch} from 'react-redux'
import { MoveNextQuestion,MovePrevQuestion } from '../hooks/fetchQuestions'
import { PushAns } from '../hooks/setResult'
import {Navigate} from 'react-router-dom'
export const Quiz = () => {
  const [check, setCheck] = useState(undefined)

  const dispach=useDispatch()
  const {trace,queue} = useSelector(state=>state.questions)
  const result=useSelector(state=>state.result.result)

    function next(){
      if(trace<queue.length){
      
        dispach(MoveNextQuestion())
        dispach(PushAns(check))
      }

    }
    function prev(){
      dispach(MovePrevQuestion())
    }

   function onChecked(checked){
      console.log(checked);
      setCheck(checked)
   }
   useEffect(()=>{
    console.log(result);
   })

  //  Finish Exam After Last Question is done 
  if(result.length && result.length>=queue.length){
    return <Navigate to={'/result'} replace="true"></Navigate>
  }


  return (
    <div className="container">
        <h1 className='title
         text-l'>Quiz</h1>
         <Questions onChecked={onChecked}/>
         <div className="grid">
            <button className={`btn prev ${trace <= 0 ? 'disabled' : ''}`} disabled={trace===0}  onClick={prev}>Back</button>
            <button className="btn next" onClick={next}>Next</button>
         </div>
    </div>
  )
}
