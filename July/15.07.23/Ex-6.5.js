//6.5 Which of the following graphs are also trees?

//              anode   <-----------
//            /       \             \
//           v          v
//      bnode           cnode       |
//         ^            /    \      /
//         |           v      v    /
//         |________dnode     enode
// Graph with cycle is not a tree.

// thats why variants a and c are Trees, but not the one above
// We can use trees in both dfs and bfs, but we should be carefull not to transfer from child left and right into the root again
// you should be aware that wrong cycle can lead to an infinite function. This, for example.

class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.mid=null;
        this.right=null;
    
    }
}

const a = new Node("anode");
const b = new Node("bnode");
const c = new Node("cnode");
const d = new Node("dnode");
const e = new Node("enode");

a.left = b;
a.right = c;
c.left = d;
c.right = e;
d.left = b;
e.right = a;

const depthFirstPrint = (root) => {
    const stack = [root];
    while(stack.length>0){
        const current = stack.pop();
        console.log(current.val);

        if(current.left !== null){
            stack.push(current.left);
        }
        if(current.mid !== null){
            stack.push(current.mid);
        }
        if(current.right !== null){
            stack.push(current.right);
        }
    }
}

depthFirstPrint(a);
