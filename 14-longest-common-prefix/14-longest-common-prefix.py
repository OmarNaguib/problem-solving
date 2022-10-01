class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        common= min(strs,key=len)
        update=n=len(common)
        for i in strs:
            for j in range(n):
                if common[n-j-1]!=i[n-j-1]: update=n-(j+1)
            common,n=common[:update],update
        return common
            
        