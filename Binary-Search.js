// Binary Search 
// Given a sorted (in ascending order) integer array nums of n elements and a target value,
// write a function to search target in nums. If target exists, then return its index, otherwise return -1.

// Javascript algorithm

var findNumber = function (arr, target, index) {
    if (arr.length === 1) {
        return arr[0] === target ? index : -1;
    }
    
    const mid = Math.floor(arr.length / 2);
    
    if (target < arr[mid]) {
        return findNumber(arr.slice(0, mid), target, index);
    }
    else {
        return findNumber(arr.slice(mid, arr.length), target, index + mid);
    }
};

var search = function(nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    return findNumber(nums, target, 0); 
};
