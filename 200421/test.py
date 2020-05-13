import easygui
import random


def GetSum():
    my_sum = 0
    for i in range(0, 3):
        my_sum = my_sum + random.randint(1, 6)
    return my_sum


easygui.msgbox("Your Final Score : " + str(GetSum()))


def GetSum2():
    cpu_sum = 0
    for i in range(0, 3):
        cpu_sum += random.randint(1, 6)
    return cpu_sum


if sum < GetSum2():
    easygui.msgbox("You lose TT")
else:
    easygui.msgbox("You win!")
