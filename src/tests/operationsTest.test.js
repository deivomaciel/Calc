import { operations } from "../useCases/operations"

describe('Add two numbers', () => {
  it('Should add to numbers', () => {
    const case1 = operations.add(2, 3)
    const case2 = operations.add(1, 5)
    
    expect(case1).toBe(5)
    expect(case2).toBe(6)
  })

  it('Should add a negative number to a positive number', () => {
    const case3 = operations.add(-3, 5)
    const case4 = operations.add(3, -5)
    
    expect(case3).toBe(2)
    expect(case4).toBe(-2)
  })
})

describe('Multiply two number', () => {
  it('Should multiply two positive numbers', () => {
    const case5 = operations.multiply(2, 8)
    const case6 = operations.multiply(3, 4)

    expect(case5).toBe(16)
    expect(case6).toBe(12)
  })

  it('Should multiply two negavite numbers', () => {
    const case7 = operations.multiply(-3, -2)

    expect(case7).toBe(6)
  })
})

describe('Subtract two numbers', () => {
  it('Should subtract two positive numbers', () => {
    const case8 = operations.subtract(6, 2)
    const case9 = operations.subtract(2, 5)
    
    expect(case8).toBe(4) 
    expect(case9).toBe(-3)
  })
})

describe('Divide two numbers', () => {
  it('Should divide two numbers greater than zero', () => {
    const case10 = operations.divide(10, 2)
    const case11 = operations.divide(5, 2)

    expect(case10).toBe(5)
    expect(case11).toBe(2.5)
  })

  it('Should return infinity to n / 0', () => {
    const case12 = operations.divide(2, 0)

    expect(case12).toBe(Infinity)
  })

  it('Should return Not a Number to 0 / 0', () => {
    const case12 = operations.divide(0, 0)

    expect(case12).toBe(NaN)
  })
})