class Solution:
    def myAtoi(self, s: str) -> int:
        def check_white(s):
            for i in range(len(s)):
                if s[i]!= " ":
                    if not(s[i].isnumeric() or s[i] in ["+","-"]): return "0"
                    return s[i:]
            return "0"
                
        def check_signs(s):
            if s[0] == "-": return s[1:],-1
            elif s[0]== "+": return s[1:], 1
            else: return  s, 1
        def get_num(tupl):
            s,sign=tupl
            result=""
            for i in s: 
                if i.isnumeric(): result+=i
                else: break
            if len(result) == 0 : return 0
            if sign ==1:
                return min(int(result),2**31-1)
            elif sign ==-1:
                return max(-1*int(result),-2**31)
        if len(s) ==0: return 0 
        return get_num(check_signs(check_white(s)))
                
        
