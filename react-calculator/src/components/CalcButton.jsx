import React from 'react'
import { ACTIONS } from '../JS/Enums.js'


export default function CalcButton({dipatch, digit}) {
  return (
    <button onClick={()=>dipatch({ type:ACTIONS.InsertDigit ,digit:digit} )}>{digit}</button>
  )
}
