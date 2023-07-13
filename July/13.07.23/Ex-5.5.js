//Suppose you have these four hash functions that work with strings:
//a. Return “1” for all input.
//b. Use the length of the string as the index.
//c. Use the first character of the string as the index. So, all strings starting with a are hashed together, and so on.
//d. Mapeverylettertoaprimenumber:a=2,b=3,c=5,d=7,e = 11, and so on. For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is “bag”, the index is 3 + 2 + 17 % 10 = 22 % 10 = 2.

//5.5 A phonebook where the keys are names and values are phone numbers. The names are as follows: Esther, Ben, Bob, and Dan.
class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        const primeNumbers = {
            a: 2, b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, h: 19, i: 23, j: 29, k: 31, l: 37, m: 41, n: 43, o: 47, p: 53, q: 59, r: 61, s: 67, t: 71, u: 73, v: 79, w: 83, x: 89, y: 97, z: 101
        };
        let total = 0;
        for (let i = 0; i < key.length; i++) {
          const char = key[i].toLowerCase();
          if (primeNumbers[char]) {
            total += primeNumbers[char];
          }
        }
    
        return total % this.size;
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

const phonebook = new Hashtable(10);

phonebook.set("Esther", "1-111-1111111"); // The sum is 2 + 19 + 23 + 17 + 2 + 11 = 74. The hash value is 74 % 10 = 4.
phonebook.set("Ben", "2-222-2222222"); // The sum is 3 + 2 + 7 = 12. The hash value is 12 % 10 = 2.
phonebook.set("Bob", "3-333-3333333"); // The sum is 3 + 13 + 5 = 21. The hash value is 21 % 10 = 1.
phonebook.set("Dan", "4-444-4444444"); // The sum is 7 + 2 + 7 = 16. The hash value is 16 % 10 = 6.

console.log(phonebook.get("Esther"));
console.log(phonebook.get("Ben"));
console.log(phonebook.get("Bob"));
console.log(phonebook.get("Dan"));
// Answer is D. 
// A is not a good distribution for the phonebook scenario.
// B will have a collision with three names of the length of 3
// C will have a collision with two names of the letter B
