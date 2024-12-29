
import React from 'react'
import { ACTIONS } from './Calculator'

export default function Operation({dispatch, operation}) {
  return (
    <button onClick={()=>dispatch({ type: ACTIONS.Operation, operation: operation})} className='operation'>
      {operation}
    </button>
  )
}
