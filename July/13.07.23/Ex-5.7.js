//Suppose you have these four hash functions that work with strings:
//a. Return “1” for all input.
//b. Use the length of the string as the index.
//c. Use the first character of the string as the index. So, all strings starting with a are hashed together, and so on.
//d. Mapeverylettertoaprimenumber:a=2,b=3,c=5,d=7,e = 11, and so on. For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is “bag”, the index is 3 + 2 + 17 % 10 = 22 % 10 = 2.

//5.7 A mapping from book titles to authors. The titles are Maus, Fun Home, and Watchmen.

class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hashByFirstCharacter(key) {
        const firstChar = key.charAt(0).toLowerCase();
        const index = firstChar.charCodeAt(0) % this.size;
        return index;
    }
    setByFirstCharacter(key,value){
        const index = this.hashByFirstCharacter(key);
        this.table[index] = value;
    }
    getByFirstCharacter(key) {
        const index = this.hashByFirstCharacter(key);
        return this.table[index];
    }
    hashLength(key){
        const index = key.length % this.size;
        return index;
    }
    setLength(key,value){
        const index = this.hashLength(key);
        this.table[index] = value;
    }
    getLength(key) {
        const index = this.hashLength(key);
        return this.table[index];
    }
    hashPrime(key) {
        const primeNumbers = {
            a: 2, b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, h: 19, i: 23, j: 29, k: 31, l: 37, m: 41, n: 43, o: 47, p: 53, q: 59, r: 61, s: 67, t: 71, u: 73, v: 79, w: 83, x: 89, y: 97, z: 101
        };
        let total = 0;
        for (let i = 0; i < key.length; i++) {
          const char = key[i].toLowerCase();
          if (primeNumbers[char]){
            total += primeNumbers[char];
          }
        }
        return total % this.size;
    }
    setPrime(key,value){
        const index = this.hashPrime(key);
        this.table[index] = value;
    }
    getPrime(key) {
        const index = this.hashPrime(key);
        return this.table[index];
    }
}

console.log("Firstcharacter");
const table = new Hashtable(10);
table.setByFirstCharacter("Maus", "Kuat");
table.setByFirstCharacter("Fun Home", "Kugr");
table.setByFirstCharacter("Watchmen", "Kuka");
console.log(table.getByFirstCharacter("Maus"));
console.log(table.getByFirstCharacter("Fun Home"));
console.log(table.getByFirstCharacter("Watchmen"));

console.log("----------------------------");
console.log("Length");


const table2 = new Hashtable(10);
table2.setLength("Maus", "Kuat");
table2.setLength("Fun Home", "Kugr");
table2.setLength("Watchmen", "Kuka");
console.log(table2.getLength("Maus"));
console.log(table2.getLength("Fun Home"));
console.log(table2.getLength("Watchmen"));

console.log("----------------------------");
console.log("Prime");

const table3 = new Hashtable(10);
table3.setPrime("Maus", "Kuat");
table3.setPrime("Fun Home", "Kugr");
table3.setPrime("Watchmen", "Kuka");
console.log(table3.getPrime("Maus"));
console.log(table3.getPrime("Fun Home"));
console.log(table3.getPrime("Watchmen"));

// A will give always a 1, so it is worst case
// B will give two collisions, but it is a relatively good distribution
// C will give two collisions, but it is a relatively good distribution
// D is the best