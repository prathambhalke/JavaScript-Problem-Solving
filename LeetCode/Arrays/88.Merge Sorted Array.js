// Return the merged array of the two arrays
// Note : The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 

var merge = function(nums1, m, nums2, n) {
    let i = m;
    let j = 0;
    
    for(i; j < n; i++,j++) {
      nums1[i] = nums2[j]
    }
    return nums1.sort((a,b) => a - b)
};


const nums1 = [1,2,3,0,0,0];
const m = 3; // length of the nums1 Array
const nums2 = [2,5,6];
const n = 3; // length of the nums2 Array

// Output: [1,2,2,3,5,6]

// const nums1 = [1], m = 1;
// const nums2 = [], n = 0;

// Output: [1]

// const nums1 = [0], m = 0;
// const nums2 = [1], n = 1;

// Output: [1]

console.log(merge(nums1, m, nums2, n))

// Time complexity : O((m + n) log (m + n))
// Space complexity : O(1).