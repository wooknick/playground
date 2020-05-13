def privacy_keeper(name):
    for x in ["alex", "bob", "chris", "david", "eve"]:
        if x == name:
            print(len(name)*"X")
        else:
            print(x)


privacy_keeper("bob")
