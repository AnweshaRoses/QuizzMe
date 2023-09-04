import React from 'react'
import { Questions } from './Questions'
export const Quiz = () => {
    function next(){

    }
    function prev(){

    }
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
