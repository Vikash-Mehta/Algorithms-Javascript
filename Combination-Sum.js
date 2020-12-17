// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
// Example:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Javascript solution

var findNumbers = function(candidates, target, result, ele, i) {
    if (target < 0) {
        return;
    }
    
    if (target === 0) {
        result.push([...ele]);
        return;
    }
    
    while (i < candidates.length && target - candidates[i] >= 0) {
        ele.push(candidates[i]);
        
        findNumbers(candidates, target - candidates[i], result, ele, i++);
        i++;
        
        ele.pop(); 
    }
};

var combinationSum = function(candidates, target) {
    const result = [];
    const ele = [];
    candidates = candidates.sort((a,b)=> a-b);
    
    findNumbers(candidates, target, result, ele, 0);
    
    return result;
};
