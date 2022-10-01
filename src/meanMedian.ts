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
 *
 * @param {Array<number>} arrayOfIntegers array of input from set files
 * @returns {number} the mean of the numbers
 */
function mean(arrayOfIntegers: number[]): number {
  // these are my constants and variables
  let meanCalc = 0
  let calcMean = 0
  const quantityMean = arrayOfIntegers.length - 1

  // loop that goes through array, gathers quantity from length given,
  // and adds up all the numbers than divides them by the quantity to find
  // the average/mean of the numbers
  for (let total = 0; total < quantityMean; total++) {
    meanCalc += arrayOfIntegers[total]
  }
  // this calculates the mean of the set
  calcMean = meanCalc / quantityMean
  return calcMean
}

/**
 *
 *
 * COMMENT ADD LATER
 *
 * @param {Array<number>} arrayOfIntegers of input from set files
 * @returns {number} the mean of the numbers
 */
function median(arrayOfIntegers: number[]): number {
  // these are my constants and variables
  let medianCalc = 0
  const quantityMedian = arrayOfIntegers.length

  // this sorts my array in a way where it can find the median
  const fixedArray = arrayOfIntegers.sort(function (a, b) {
    return a - b
  })
  // this function finds the median
  if (quantityMedian % 2 === 0) {
    medianCalc =
      fixedArray[quantityMedian / 2] + fixedArray[quantityMedian - 1] / 2
  } else {
    medianCalc = fixedArray[(quantityMedian - 1) / 2]
  }
  // this returns the median
  return medianCalc
}

// This creates/defines the array
const arrayOfIntegers = []

// this is the file path used to get the sets
const filepath = 'set3.txt'
const file = readFileSync(filepath, 'utf8')
const newArray = file.split(/\r?\n/)

// gets the length, and pushes the numbers into the arrayOfIntegers
for (let total = 0; total < newArray.length; total++) {
  arrayOfIntegers.push(Number(newArray[total]))
}

// pop last element, since it will be empty (the EOF)
newArray.pop()

const calcMean = mean(arrayOfIntegers)
const medianCalc = median(arrayOfIntegers)

console.log('Mean, Median, calculation')
console.log('Calculating stats...')
console.log(`The mean is, ${String(calcMean)}`)
console.log(`The median is, ${String(medianCalc)}`)

console.log('\nDone!')
