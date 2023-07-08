//In reality, Facebook uses neither an array nor a linked list to store user information. Let’s consider a hybrid data structure: an array of linked lists. You have an array with 26 slots. Each slot points to a linked list. For example, the first slot in the array points to a linked list containing all the usernames starting with a. The second slot points to a linked list containing all the usernames starting with b, and so on.
//Suppose Adit B signs up for Facebook, and you want to add them to the list. You go to slot 1 in the array, go to the linked list for slot 1, and add Adit B at the end. Now, suppose you want to search for Zakhir H. You go to slot 26, which points to a linked list of all the Z names. Then you search through that list to find Zakhir H.
//Compare this hybrid data structure to arrays and linked lists. Is it slower or faster than each for searching and inserting? You don’t have to give Big O run times, just whether the new data structure would be faster or slower.

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head=null; //first node of the linked list
        this.size=0;
    }
//insert last node
insertLast(data){
    let node = new Node(data);
    let current;

    // if empty, make head
    if(!this.head){
        this.head = node;
    } else {
        current = this.head;
    
    while(current.next){
        current = current.next;
    }

    current.next = node;
    }       
    this.size++;
}
}
const facebook = new Array(26);
for (let i = 0; i < facebook.length; i++) {
    facebook[i] = new LinkedList();
}
//A-1, B-2, C-3, D-4, E-5, F-6, G-7, H-8, I-9, J-10, K-11, L-12, M-13, N-14, O-15, P-16, Q-17, R-18, S-19, T-20, U-21, V-22, W-23, X-24, Y-25, Z-26
facebook[0].insertLast("Adit");
facebook[25].insertLast("Zacker");
console.log(facebook[0]);
console.log(facebook[25]);







//Searching - O(n) still, because array have O(1) for that one. Slower than array, but approximately the same as linked list.
//Inserting - access of array is O(1), and inserting of an linked lists in the end is O(n). Faster than array and approximately the same as linked list.
// It feels like we have a linked list if we look at the big O complexity. We won't add new array elements(where it is slow) and accessing and reading of elements in array is O(1).