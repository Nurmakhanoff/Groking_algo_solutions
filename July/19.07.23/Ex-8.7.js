// 8.7 Finding the largest clique in a set of people (a clique is a set of people who all know each other). Is this an NP-complete problem?

function isClique(adjMatrix, subset){
    for(let i = 0; i < subset.length; i++){
        for(let j = i + 1; j < subset.length; j++){
            if(adjMatrix[subset[i]][subset[j]] === 0){
                return false;
            }
        }
    }
    return true;
}
  
function findLargestClique(adjMatrix){
    const n = adjMatrix.length;
    let maxClique = [];
  
    for(let i = 1; i < (1 << n); i++){
        const subset = [];
        for(let j = 0; j < n; j++){
            if((i & (1 << j)) !== 0){
                subset.push(j);
            }
        }      
        if(isClique(adjMatrix, subset) && subset.length > maxClique.length){
            maxClique = subset.slice();
        }
    }
    return maxClique;
}

const adjacencyMatrix =[
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0],
];

const largestClique = findLargestClique(adjacencyMatrix);
console.log("Largest Clique:", largestClique);

// First of all, this problem is already known as NPC.
// The reason it is called NP-complete is that it belongs to a group of problems that are all equally hard to solve.
// No direct well-known algorithm for solving this, the amount of possible subsets change dramastically with more and more vertices and the amount of people you need to check whether do they know each other increases too - these 3 reasons why it is NPC.
