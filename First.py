# // Write a function solution that, given an integer N, returns a string of length N containing as many different lower-case letters ('a'-'z') as possible, in which each letter occurs an equal number of times.

# // Examples:

# // 1. Given N = 3, the function may return "fig", "pea", "nut", etc. Each of these strings contains three different letters with the same number of occurrences.

# // 2. Given N = 5, the function may return "mango", "grape", "melon", etc.

# // 3. Given N = 30, the function may return "aabbcc...oo" (each letter from 'a' to 'o' occurs twice). The string contains 15 different letters.

# // Write an efficient algorithm for the following assumptions:

# // N is an integer within the range [1..200,000].

# // Write a function solution that, given an integer N, returns a string of length N containing as many different lower-case letters ('a'-'z') as possible, in which each letter occurs an equal number of times.

# // Examples:

# // 1. Given N = 3, the function may return "fig", "pea", "nut", etc. Each of these strings contains three different letters with the same number of occurrences.

# // 2. Given N = 5, the function may return "mango", "grape", "melon", etc.

# // 3. Given N = 30, the function may return "aabbcc...oo" (each letter from 'a' to 'o' occurs twice). The string contains 15 different letters.

# // Write an efficient algorithm for the following assumptions:

# // N is an integer within the range [1..200,000].


def solution(N):
    # Alphabet string
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    len_alphabet = len(alphabet)
    
    # Full repetitions of the whole alphabet
    full_repeats = N // len_alphabet
    remainder = N % len_alphabet
    
    # Build the result string
    result = alphabet * full_repeats + alphabet[:remainder]
    
    return result

# Test cases
print(solution(3))  #  output: "abc"
print(solution(5))  #  output: "abcde"
print(solution(30)) #  output: "abcdefghijklmnopqrstuvwxyzabcd"