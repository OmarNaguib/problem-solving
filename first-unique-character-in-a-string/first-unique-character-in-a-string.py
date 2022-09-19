class Solution:
    def firstUniqChar(self, s: str) -> int:
        encountered,unique=[],[]
        for i in s:
            if i not in encountered:
                encountered.append(i)
                unique.append(i)
            elif i in unique:
                unique.remove(i)
        return -1 if unique==[] else s.index(unique[0])