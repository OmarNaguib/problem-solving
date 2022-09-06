class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        count=i=0
        while i < len(nums):
            if nums[i] == 0:
                del nums[i]
                count+=1
            else: i+=1
        nums[:]= nums + [0]*count
            