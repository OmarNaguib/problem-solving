""" problem link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/ """

#extra: instead of computing the whole list and then testin, i can instead calculate each gradient, test that it's larger than zero and sum it, in one for loop.

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        result=0
        gradient = [prices[x]-prices[x-1] for x in range(1,len(prices))]
        for i in gradient: 
            if i >0: result+=i
        return result
