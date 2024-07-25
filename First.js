// In an even word, each letter occurs an even number of times.

// Write a function solution that, given a string S consisting of N characters, returns the minimum number of letters that must be deleted to obtain an even word.

function solution(S) {
    // Count occurrences of each letter
    let freq = new Array(26).fill(0); // Initialize frequency array for 'a' to 'z'

    // Convert string to lowercase to handle case-insensitive comparison
    let lowerCaseS = S.toLowerCase();

    // Count occurrences of each letter
    for (let letter of lowerCaseS) {
        let index = letter.charCodeAt(0) - 'a'.charCodeAt(0); // Get the index for the current character
        freq[index]++;
    }

    // Calculate minimum deletions needed
    let minDeletions = 0;
    for (let count of freq) {
        if (count % 2 !== 0) { // If the count is odd
            minDeletions++; // We need one deletion to make it even
        }
    }

    return minDeletions;
}

// Example usage:
console.log(solution("acbcbba")); // Output: 1

// Examples:

// 1. Given S = "acbcbba", the function should return 1 (one letter b must be deleted).

// 2. Given S = "axxaxa", your function should return 2 (one letter a and one letter x must be deleted).

// 3. Given S = "aaaa", your function should return 0 (there is no need to delete any letters).

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S is made only of lowercase letters (a−z).
