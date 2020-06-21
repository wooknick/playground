class Student:
    def __init__(self, name, address, phone, major, score):
        self.name = name
        self.address = address
        self.phone = phone
        self.major = major
        self.score = score

    def printStudentInfo():


students = []
a = Student("Kim", "서울", "010 1111 1111",
            "전자", {"국어": 100, "수학": 90, "영어": 80})
b = Student("Lee", "수원", "010 2222 2222",
            "산공", {"국어": 10, "수학": 30, "영어": 60})
c = Student("Park", "용인", "010 3333 3333",
            "기계", {"국어": 100, "수학": 100, "영어": 100})

students.append(a)
students.append(b)
students.append(c)
