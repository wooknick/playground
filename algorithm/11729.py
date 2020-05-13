
def moveCount(n):
    if n == 1:
        return 1
    else:
        return moveCount(n-1) * 2 + 1


def move(n, fr, to):
    if n == 1:
        print("{} {}".format(fr, to))
    else:
        move(n-1, fr, 6 - fr - to)
        print("{} {}".format(fr, to))
        move(n-1, 6-fr - to, to)


n = int(input())

print(moveCount(n))
move(n, 1, 3)
