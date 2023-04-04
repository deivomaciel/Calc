import { calc } from '../useCases/calc'

describe('Return a list of operation', () => { // Testando a função filterNumbers()
  it('Should convert the string "2+2x3" into an array [2, +, 2, x ,3]', () => {
    const array = calc.filterNumbers('2+2x3')
    expect(array).toEqual(['2', '+', '2', 'x', '3'])
  })

  it('Should return ["2.5", "+", "2.5", "x", "2"] from the string "2.5+2.5x2"', () => {
    const array = calc.filterNumbers('2.5+2.5x2')
    expect(array).toEqual(["2.5", "+", "2.5", "x", "2"])
  })

  it('Should return ["21", "+", "2", "x", "20"] from the string "21+2x20"', () => {
    const array = calc.filterNumbers('21+2x20')
    expect(array).toEqual(["21", "+", "2", "x", "20"])
  })
})

describe('Returns the result of a numeric expression', () => { // Testando a função calculateExpression()
  it('Should return 8 from 2 + 2 x 3', () => {
    const expression = calc.filterNumbers('2+2x3')
    const result = calc.calculateExpression(expression)
    expect(result).toBe(8)
  })

  it('Should return 7.5 from 2x3/4x5', () => {
    const expression = calc.filterNumbers('2x3/4x5')
    const result = calc.calculateExpression(expression)
    expect(result).toBe(7.5)
  })

  it('Should return 7.5 from 2x3-1/2+3', () => {
    const expression = calc.filterNumbers('2x3-1/2+3')
    const result = calc.calculateExpression(expression)
    expect(result).toBe(8.5)
  })

  it('Should return 7.5 from 10x3-1/2+450-2.6', () => {
    const expression = calc.filterNumbers('10x3-1/2+45-2.6')
    const result = calc.calculateExpression(expression)
    expect(result).toBe(71.9)
  })
})