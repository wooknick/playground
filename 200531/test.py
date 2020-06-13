def printStar(n):
    for i in range(n, 0, -1):
        line = ""
        for _ in range(0, n-i):
            line += "  "
        for _ in range(0, i):
            line += "* "
        print(line)


printStar(5)
