perfectA = [
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
]

perfectB = [
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
    ["B", "W", "B", "W", "B", "W", "B", "W"],
    ["W", "B", "W", "B", "W", "B", "W", "B"],
]

N, M = input().split(" ")
N = int(N)
M = int(M)
board = []
for i in range(0, int(N)):
    board.append(list(input()))

answer = []

countA = 0
countB = 0
for i in range(0, N-7):
    for j in range(0, M-7):
        for k in range(0, 8):
            for l in range(0, 8):
                if board[i + k][j+l] != perfectA[k][l]:
                    countA = countA + 1
                if board[i + k][j+l] != perfectB[k][l]:
                    countB = countB + 1
        answer.append(countA)
        answer.append(countB)
        countA = 0
        countB = 0

answer.sort()
print(answer[0])
