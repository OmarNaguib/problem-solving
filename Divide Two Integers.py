#exceeds time limit
#needs dividing by bit manipulation instead of subtraction
#learned about copysign + multiplying 2 numbers to see if they have opposite signs

class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        import math
        quotient=0
        sign= -1 if math.copysign(1,dividend)!=math.copysign(1,divisor) else 1
        dividend,divisor=abs(dividend),abs(divisor)
        while True:
            dividend-=divisor
            if math.copysign(1,dividend)!=math.copysign(1,divisor) : return quotient*sign
            quotient+=1
            if quotient==2**31-1 or quotient*sign==-2**31: return quotient*sign
