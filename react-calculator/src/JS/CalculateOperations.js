import { OPERATIONS , ACTIONS, STATE} from "./Enums.js";


function evaluate(state){

  const {prevValue, currentValue, operation} = state;

  if(prevValue === '' || currentValue === '' || currentValue === '') return state;

  let computation;

  switch(operation){

    case OPERATIONS.add:
      computation = parseFloat(prevValue) + parseFloat(currentValue);
      break;
    case OPERATIONS.subtract:
      computation = parseFloat(prevValue) - parseFloat(currentValue);
      break;
    case OPERATIONS.multiply:
      computation = parseFloat(prevValue) * parseFloat(currentValue);
      break;
    case OPERATIONS.devide:
      computation = currentValue !== '0' ?  parseFloat(prevValue) / parseFloat(currentValue): "Cant't divide by zero";
      break;
  }

  return {...state, currentValue: `${computation}`, prevValue:'', operation:'', overide: true};

}

function addDigit(state, digit){

  if(state.currentValue === '0' && digit === '0') return state;
  if (state.currentValue.includes('.') && digit === '.') return state;
  
  if(state.overide){
    return {
      ...state,
      currentValue: `${digit}`,
      overide: false
    }
  }

  return {
        ...state,
        currentValue : `${state.currentValue}${digit}`
      }
}

function deleteDigit(state){

  if(state.currentValue === null) return state;

  return {
    ...state,
    currentValue: state.currentValue.slice(0, -1)
  }
}

function insertOperator(state, operation){

  return {
          ...state,
          prevValue: (state.operation !== '' && state.prevValue !== '' && state.currentValue !== '') 
                    ? evaluate(state).currentValue : state.currentValue,
          currentValue: '',
          operation : operation
        }

}

export function calculateOperations(state, {type, digit, operation}){

  switch(type){

    case ACTIONS.ADD_DIGIT:
      return addDigit(state, digit);

    case ACTIONS.DEL:
      return deleteDigit(state);

    case ACTIONS.EVALUATE:
      return evaluate(state);
      
    case ACTIONS.CHOOSE_OPERATION:
      return insertOperator(state, operation);

    case ACTIONS.CLEAR:
      return {STATE};

    default:
      return state;
  }
}