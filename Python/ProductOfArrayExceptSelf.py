def productExceptSelf(self, nums: List[int]) -> List[int]:
    answer = []
    pre = 1
    post = 1

    for i in range(len(nums)): 
        if (i == 0):
            answer.append(pre)
        else:
            pre *= nums[i - 1]
            answer.append(pre)
        
    for i in range(len(nums) -1, -1, -1): 
        if (i == len(nums) - 1):
            answer[i] * post
        else:
            post *= nums[i + 1]
            answer[i] *= post
    
    return answer
