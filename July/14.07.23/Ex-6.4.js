// 6.4 Here’s a larger graph. Make a valid list for this graph.
//      exercise <-- shower <-- get dressed
//      /
//     v
//wake up <-- brush teeth <-- eat breakfast
//     ^
//      \
//      pack lunch

class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.mid=null;
        this.right=null;
    
    }
}

const a = new Node("Wake up");
const b = new Node("Pack lunch");
const c = new Node("Brush teeth");
const d = new Node("Eat breakfast");
const e = new Node("Exercise");
const f = new Node("Shower");
const g = new Node("Get dressed");

a.left = b;
a.mid = c;
a.right = e;
c.mid = d;
e.right = f;
f.right = g;

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