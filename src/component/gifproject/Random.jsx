import React, { useState } from 'react'

function Random() {

  const [gif, setGif] = useState ("");

  function clickHandler() {

  }
  return (
    <div className='w-1/2 h-112.5 bg-green-500 mt-22 rounded-lg border border-black flex
    flex-col items-center gap-y-5'>
      <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
      <img src={gif} alt="image" width={450}/>
      <button onClick={clickHandler}
      className='w-10/12 bg-amber-300 text-lg py-2 rounded-lg'>
        Generate
        </button>
    </div>
  )
}

export default Random