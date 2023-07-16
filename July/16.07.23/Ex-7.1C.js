//7.1 In each of these graphs, what is the weight of the shortest path from start to finish?
// Variant C

class ShortestPath{
    NO_PARENT = -1;	
    path = new Set();
    allDists = new Set();
    shortestPath(adjacencyMatrix,  src, dest) { 
        var n = adjacencyMatrix[0].length; 
        var shortest = {}; 
        var visited = {};
        var parents = {}; 
        for (let v = 0; v < n; v++)  { 
            shortest[v] =  Number.MAX_VALUE; 
            visited[v] = false; 
        } 
        shortest[src] = 0; 
        parents[src] = this.NO_PARENT; 
        for (let i = 1; i < n; i++)  { 
            let pre = -1; 
            let min =  Number.MAX_VALUE; 
            for (let v = 0;  v < n;  v++) { 
                if (!visited[v] && shortest[v] < min) { 
                    pre = v; 
                    min = shortest[v]; 
                } 
            } 
            if(pre==-1)
                return;
            visited[pre] = true; 
            for (let v = 0; v < n; v++)  { 
                let dist = adjacencyMatrix[pre][v];                  
                if (dist > 0 && ((min + dist) < shortest[v]))  { 
                    parents[v] = pre; 
                    shortest[v] = min + dist; 
                } 
            } 
        }  
        this.allDists.add(shortest[dest]);
        this.addPath(dest, parents); 
    } 
    addPath(i, parents)  { 	
        if (i == this.NO_PARENT)        	
            return;   	
        this.addPath(parents[i], parents);             
        this.path.add(i);
    } 
}
//      2node --2> 4node(finish)
//       ^  ^ \_           ^
//     2/   |   \          |
// start   2|    \_2_      |2
//     2\   |        \     |
//       V  |         V    |
//      1node <--(-1) 3node|
const adjacencyMatrix = [
    [ 0, 2, 2, 0, 0],    
    [ 0, 0, 2, 0, 0], 
    [ 0, 0, 0, 2, 2], 
    [ 0, (-1), 0, 0, 2], 
    [ 0, 0, 0, 0, 0], 
];
let src = 0, dest = 5;
myObj = new ShortestPath();
myObj.shortestPath(adjacencyMatrix, src, dest); 
let list = Array.from(myObj.allDists); 
console.log("Shortest distance: " + list[0]);

// Answer is "Uncaught RangeError RangeError: Maximum call stack size exceeded"
// You can’t use Dijkstra’s algorithm if you have negative-weight edges
// If you want to find the shortest path in a graph that has negative-weight edges, there’s an algorithm for that! It’s called the Bellman-Ford algorithm.