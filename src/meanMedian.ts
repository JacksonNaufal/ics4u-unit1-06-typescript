/**
 * The program is the classic
 * mean, median calculator
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-09-30
 */

// get arguments
//
import { readFileSync } from 'fs'

/**
 *
 * COMMENT ADD LATER
 *
 * @param {Array<number>} arrayOfIntegers array of ins from set files
 * @returns {number} the mean of the numbers
 */

function mean(arrayOfIntegers: number[], quantity: number): number {
  let meanCalc = 0
  let calcMean = 0

  // loop that goes through array, gathers quantity from length given,
  // and adds up all the numbers than divides them by the quantity to find
  // the average/mean of the numbers
  for (let total = 0; total < quantity; total++) {
    meanCalc += arrayOfIntegers[total]
  }
  calcMean = meanCalc / quantity
  return calcMean
}

function median(arrayOfIntegers: number[], quantity: number): number {
  let medianCalc = 0

  const fixedArray = arrayOfIntegers.sort(function (a, b) {
    return a - b
  })
  if (quantity % 2 === 0) {
    medianCalc = (fixedArray[quantity / 2] + fixedArray[quantity / 2 - 1]) / 2
  } else {
    medianCalc = fixedArray[(quantity - 1) / 2]
  }
  return medianCalc
}

const filepath = 'set1.txt'
const arrayOfIntegers = []
const file = readFileSync(filepath, 'utf8')
const newArray = file.split(/\r?\n/)

for (let total = 0; total < newArray.length; total++) {
  arrayOfIntegers.push(Number(newArray[total]))
}

// pop last element, since it will be empty (the EOF)
newArray.pop()

const quantity = arrayOfIntegers.length

const calcMean = mean(arrayOfIntegers, quantity)
const medianCalc = median(arrayOfIntegers, quantity)

console.log('Mean, Median, calculation')
console.log('Calculating stats...')
console.log(`The mean is, ${String(calcMean)}`)
console.log(`The median is, ${String(medianCalc)}`)

console.log(`\nDone!`)
