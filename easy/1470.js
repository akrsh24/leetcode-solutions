/**
 * 1470. Shuffle the Array
 */

var shuffle = function (nums, n) {
    let shuffledArray = [], idx = 0;
    for (let index = 0; index < n; index++) {
        shuffledArray[index] = nums[idx];
        shuffledArray[index + 1] = nums[idx + n];
        idx++;
    }
    console.log(shuffledArray);
    return shuffledArray
};

shuffle([2, 5, 1, 3, 4, 7], 3)

// [2,3,5,4,1,7]