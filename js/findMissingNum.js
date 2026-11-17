function findMissingNumber(nums) {
    const numArr = nums.sort((a, b) => a - b);
    for (let i = 0; i <= numArr.length; i++) {
        if (numArr[i] !== i) {
            return i;
        }
    }
}

findMissingNumber([3, 0, 1]);