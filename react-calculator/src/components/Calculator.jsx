
import React, { useReducer } from 'react'
import CalcButton from './CalcButton'
import Operation from './Operation';

export const ACTIONS = {
  InsertDigit: 'Insert Digit',
  Operation: 'Operation'
}

function reducer(state, {type, digit, operation}){

  switch(type){
    case ACTIONS.InsertDigit:
      return {
        ...state,
        currentValue : parseFloat(`${state.currentValue}${digit}`)
      }
    case ACTIONS.Operation:
      if(operation !== '='){
        return {
          ...state,
          prevValue: parseFloat(state.currentValue),
          currentValue: '',
          operation : operation
        }
      }
      if(state.operation === '+'){
        return  {
          ...state,
          currentValue: state.currentValue + state.prevValue,
          prevValue: '',
          operation: ''
        }
      }
      else if(state.operation === '-'){
        return  {
          ...state,
          currentValue: state.prevValue - state.currentValue,
          prevValue: '',
          operation: ''
        }
      }
      else if(state.operation === 'x'){
        return  {
          ...state,
          currentValue: state.currentValue * state.prevValue,
          prevValue: '',
          operation: ''
        }
      }

      return state;
  }
  return state;
}

export default function Calculator() {
  const [state, dispacth] = useReducer(reducer, {currentValue:'', prevValue:'', operation: ''});

  return (

    <section className='calculator-grid'>    
      <div className='user-inputs'>
        <div className='operations'></div>
        <div className='current-value'>{state.currentValue}</div>
      </div>

      <CalcButton digit={7} dipatch={dispacth} />
      <CalcButton digit={8} dipatch={dispacth} />
      <CalcButton digit={9} dipatch={dispacth} />
      <Operation operation={'x'} dispatch={dispacth}  />

      <CalcButton digit={4} dipatch={dispacth} />
      <CalcButton digit={5} dipatch={dispacth} />
      <CalcButton digit={6} dipatch={dispacth} />
      <Operation operation={'-'} dispatch={dispacth} />

      <CalcButton digit={1} dipatch={dispacth} />
      <CalcButton digit={2} dipatch={dispacth} />
      <CalcButton digit={3} dipatch={dispacth} />
      <Operation operation={'+'} dispatch={dispacth} />

      <CalcButton digit={0} dipatch={dispacth} />
      <CalcButton digit={'.'} dipatch={dispacth} />
      <Operation operation={'AC'} dispatch={dispacth} />
      <Operation operation={'='} dispatch={dispacth} />

    </section>
  )
}
