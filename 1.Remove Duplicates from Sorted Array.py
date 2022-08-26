""" problem link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/ """

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        past=nums[0]
        i=0
        while i < len(nums)-1:
            if nums[i+1] == past:
                del nums[i]
            else:
                past=nums[i+1]
                i+=1


        return len(nums)
            
