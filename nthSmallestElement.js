/**
 * Given an array/list of integers, this function finds the Nth smallest element in the array.
 * @param {*} arr An array of numbers
 * @param {*} pos The nth element to find
 * @returns The nth smallest element in the array
 */
function nthSmallest(arr, pos){
    return arr.sort((a,b) => a-b)[pos-1]
  }