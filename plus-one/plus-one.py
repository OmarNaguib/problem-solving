class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        
        i=len(digits)-1
        digits[i]+=1
        while i>0:
            if len(digits)<2: break
            if (digits[i] > 9):
                digits[i-1]+=1
                digits[i]-=10
            i-=1
        if digits[0] > 9:
            digits[0]-=10
            digits= [1]+digits
        return digits
            
            
            
            
        