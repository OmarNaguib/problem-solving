class Solution:
    def reverse(self, x: int) -> int:
        reverse,sign=int(str(abs(x))[::-1]),-1 if x < 0 else 1
        return sign*reverse if (reverse <=2**31-1 and reverse*sign >=-2**31) else 0
            
        