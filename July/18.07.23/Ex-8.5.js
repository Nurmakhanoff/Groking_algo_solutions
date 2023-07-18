//For each of these algorithms, say whether it’s a greedy algorithm or not.
// 8.5 Dijkstra’s algorithm

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

// Answer is - Yes.
// One of the most popular greedy algorithms is Dijkstra's algorithm that finds the path with the minimum cost from one vertex to the others in a graph.
// This algorithm finds such a path by always going to the nearest vertex. That's why we say it is a greedy algorithm.
// Normally speaking, it's greedy because you always mark the closest vertex and thats how it works.