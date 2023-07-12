// Which of these hash functions are consistent?
// 5.3 f(x) = next_empty_slot() Returns the index of the next empty slot in the hash table
class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    // convert a key to a numeric instant
    hash(key){
        let total = 0
        for(let i = 0;i<key.length; i++){
            total += key.charCodeAt(i)
        }
        // now it in the size of the array. 0-49.
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key){
        const index = this.hash(key);
        return this.table[index];
    }
    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
    returnEmptyIndex(){
        let i; 
        for (i=0; i<this.table.length && typeof this.table[i] !== 'undefined'; i++);{
            console.log("Found next empty slot at " + i);
        }

    }
}

const table = new Hashtable(10);

table.set(0, "Kuat")
table.set(2, "Kugr")
table.display()

table.returnEmptyIndex()
//This function is not consistent because it does not always return the same value for the same key. For example, if the hash table is empty, then the returnEmptyIndex() function will always return 0. However, if the hash table has one element, then the next_empty_slot() function will return 1.
