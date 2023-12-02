//aquí se refactoriza
// if ( typeof number !== 'number') throw new Error()
// if ( number === undefined ) throw new Error()
// if ( number < 0 ) throw new Error()
// if ( number === 0 ) throw new Error()
// if ( !number % 1 == 0 ) throw new Error()
export const fizzBuzz = number => {

	if ( isNaN(number) || number < 0 || number === 0 || !Number.isInteger(number)) throw new Error()

  const multliples = { 3: 'fizz', 5: 'buzz'}
  let text = ''

  Object
    .entries(multliples)
    .forEach(([multiple, word]) => {
      if ( number % multiple === 0 ) return text += word
    })

	return text === '' ? number : text
};