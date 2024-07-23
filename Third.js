// You are given an implementation of a function:

// int solution(int A[], int N, int B[], int M);

// that, given a non-empty array A of N non-negative integers and a non-empty array B of M non-negative integers, 
//returns the minimal value that occurs in both arrays. If there is no such value, the function should return −1.

// For example, given arrays A and B such that:

//     A[0] = 1    B[0] = 4
//     A[1] = 3    B[1] = 2
//     A[2] = 2    B[2] = 5
//     A[3] = 1    B[3] = 3
//                 B[4] = 2
// your function should return 2, since 2 is the minimal value which occurs in both arrays A and B (another value which occurs in both arrays is 3).

// Given arrays A and B such that:

//     A[0] = 2    B[0] = 3
//     A[1] = 1    B[1] = 3
// your function should return −1, since there is no value that occurs in both arrays.

// The attached code is still incorrect for some inputs. Despite the error(s), the code may produce a correct answer 
//for the example test cases. The goal of the exercise is to find and fix the bug(s) in the implementation. You can modify at most two lines.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of arrays A and B is an integer within the range [0..1,000,000,000].


let A = [3, 4, 5, 6, 8, 4];
let B = [1, 4, 7, 9, 2, 7];
let one = [1, 4, 5, 6, 7, 2]
let two = [3, 2, 5, 6, 8, 9]
let three = [1, 4, 5, 6, 7]
let four = [2, 3, 8, 9, 10]

function algorithm(A, B){
    // create a set of arrays A and B sorted in ascending order
    const newA = new Set(A.sort((a, b) => a - b));
    const newB = new Set(B.sort((a, b)=> a - b));
    console.log(newA);
    console.log(newB)
    // define the variable result as -1
    let result = -1;
    
    // iterate over the numbers in each set
        for (let number of newB){
            // check whether the number in newB is in newA and overwrite the result variable and also break the loop
            if (newA.has(number)){
                result = number
                break;
            }
        }
        console.log(result);
        // return the result
        return result;
       
}
algorithm(A, B); // 4
algorithm(one, two); // 2
algorithm(three, four); // -1



