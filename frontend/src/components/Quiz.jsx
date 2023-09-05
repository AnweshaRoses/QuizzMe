import React, { useEffect } from 'react'
import { Questions } from './Questions'
import {useSelector} from 'react-redux'
export const Quiz = () => {
    function next(){

    }
    function prev(){

    }
   const state= useSelector(state=>state)
   useEffect(()=>{
    console.log(state);
   })

  return (
    <div className="container">
        <h1 className='title
         text-l'>Quiz</h1>
         <Questions/>
         <div className="grid">
            <button className="btn prev" onClick={prev}>Back</button>
            <button className="btn next" onClick={next}>Next</button>
         </div>
    </div>
  )
}
