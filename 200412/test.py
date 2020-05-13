a = int(input())
cal = []

while a > 0:
    cal.append(a % 2)
    a = a // 2

while len(cal) < 4:
    cal.append(0)

print("8 KG : {}".format(cal.pop()))
print("4 KG : {}".format(cal.pop()))
print("2 KG : {}".format(cal.pop()))
print("1 KG : {}".format(cal.pop()))
