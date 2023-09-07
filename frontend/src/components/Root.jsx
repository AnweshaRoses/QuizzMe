import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Quiz } from './Quiz'
import './root.css'
export const Root = () => {
    const inputRef=useRef(null)



  return (
    <div className='container'>
            <div className="profile" >
            <div className="topright">
                    <div className="topbariconcontainer">
                        <spam className="topiconbag">Anwesha Mishra</spam>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="topavatar" />
                </div>
              


      </div>
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
