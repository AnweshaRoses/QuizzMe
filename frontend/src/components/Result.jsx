import React from 'react'
import './result.css'
import { Link } from 'react-router-dom'
import { ResultTable } from './ResultTable'
import { useDispatch } from 'react-redux'
import { resetAllAction } from '../redux/questionReducer'
import { resetResultAction } from '../redux/resultReducer'

export const Result = () => {
  const dispach=useDispatch()
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
                <span className='bold'>05</span>
            </div>
            <div className="flex">
                <span>Total Attempts</span>
                <span className='bold'>03</span>
            </div>
            <div className="flex">
                <span>Total Points</span>
                <span className='bold'>03</span>
            </div>
         </div>
         <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
         </div>
         <div className="container">
           <ResultTable></ResultTable>
         </div>
    </div>
  )
}
