import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Quiz } from './Quiz'
import './root.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../redux/languageReducer'

export const Root = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language);
    const inputRef=useRef(null)


    const handleLanguageChange = (event) => {
      const newLanguage = event.target.value;
      console.log(newLanguage);
      dispatch(setLanguage(newLanguage));
  };

  return (
    <div className='container'>
            <div className="profile" >
            <div className="topright">
                    <div className="topbariconcontainer">
                        <span className="topiconbag">Anwesha Mishra</span>
                    </div>
                    <Link to='/edit'>
                    <img src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="topavatar" />
                    </Link>
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
        <form id='form'>
  <label htmlFor='languageSelect'>Select Language:</label>
  <select
    id='languageSelect'
    value={selectedLanguage}
    onChange={handleLanguageChange}
  >
    <option value='English'>English</option>
    <option value='French'>French</option>
    <option value='Spanish'>Spanish</option>
    {/* Add more language options here */}
  </select>
</form>
        <div className="start">
        <Link className='btn' to='/quiz'>Start Quiz</Link>
        </div>
    </div>
  )
}
