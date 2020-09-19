def highestOccurrence(arr):

    # Var declaration
    seen = {}
    dupes = []

    # Checking the list
    for x in arr:
        if x not in seen:
            seen[x] = 1
        else:
            if seen[x] == 1:
                dupes.append(x)
            seen[x] += 1

    # Returning the duplicates
    return dupes


highestOccurrence([2, 3, 2, 2, 2, 4, 2])
# [2]
highestOccurrence([2, 3, 2, 3, 2, 3, 4])
# [2, 3]
highestOccurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a'])
# ['a']
highestOccurrence(['a', 'a', 2, 2, 2, 'a', 4])
# ['a', 2]
