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

//       />1node\ ----> 4node(finish)
//      /        \           ^
// 0node          >3node     |
//      \        /           |
//       \>2node/ ----> 5node|
var exBFSGraph = [
    [0,1,1,0,0,0],
    [0,0,0,1,1,0],
    [0,0,0,1,0,1],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,1,0],
];

console.log(bfs(exBFSGraph, 0));
// {0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 2}
//from the 0 node, it can take 1 step to 1 and 2 nodes, 2 steps for 3,4,5 nodes by BFS algorithm.

