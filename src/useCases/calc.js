import { operations } from './operations'

const filterNumbers = expression => {
  const arrayExpression = expression.split('')

  for (let i = 0; i < arrayExpression.length - 1; i++) {
    if(!isNaN(arrayExpression[i]) && !isNaN(arrayExpression[i + 1])) {
        arrayExpression[i] += arrayExpression[i + 1]
        arrayExpression.splice((i + 1), 1)
      
    } else if (arrayExpression[i] == '.') {
      arrayExpression[i - 1] = `${arrayExpression[i-1]}.${arrayExpression[i + 1]}`
      arrayExpression.splice(i, 1)
      arrayExpression.splice(i, 1)
    }
  }
  return arrayExpression
}

const calculateExpression = expression => {
  const expressionToCalculate = expression
  
  const operators = {
    'x'(numberA, numberB) {
      return operations.multiply(numberA, numberB)
    },

    '/'(numberA, numberB) {
      return operations.divide(numberA, numberB)
    },

    '+'(numberA, numberB) {
      return operations.add(numberA, numberB)
    },

    '-'(numberA, numberB) {
      return operations.subtract(numberA, numberB)
    },
  }
  
  for(let i = 0; i < expressionToCalculate.length - 1; i++) {
    if(expressionToCalculate[i] == 'x' || expressionToCalculate[i] == '/') {
      expressionToCalculate[i - 1] = operators[expressionToCalculate[i]](Number(expressionToCalculate[i - 1]), Number(expressionToCalculate[i + 1]))
      expressionToCalculate.splice(i, 1)
      expressionToCalculate.splice(i, 1)
      i = 0
    }
  }
  
  for(let i = 0; i < expressionToCalculate.length - 1; i++) {
    if(expressionToCalculate[i] == '+' || expressionToCalculate[i] == '-') {
      expressionToCalculate[i - 1] = operators[expressionToCalculate[i]](Number(expressionToCalculate[i - 1]), Number(expressionToCalculate[i + 1]))
      expressionToCalculate.splice(i, 1)
      expressionToCalculate.splice(i, 1)
      i = 0
    }
  }
  return Number(expressionToCalculate[0])
}

export const calc = {
  filterNumbers, 
  calculateExpression
}