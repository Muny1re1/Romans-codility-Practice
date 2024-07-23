// You are given a list of N transfers (numbered from 0 to N−1) between two banks: bank A and bank B.
// The K-th transfer is described by two values:

// R[K] (either “A” or “B”) representing the recipient (the bank the transfer is sent to);
// V[K] denoting the value sent via the transfer.

// All transfers are completed in the order they appear on the list. The banks do not want to go into debt
// (in other words, their account balance may not drop below 0).
// What minimum initial account balance in each bank is necessary in order to complete the transfers?

// Write a function:
function solution(R,V){
    // set the initial values for the variables
    let minBalanceA = 0
    let minBalanceB = 0
    let currentBalanceA = 0
    let currentBalanceB = 0

   // split the string R into single character strings
   let recipient = R.split("")
   // loop through the split array
   for(let i = 0 ; i < recipient.length; i++){
    // if Bank B is the recipient bank, add to B and subtract from A
    if(recipient[i] === "B"){
        currentBalanceB += V[i]
        currentBalanceA -= V[i]

    // if bank A is the recipient bank, add to A and subtract from B
    }else if(recipient[i] === "A"){
        currentBalanceB -= V[i]
        currentBalanceA += V[i]

    }

   // Bank with current balance as 0, cant send more transfers hence gives a negative value if attempted
    if(currentBalanceA < minBalanceA){
        minBalanceA = currentBalanceA
    }
    if (currentBalanceB < minBalanceB){
        minBalanceB = currentBalanceB
    }
   }
   // change negative value to a positive value
    return [ -minBalanceA, -minBalanceB ]
}
// Test cases
const R1 = "BAABA";
const V1 = [2, 4, 1, 1, 2];
console.log(solution(R1, V1)); // Output: [2, 4]

const R2 = "ABAB";
const V2 = [10, 5, 10, 15];
console.log(solution(R2, V2)); // Output: [0, 15]

const R3 = "B";
const V3 = [100];
console.log(solution(R3, V3)); // Output: [100, 0]


// function solution(R, V) { ... }

// that, given a string R and an array of integers V, both of length N, returns an array of two integers.
// The integers should represent the minimum initial account balances for banks A and B in the following order: [bank A, bank B].

// Examples:

// Given R = "BAABA" and V = [2, 4, 1, 1, 2], the function should return [2, 4].
// The bank accounts’ balances after each transfer are shown in the following table:
//                        | A | B
// ------------------------±–±--
// initial balance | 2 | 4
// transfer 2 from A to B | 0 | 6
// transfer 4 from B to A | 4 | 2
// transfer 1 from B to A | 5 | 1
// transfer 1 from A to B | 4 | 2
// transfer 2 from B to A | 6 | 0

// Given R = "ABAB" and V = [10, 5, 10, 15], the function should return [0, 15].

// Given R = "B" and V = [100], the function should return [100, 0].

// Write an efficient algorithm for the following assumptions:

// string R and array V are both of length N;
// N is an integer within the range [1…100,000];
// each element of array V is an integer within the range [1…10,000];
// string R is made only of the characters ‘A’ and/or ‘B’
