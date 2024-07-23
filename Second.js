// Given four digits, count how many valid times can be displayed on a digital clock (in 24-hour format) using those digits. The earliest time is 00:00 and the latest time is 23:59.

// Write a function:

// int solution(int A, int B, int C, int D);

// that, given four integers A, B, C and D (describing the four digits), returns the number of valid times that can be displayed on a digital clock.

// Examples:

// 1. Given A = 1, B = 8, C = 3, D = 2, the function should return 6. The valid times are: 12:38, 13:28, 18:23, 18:32, 21:38 and 23:18.

// 2. Given A = 2, B = 3, C = 3, D = 2, the function should return 3. The valid times are: 22:33, 23:23 and 23:32.

// 3. Given A = 6, B = 2, C = 4, D = 7, the function should return 0. It is not possible to display any valid time using the given digits.

// Assume that:

// A, B, C and D are integers within the range [0..9].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function solution(A, B, C, D) {
    // Array containing the four input digits
    const digits = [A, B, C, D];
    // Set to store unique permutations of the digits
    const permutations = new Set();

    // Function to generate all permutations of the given array
    function generatePermutations(arr, perm = []) {
        // Base case: if no digits left, add the current permutation to the set
        if (arr.length === 0) {
            permutations.add(perm.join(''));
        } else {
            // Loop through the array to generate permutations
            for (let i = 0; i < arr.length; i++) {
                // Create a new permutation by adding the current digit
                const newPerm = perm.concat(arr[i]);
                // Create a new array without the current digit
                const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
                // Recursively generate permutations with the remaining digits
                generatePermutations(newArr, newPerm);
            }
        }
    }

    // Start generating permutations with the initial digits array
    generatePermutations(digits);

    // Variable to count valid times
    let validTimes = 0;

    // Iterate over all unique permutations
    permutations.forEach(perm => {
        // Extract hours and minutes from the permutation string
        const hours = parseInt(perm.slice(0, 2));
        const minutes = parseInt(perm.slice(2, 4));

        // Check if the extracted time is valid (hours < 24 and minutes < 60)
        if (hours < 24 && minutes < 60) {
            validTimes++;
        }
    });

    // Return the count of valid times
    return validTimes;
}

// Examples
console.log(solution(1, 8, 3, 2)); // Should return 6
console.log(solution(2, 3, 3, 2)); // Should return 3
console.log(solution(6, 2, 4, 7)); // Should return 0
