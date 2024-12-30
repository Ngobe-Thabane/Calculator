
import React, { useReducer } from 'react'

import CalcButton from './CalcButton'
import Operation from './Operation';

import { OPERATIONS, STATE, ACTIONS} from '../JS/Enums.js';
import {calculateOperations} from '../JS/CalculateOperations.js'


export default function Calculator() {

  const [state, dispacth] = useReducer(calculateOperations, STATE);

  return (

    <section className='calculator-grid'>  
      
      <div className='user-inputs'>
        <div className='operations'>
          {state.prevValue}{state.operation}{!state.overide ? state.currentValue : ''}
        </div>
        <div className='current-value'>{state.currentValue}</div>
      </div>

      <Operation dispatch={dispacth} action={ACTIONS.DEL} operation={OPERATIONS.DEl} className={'clear'}/>
      <Operation dispacth={dispacth} action={ACTIONS.CLEAR} operation={OPERATIONS.clear}/>
      <Operation dispatch={dispacth} action={ACTIONS.CHOOSE_OPERATION} operation={OPERATIONS.devide} />
      
      <CalcButton digit={'7'} dipatch={dispacth} />
      <CalcButton digit={'8'} dipatch={dispacth} />
      <CalcButton digit={'9'} dipatch={dispacth} />
      <Operation operation={OPERATIONS.multiply} dispatch={dispacth} action={ACTIONS.CHOOSE_OPERATION} />

      <CalcButton digit={'4'} dipatch={dispacth} />
      <CalcButton digit={'5'} dipatch={dispacth} />
      <CalcButton digit={'6'} dipatch={dispacth} />
      <Operation operation={OPERATIONS.subtract} dispatch={dispacth} action={ACTIONS.CHOOSE_OPERATION} />

      <CalcButton digit={'1'} dipatch={dispacth} />
      <CalcButton digit={'2'} dipatch={dispacth} />
      <CalcButton digit={'3'} dipatch={dispacth} />
      <Operation operation={OPERATIONS.add} dispatch={dispacth} action={ACTIONS.CHOOSE_OPERATION} />

      <CalcButton digit={'0'} dipatch={dispacth} />
      <CalcButton digit={'.'} dipatch={dispacth} />
      <Operation operation={OPERATIONS.equal} dispatch={dispacth} action={ACTIONS.EVALUATE} className={'equal'} />

    </section>
  )
}
