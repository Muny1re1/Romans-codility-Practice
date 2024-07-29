// An industrial company has N factories, each producing some pollution every month. 
//The company has decided to reduce its total fume emissions by equipping some of the factories with one or more filters.

// Every such filter reduces the pollution of a factory by half. When a second (or subsequent) filter is applied, 
//it again reduces by half the remaining pollution emitted after fitting the existing filter(s). 
//For example, a factory that initially produces 6 units of pollution will generate 3 units with one filter, 
//1.5 units with two filters and 0.75 units with three filters.

// You are given an array of N integers describing the amount of pollution produced by the factories. 
//Your task is to find the minimum number of filters needed to decrease the total sum of pollution by at least half.

// Write a function:

// int solution(int A[], int N);

// which, given an array of integers A of length N, returns the minimum number of filters needed to reduce the total pollution by at least half.

// Examples:

// 1. Given A = [5, 19, 8, 1], your function should return 3. The initial total pollution is 5 + 19 + 8 + 1 = 33. 
//We install two filters at the factory producing 19 units and one filter at the factory producing 8 units. 
//Then the total pollution will be 5 + ((19 / 2) / 2) + (8 / 2) + 1 = 5 + 4.75 + 4 + 1 = 14.75 which is less than 33 / 2 = 16.5,
// so we have achieved our goal.

// 2. Given A = [10, 10], your function should return 2, because we may install one filter at each factory.

// 3. Given A = [3, 0, 5], your function should return 2, 
//because it is sufficient to install one filter at each factory producing a non-zero amount of pollution.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..30,000];
// each element of array A is an integer within the range [0..70,000].

function solution(A) {
    // Step 1: Calculate the total pollution
    let totalPollution = A.reduce((sum, val) => sum + val, 0);
    console.log(totalPollution);
    
    // Step 2: Calculate the target reduction (half of the total pollution)
    const target = totalPollution / 2;
    
    // Step 3: Use a max-heap to prioritize the most polluting factories
    let maxHeap = A.slice().sort((a, b) => b - a);
    
    let currentReduction = 0;
    let filterCount = 0;
    
    // Step 4: Simulate the filter application
    while (currentReduction < target) {
        // Get the factory with the highest pollution
        let maxPollution = maxHeap.shift();
        
        // Apply a filter to it (reduce by half)
        let reducedPollution = maxPollution / 2;
        
        // Update the current reduction
        currentReduction += reducedPollution;
        
        // Put the reduced pollution back into the heap
        maxHeap.push(reducedPollution);
        
        // Keep the heap sorted
        maxHeap.sort((a, b) => b - a);
        
        filterCount++;
    }
    
    return filterCount;
}

console.log(solution([5, 19, 8, 1])); // Output: 3
console.log(solution([10, 10])); // Output: 2
console.log(solution([3, 0, 5])); // Output: 2

