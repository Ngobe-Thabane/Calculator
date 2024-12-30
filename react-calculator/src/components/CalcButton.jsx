import React from 'react'
import { ACTIONS } from '../JS/Enums.js'


export default function CalcButton({dipatch, digit,classname}) {
  return (
    <button onClick={()=>dipatch({ type:ACTIONS.ADD_DIGIT ,digit:digit} )} className={classname}>{digit}</button>
  )
}
