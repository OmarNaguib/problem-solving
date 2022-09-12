class Solution:
    def rotate(self, matrix):
        """
        Do not return anything, modify matrix in-place instead.
        """
        length=len(matrix)
        for beg in range(length//2):
            end= length-beg-1           
            for i in range(end-beg):
                j,k=beg+i,end-i
                matrix[j][end],matrix[end][k],matrix[k][beg],matrix[beg][j]= matrix[beg][j],matrix[j][end],matrix[end][k],matrix[k][beg]
            
            
            
