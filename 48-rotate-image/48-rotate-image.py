class Solution:
    def rotate(self, matrix):
        """
        Do not return anything, modify matrix in-place instead.
        """
        length=len(matrix)
        for beg in range(length//2):
            end= length-beg-1           
            for i in range(end-beg):
                j= end-i
                matrix[beg+i][end],matrix[end][end-i],matrix[end-i][beg],matrix[beg][beg+i]= matrix[beg][beg+i],matrix[beg+i][end],matrix[end][end-i],matrix[end-i][beg]
            
            
            
