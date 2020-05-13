def count_odd(*list):
    count = 0
    for x in list:
        if x % 2 == 1:
            count = count + 1
    return count


print(count_odd(2, 2, 4, 4, 5))
