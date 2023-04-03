import { calc } from '../useCases/calc'

describe('Return a list of operation', () => { // Testando a função filterNumbers()
  it('Should convert the string "2+2*3" into an array [2, +, 2, * ,3]', () => {
    const array = calc.filterNumbers('2+2*3')
    expect(array).toEqual(['2', '+', '2', '*', '3'])
  })

  it('Should return ["2.5", "+", "2.5", "*", "2"] from the string "2.5+2.5*2"', () => {
    const array = calc.filterNumbers('2.5+2.5*2')
    expect(array).toEqual(["2.5", "+", "2.5", "*", "2"])
  })

  it('Should return ["21", "+", "2", "*", "20"] from the string "21+2*20"', () => {
    const array = calc.filterNumbers('21+2*20')
    expect(array).toEqual(["21", "+", "2", "*", "20"])
  })
})

describe('Returns the result of a numeric expression', () => { // Testando a função calculateExpression()
  it('Should return 8 from 2 + 2 * 3', () => {
    const expression = calc.filterNumbers('2+2*3')
    const result = calc.calculateExpression(expression)
    expect(result).toBe(8)
  })

  it('Should return 7.5 from 2*3/4*5', () => {
    const expression = calc.filterNumbers('2*3/4*5')
    const result = calc.calculateExpression(expression)
    expect(result).toBe(7.5)
  })

  it('Should return 7.5 from 2*3-1/2+3', () => {
    const expression = calc.filterNumbers('2*3-1/2+3')
    const result = calc.calculateExpression(expression)
    expect(result).toBe(8.5)
  })

  it('Should return 7.5 from 10*3-1/2+450-2.6', () => {
    const expression = calc.filterNumbers('10*3-1/2+45-2.6')
    const result = calc.calculateExpression(expression)
    expect(result).toBe(71.9)
  })
})