import React from 'react'

function LearnEvent() {
    const handleClick1=(e)=>{
       e.preventDefault()
       console.log("button click1");
    }
  return (
   <>
   {/*Without Argument */}
  <button onClick={handleClick1}>Click Me!</button>
   
   </>
  )
}

export default LearnEvent
