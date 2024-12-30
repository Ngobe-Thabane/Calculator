import { OPERATIONS , ACTIONS} from "./Enums.js";


function evaluate(operation, num1, num2){

  switch(operation){

    case OPERATIONS.add:
      return num1 + num2;
    case OPERATIONS.subtract:
      return num1 - num2;
    case OPERATIONS.multiply:
      return num1 * num2;
    case OPERATIONS.devide:
      return num1 / num2;
  }
}


export function calculateOperations(state, {type, digit, operation}){

  switch(type){

    case ACTIONS.InsertDigit:
      return {
        ...state,
        currentValue : parseFloat(`${state.currentValue}${digit}`)
      }

    case ACTIONS.Operation:

      if(operation !== OPERATIONS.equal){
        return {
          ...state,
          prevValue: parseFloat(state.currentValue),
          currentValue: '',
          operation : operation
        }
      }

      return  {
        ...state,
        currentValue: evaluate(state.operation, state.prevValue, state.currentValue),
        prevValue: '',
        operation: ''
      }

    default:
      return state;
  }
}