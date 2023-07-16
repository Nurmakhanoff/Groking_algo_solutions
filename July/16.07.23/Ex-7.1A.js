//7.1 In each of these graphs, what is the weight of the shortest path from start to finish?
// Variant A

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
		//       2node --4> 4node \
//     5 ^  ^  \        |  \3
//      /   |   \       |   V
// start   8|   2\     6|  finish(5node)
//      \   |     \     |   ^
//     2 v  |      V    V  /1
//      1node ---7> 3node /
const adjacencyMatrix = [
    [ 0, 2, 5, 0, 0, 0],    
    [ 0, 0, 8, 7, 0, 0], 
    [ 0, 0, 0, 2, 4, 0], 
    [ 0, 0, 0, 0, 0, 1], 
    [ 0, 0, 0, 6, 0, 3], 
    [ 0, 0, 0, 0, 0, 0]
];
let src = 0, dest = 5;
myObj = new ShortestPath();
myObj.shortestPath(adjacencyMatrix, src, dest); 
let list = Array.from(myObj.allDists); 
console.log("Shortest distance: " + list[0]);
