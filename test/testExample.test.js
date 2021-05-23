test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

test('object assignment', () => {
  const data = { one: 1 }
  data.two = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

// STRINGS
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

// ARRAY
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
]

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer')
})

// ERORR CONTROL
function compileAndroidCode () {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)
})
