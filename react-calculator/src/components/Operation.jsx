
import React from 'react'

export default function Operation({dispatch, operation, action, className}) {
  return (
    <button onClick={()=>dispatch({ type: action, operation: operation})} className={`operation ${className}`}>
      {operation}
    </button>
  )
}
