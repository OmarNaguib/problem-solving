class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        columns= [[] for i in range(9) ]
        squares=[]
        for i in range(9):
            for j in range(9):
                columns[j].append(board[i][j]) if board[i][j] != "." else None
        for i in range(0,9,3):
            for j in range(0,9,3):
                squares.append([])
                for k in range(3):
                    for l in range(3):
                        (squares[-1].append(board[i+k][j+l])) if board[i+k][j+l] != "." else None
        for i in board:
            for j in board:
                if j ==".":
                    del (j) 
        for i in range(9):
            board[i][:]=[x for x in board[i] if x !="."]
            columns[i][:]=[x for x in columns[i] if x !="."]
            squares[i][:]=[x for x in squares[i] if x !="."]
            if len(board[i]) != len(set(board[i]))  or len(columns[i])!= len(set(columns[i])) or len(squares[i])!= len(set(squares[i]))   :
                return False
        return True
                        
                
        