var twoSum = function(nums, target) {
    const complements = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in complements) {
            return [complements[complement], i];
        }
        complements[nums[i]] = i; 
    }
};

// Solved in O(n) time. 
// Space complexity is O(n) space complexity. 