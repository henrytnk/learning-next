'use client'

import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="px-20 py-10">
      <h2>
        Counter: {counter}
      </h2>
      <button 
        className="bg-blue-400 px-4 py-2 rounded-md mt-4 text-gray-100 hover:bg-blue-600 transition"
        onClick={() => setCounter(prev => prev + 1)}
      >
        Increase
      </button>
    </div>
  )
}

export default Counter