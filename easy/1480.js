/**
 * 1480. Running Sum of 1d Array
 */

var runningSum = function (nums) {
    let sumArray = [];
    nums.reduce(((acc, curr) => {
        let sum = acc + curr;
        sumArray.push(sum);
        return sum;
    }), 0);

    return sumArray;
};
