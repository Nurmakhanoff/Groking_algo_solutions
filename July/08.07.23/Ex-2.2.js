//2.2 Suppose you’re building an app for restaurants to take customer orders. Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list and make them. It’s an order queue: servers add orders to the back of the queue, and the chef takes the first order off the queue and cooks it.
//Would you use an array or a linked list to implement this queue? (Hint: Linked lists are good for inserts/deletes, and arrays are good for random access. Which one are you going to be doing here?)
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    delete_first() {
        if (this.head === null) {
            return null;
        } 
        else {
            const data = this.head.data;
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return data;
        }
    }
    is_empty() {
        return this.head === null;
    }
    toString() {
        s = '';
        node = this.head;
        while (node !== null) {
            s += node.data + ' ';
            node = node.next;
        }
        return s;
    }
}
let expenses = new Queue;
expenses.append(10);
expenses.append(20);
expenses.append(30);
expenses.append(40);
expenses.delete_first();
console.log(expenses);
