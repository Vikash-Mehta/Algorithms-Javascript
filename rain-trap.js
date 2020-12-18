/**
* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
* Example 1:
* Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
* Output: 6
* Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
* @return {number}
*/



var trap = function(height) {
    let sum = 0;
    let maxLeft = 0;
    let maxRight = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (maxLeft <= height[left]) {
                maxLeft = height[left];
            }
            else {
                sum += maxLeft - height[left];
            }
            
            left++;
        }
        else {
            if (maxRight <= height[right]) {
                maxRight = height[right];
            }
            else {
                sum += maxRight - height[right];
            }
            
            right--;
        }
    } 
    
    return sum;
};
