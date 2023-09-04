import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Quiz } from './Quiz'
import './root.css'
export const Root = () => {
    const inputRef=useRef(null)
  return (
    <div className='container'>
        <h1 className='title
         text-l'>Word Wizard</h1>
        <ol>
            <li>You Will be asked questions based on the language you choose </li>
            <li>Points for each question will be awarded based on its difficulty </li>
            <li>Each Question has only ONE correct option</li>
            <li>You can Navigate Back and Forth between the questions</li>
            <li>Result will be Displayed after the Quiz Ends</li>
        </ol>
        <form  id="form">
            <input ref={inputRef} type="text" placeholder='Username*' />
        </form>
        <div className="start">
        <Link className='btn' to={'Quiz'}>Start Quiz</Link>
        </div>
    </div>
  )
}
