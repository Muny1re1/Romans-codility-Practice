// You are given a string S consisting of N digits. What is the largest sum of two two-digit fragments of S? The selected fragments cannot overlap.

// Write a function:

// int solution(char *S);

// that, given a string S, returns the largest sum of two two-digit numbers that are non-overlapping fragments of S.

// Examples:

// 1. Given S = "43798", the function should return 141. The chosen fragments are "43" and "98": "43 7 98"

// 2. Given S = "00101", the function should return 10. The chosen fragments are "00" and "10": "00 10 1". Note that fragments "01" and "10" cannot be chosen as they overlap.

// 3. Given S = "0332331", the function should return 66. The chosen fragments are "33" and "33": "0 33 2 33 1".

// 4. Given S = "00331", the function should return 34. The chosen fragments are "03" and "31": "0 03 31"

// Assume that:

// N is an integer within the range [4..100];
// string S is made only of digits (0−9).

function solution(S) {
    let maxSum = 0;
    const n = S.length;

    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 2; j < n - 1; j++) {
            // Extract two-digit numbers
            const num1 = parseInt(S.substring(i, i + 2));
            const num2 = parseInt(S.substring(j, j + 2));

            // Calculate the sum
            const currentSum = num1 + num2;

            // Update maxSum if the current sum is greater
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}

// Test cases
console.log(solution("43798")); // Should print 141
console.log(solution("00101")); // Should print 10
console.log(solution("0332331")); // Should print 66
console.log(solution("00331")); // Should print 34
console.log(solution("99999")); // Should print 198
console.log(solution("121211")); // Should print 42

