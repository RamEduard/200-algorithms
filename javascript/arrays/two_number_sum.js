/**
 * Two Number Sum
 *
 * Input:
 *  
 *  array = [3, 5, -4, 8, 11, 1, -1, 6]
 *  targetSum = 10
 *
 * Output:
 *
 *  [-1, 11]
 */

function twoNumberSum(inputArray, targetSum) {
    for (let i = 0; i < inputArray.length - 1; i++) {
        const firstNum = inputArray[i]

        for (let j = i + 1; j < inputArray.length; j++) {
            const secondNum = inputArray[j]

            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum]
            }
        }
    }

    return []
}

module.exports = twoNumberSum