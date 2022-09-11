```
class Solution:
    def rotate(self, matrix):
        """
        Do not return anything, modify matrix in-place instead.
        """
        def rotate_circumference(beg,end):
            print("here")
            if end<=beg : return None
            for i in range(beg,end):
                j= end-i
                print(beg,end,i,j)
                matrix[i][end],matrix[end][j],matrix[j][beg],matrix[beg][i]= matrix[beg][i],matrix[i][end],matrix[end][j],matrix[j][beg]
            rotate_circumference(beg+1,end-1)
            
            
        end,beg=len(matrix)-1,0
        rotate_circumference(beg,end)
```
