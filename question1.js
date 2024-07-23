function solution(R,V){
    let minBalanceA = 0
    let minBalanceB = 0
    let currentBalanceA = 0
    let currentBalanceB = 0

   let recipient = R.split("")
   for(let i = 0 ; i < recipient.length; i++){
    if(recipient[i] === "B"){
        currentBalanceB += V[i]
        currentBalanceA -= V[i]


    }else if(recipient[i] === "A"){
        currentBalanceB -= V[i]
        currentBalanceA += V[i]

    }

    if(currentBalanceA < minBalanceA){
        minBalanceA = currentBalanceA
    }
    if (currentBalanceB < minBalanceB){
        minBalanceB = currentBalanceB
    }
   }
    return [ -minBalanceA, -minBalanceB ]
}
const R1 = "BAABA";
const V1 = [2, 4, 1, 1, 2];
console.log(solution(R1, V1)); // Output: [2, 4]

const R2 = "ABAB";
const V2 = [10, 5, 10, 15];
console.log(solution(R2, V2)); // Output: [0, 15]

const R3 = "B";
const V3 = [100];
console.log(solution(R3, V3)); // Output: [100, 0]
