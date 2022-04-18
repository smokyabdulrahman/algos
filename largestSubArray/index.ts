// $ largestSubarraySum([3,1,4,1,5,9,2,6], 3)
// $ [9, 2, 6]

function largestSubarraySum(array: number[], size: number): number[] {
    let i = 0;
    let j = 0;
    let startingIndex = i;
    let sum = 0;
    
    // init inital sum
    while (j < size && j < array.length) {
        sum += array[j];
        j++;
    }
    // init max sum
    let maxSum = sum;

    // go step by step comparing to max sum
    while (j < array.length) {
        sum -= array[i];
        i++;
        sum += array[j];
        j++;

        if (sum > maxSum) {
            maxSum = sum;
            startingIndex = i;
        }
    }

    return array.slice(startingIndex, startingIndex + size);
}

console.log(largestSubarraySum([3,1,4,1,5,9,2,6,1,1,1], 17));
