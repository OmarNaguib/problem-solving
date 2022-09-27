class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        for i in range(len(haystack)-len(needle)+1):
            result=True
            for j in range(len(needle)):
                if not needle[j] ==haystack[j+i]:
                    result=False
                    break
            if result: return i
        return -1
            
        