
import React, { useReducer } from 'react'

import CalcButton from './CalcButton'
import Operation from './Operation';

import { OPERATIONS, STATE} from '../JS/Enums.js';
import {calculateOperations} from '../JS/CalculateOperations.js'


export default function Calculator() {

  const [state, dispacth] = useReducer(calculateOperations, STATE);

  return (

    <section className='calculator-grid'>    
      <div className='user-inputs'>
        <div className='operations'></div>
        <div className='current-value'>{state.currentValue}</div>
      </div>

      <CalcButton digit={7} dipatch={dispacth} />
      <CalcButton digit={8} dipatch={dispacth} />
      <CalcButton digit={9} dipatch={dispacth} />
      <Operation operation={OPERATIONS.multiply} dispatch={dispacth}  />

      <CalcButton digit={4} dipatch={dispacth} />
      <CalcButton digit={5} dipatch={dispacth} />
      <CalcButton digit={6} dipatch={dispacth} />
      <Operation operation={OPERATIONS.subtract} dispatch={dispacth} />

      <CalcButton digit={1} dipatch={dispacth} />
      <CalcButton digit={2} dipatch={dispacth} />
      <CalcButton digit={3} dipatch={dispacth} />
      <Operation operation={OPERATIONS.add} dispatch={dispacth} />

      <CalcButton digit={0} dipatch={dispacth} />
      <CalcButton digit={'.'} dipatch={dispacth} />
      <Operation operation={OPERATIONS.clear} dispatch={dispacth} />
      <Operation operation={OPERATIONS.equal} dispatch={dispacth} />

    </section>
  )
}
