class Solution(object):
    def findDifference(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[List[int]]
        """
        unique1,unique2=[],[]
        set1,set2=set(nums1),set(nums2)
        result1=set([i for i in set1 if i not in set2])
        result2=set([j for j in set2 if j not in set1])
        return [result1,result2]