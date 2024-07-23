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
