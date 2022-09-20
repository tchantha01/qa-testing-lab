let testingLab = require("./functions")

test('Test should run and 2 should equal 2', () => {
    expect(testingLab.returnTwo()).toBe(2)
  })

  test('Test should return Hello, James',  () => {
    expect(testingLab.greeting('James')).toBe('Hello, James')

  })

  test('Test should return Hello, Jill',  () => {
    expect(testingLab.greeting('Jill')).toBe('Hello, Jill')
  })

  test('Test for addition', () => {
    expect(testingLab.add(1, 2)).toBe(3)
  })

  test('Test for addition', () => {
    expect(testingLab.add(5, 9)).toBe(14)
  })


  describe('Testing lab math', () => {

    test('Test for addition', () => {
      expect(testingLab.add(1, 2)).toBe(3)
    })

    test('Test for subtraction', () => {
      expect(testingLab.subtract(9, 5)).toBe(4)
    })

    test('Test for multiplication', () => {
      expect(testingLab.multiply(5, 2)).toBe(10)
    })

    test('Test for division', () => {
      expect(testingLab.divide(20, 2)).toBe(10)
    })

})