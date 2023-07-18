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

// Answer is - not.
// Greedy algorithms make current optimal choices at each step. In contrast, BFS does not make choices based on optimizing any criteria. It explores the graph, visiting all the vertices at a given level before moving to the next one. BFS focuses on breadth rather than optimizing any specific goal or objective.
//BFS is not specifically for solving optimization problems, so it doesn't make sense (i.e., it's not even wrong) to say that BFS is a greedy algorithm unless you are applying it to an optimization problem. 