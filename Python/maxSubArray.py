def maxSubArray(self, nums: List[int]) -> int:
    maximum = float('-inf')
    current = 0 

    for num in nums:
        current += num

        if current > maximum:
            maximum = current
        if current < 0:
            current = 0
    return maximum 

# O(n) time, O(1) space complexity. 