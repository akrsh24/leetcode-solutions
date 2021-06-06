/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const originalNums = nums.slice();
    //sort nums
    nums.sort((a, b) => { return a - b });
    let res = slideWindow(originalNums, nums, target);
    return res;
};

function slideWindow(originalNums, arr, target) {
    let start = 0, end = arr.length - 1;
    let indexArray = [];
    console.log(originalNums,start,end);
    while (start < end) {
        if (arr[start] + arr[end] === target) {
            let x = originalNums.indexOf(arr[start]);
            let y = originalNums.lastIndexOf(arr[end]);
            indexArray.push(x);
            indexArray.push(y);
            break;
        }

        else if (arr[start] + arr[end] < target)
            start++;

        else
            end--;
    }
    indexArray.forEach(idx => console.log(idx));
    return indexArray;
}

// twoSum([2,7,11,15],9);