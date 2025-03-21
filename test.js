// here are code of second test
// # Fly me to my destination - It's urgent!!

// Consider there are **N** airports in the world, each airport has a plane available with limited units of fuel available to fly. 

// You are initially positioned at airport **number one** and you have to reach the last airport (**N**) by hiring a **minimum** number of planes. You'd need 1 unit of fuel to fly to the nearest airport from any airport. 

// You will be given an array of N numbers each representing the units of fuel available in the plane at that particular airport. Print the number of planes you'd need to hire to reach the last airport. If it is not possible to reach the last airport, return -1

// Example: 

// Array = [2,1,2,3,1]

// In the given array, there are 5 airports, the plane at the starting airport has 2 units of fuel so you can hire this plane and stop at the 2nd or 3rd airport. The plane at the 2nd airport has 1 unit of fuel so it can fly to the 3rd airport only. The minimum number of planes required in this case is two 2 → 2→ 1. 

// Example 2:

// Array = [1,6,3,4,5,0,0,0,6]

// In the given array, there are 9 airports, the plane at the starting airport has 1 unit of fuel, so you can hire this plane and stop at the 2nd airport only. The plane at the 2nd airport has 6 units of fuel, so it can fly to the 3rd, 4th, 5th, 6th, 7th, or 8th airport. If we take the plane at the 5th airport, the minimum number of planes required in this case is three 1 → 6 → 5 → 6

// 👉 Our team will analyze the code for its quality, logic, code comments, variable naming, complexity, and user interface design.


// ✅ Along with the code, we’d want you to write & explain the algorithm of the logic (step by step) that you’ve put into use for solving the above-mentioned problem.

// Approach for the solutions

// we used greedy algorithm ( approach ) to solve the problem

//  Simple Steps (Algorithm):
// Start with the first plane at airport 1.
// Keep track of:
// How far you can go right now (maxReach).
// How many moves you have left with the current plane (steps).
// How many planes you have used (planes).
// Go through each airport one by one.
// At each airport:
// Update how far you can go.
// Use 1 move (steps--).
// If steps becomes 0:
// Hire a new plane (planes++).
// If you can’t go further, return -1.
// Otherwise, refill steps with the remaining distance.
// If you reach the last airport, return the number of planes used.


function minPlanesToReachDestination(fuelArray) {
    let n = fuelArray.length;

    if (n <= 1) return 0; 
    if (fuelArray[0] === 0) return -1; 

    let maxReach = fuelArray[0]; 
    let steps = fuelArray[0];    
    let planes = 1;              

    for (let i = 1; i < n; i++) {
        if (i === n - 1) return planes; 

        maxReach = Math.max(maxReach, i + fuelArray[i]); 
        steps--; 

        if (steps === 0) { 
            planes++;

            if (i >= maxReach) return -1; 

            steps = maxReach - i
        }
    }

    return -1; 
}

console.log(minPlanesToReachDestination([2,1,2,3,1])); 

