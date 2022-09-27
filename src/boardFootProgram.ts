/**
 * The program is the classic
 * boardFoot program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-09-26
 */

import promptSync from 'prompt-sync'

// These are my constants and variables for my program
const board = 144
const min = 0

// These are here for the boardFoot function.
/**
 * @param {number} height of board.
 * @param {number} width of board.
 * @returns {number} length of the wood.
 */
function boardFoot(height: number, width: number): number {
  const userLength = Math.round(board / (width * height))
  return userLength
}

// This is the introduction to my program text.
console.log(
  'This program figuers out the length!',
  '(1 board foot = 144 inches³ of wood)'
)

const prompt = promptSync()

// let userInput = any number that is greater than 0
// any under will automatically get caught in the try
// and catch.
const userInput = prompt('Enter your width: ')
const width = parseFloat(userInput)
const userInputTwo = prompt('Enter your height: ')
const height = parseFloat(userInputTwo)

// this checks if the user inputted a valid item
// the input has to be greater than 0, or it can not
// be a string.
if (width <= min || height <= min) {
  console.log('Invalid Number!')
} else if (isNaN(width) || isNaN(height)) {
  console.log('Invalid Input!')
} else {
  const userLength = boardFoot(height, width)
  console.log(`The Boardfoot should be ${userLength} inch(es) long!`)
}
console.log('\nDone.')
