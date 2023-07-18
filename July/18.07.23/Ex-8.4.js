//For each of these algorithms, say whether it’s a greedy algorithm or not.
//8.4 Breadth-first search
function bfs(graph, root){
    var nodesLength ={};
    for(var i=0; i<graph.length; i++){
        nodesLength[i] = Infinity;
    }
    nodesLength[root]=0;

    var queue = [root];
    var current;

    while(queue.length != 0){
        current = queue.shift();

        var currentConnected = graph[current];
        var neighborIdx = [];
        var idx = currentConnected.indexOf(1);

        while(idx!=-1){
            neighborIdx.push(idx);
            idx = currentConnected.indexOf(1, idx+1);
        }
        for(var j=0; j<neighborIdx.length; j++){
            if(nodesLength[neighborIdx[j]] == Infinity){
                nodesLength[neighborIdx[j]] = nodesLength[current]+1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLength;  
};

// I was wrong, answer is - yes.
// The simple answer is YES. To better understand this I would suggest reading on greedy vs heuristics algorithm.
//Greedy algorithms supply an exact solution! Heuristic algorithms use probability and statistics in order to avoid running through all the possibilities and provide an "estimated best solution" (which means that if a better solution exists, it will be only slightly better).
//A greedy algorithms follow locally optimal solution at each stage. While searching for the best solution, the best so far solution is only updated if the search finds a better solution. Whereas this is not always the case with heuristic algorithms (e.g. genetic, evolutionary, Tabu search, ant search, and so forth). Heuristic algorithms may update the best so far even if it's worse than the best so far to avoid getting trapped in a local optimal solution.
//Therefore, in nutshell BFS/DFS generally fall under greedy algorithms.