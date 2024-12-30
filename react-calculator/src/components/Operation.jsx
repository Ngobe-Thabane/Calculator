
import React from 'react'
import { ACTIONS } from '../JS/Enums.js'

export default function Operation({dispatch, operation}) {
  return (
    <button onClick={()=>dispatch({ type: ACTIONS.Operation, operation: operation})} className='operation'>
      {operation}
    </button>
  )
}
