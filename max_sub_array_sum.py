from sys import maxsize


def maxSubarraySum(a, size):

    if len(a) > 0:
        max_so_far = -maxsize - 1
        max_ending_here = 0

        for i in range(0, size):
            max_ending_here = max_ending_here + a[i]
            if (max_so_far < max_ending_here):
                max_so_far = max_ending_here

            if max_ending_here < 0:
                max_ending_here = 0
        return max_so_far
    else:
        return None


maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)

maxSubarraySum([4, 2, 1, 6], 1)

maxSubarraySum([4, 2, 1, 6, 2], 4)

maxSubarraySum([], 4)
