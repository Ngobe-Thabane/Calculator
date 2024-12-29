import React from 'react'
import { ACTIONS } from './Calculator.jsx'


export default function CalcButton({dipatch, digit}) {
  return (
    <button onClick={()=>dipatch({ type:ACTIONS.InsertDigit ,digit:digit} )}>{digit}</button>
  )
}
