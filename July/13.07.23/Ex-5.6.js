//Suppose you have these four hash functions that work with strings:
//a. Return “1” for all input.
//b. Use the length of the string as the index.
//c. Use the first character of the string as the index. So, all strings starting with a are hashed together, and so on.
//d. Mapeverylettertoaprimenumber:a=2,b=3,c=5,d=7,e = 11, and so on. For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is “bag”, the index is 3 + 2 + 17 % 10 = 22 % 10 = 2.

//5.6 A mapping from battery size to power. The sizes are A, AA, AAA, and AAAA.

class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        const index = key.length % this.size;
        return index;
      }
    set(key,value){
        const index = this.hash(key);
        this.table[index] = value;
    }
    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }
}

const table = new Hashtable(10);

table.set("A", "1");
table.set("AA", "12");
table.set("AAA", "123");
table.set("AAAA", "1234");

console.log(table.get("A"));
console.log(table.get("AA"));
console.log(table.get("AAA"));
console.log(table.get("AAAA"));

// Answer is B. 
// A is not a good distribution for the this scenario.
// B will have a collision in four cases
// C will have a collision in four cases