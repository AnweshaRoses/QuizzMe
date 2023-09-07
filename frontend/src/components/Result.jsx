import React, { useEffect } from 'react'
import './result.css'
import { Link } from 'react-router-dom'
import { ResultTable } from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/questionReducer'
import { resetResultAction } from '../redux/resultReducer'
import { attempts_Number, earnPoints_Number } from '../helper/helper'

export const Result = () => {
  const dispach=useDispatch()
  const {questions:{queue,answers},result:{result,userId}}=useSelector(state=>state)
  useEffect(()=>{
    console.log(earnPoints);
  })
  const totalPoints=queue.length*10;
  const attempts=attempts_Number(result)
  const earnPoints=earnPoints_Number(result,answers,10)
    function onRestart(){
      dispach(resetAllAction()) 
      dispach(resetResultAction()) 
    }
  return (
    <div className='container'>
         <h1 className='title
         text-l'>Word Wizard</h1>
         <div className="resul flex-center">
            <div className="flex">
                <span>Username</span>
                <span className='bold'>Anwesha</span>
            </div>
            <div className="flex">
                <span>Total Questions</span>
                <span className='bold'>{queue.length||0}</span>
            </div>
            <div className="flex">
                <span>Questions Attempted</span>
                <span className='bold'>{attempts||0}</span>
            </div>
            <div className="flex">
                <span>Total Points</span>
                <span className='bold'>{earnPoints||0}</span>
            </div>
         </div>
         <div className="start">
            <Link className='btn' to={'/start'} onClick={onRestart}>Restart</Link>
         </div>
         <div className="container">
           <ResultTable></ResultTable>
         </div>
    </div>
  )
}
