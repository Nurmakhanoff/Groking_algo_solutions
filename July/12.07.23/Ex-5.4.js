// Which of these hash functions are consistent?
// 5.4 f(x) = len(x) Uses the length of the string as the index

class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    set(value){
        const index = value.length;
        this.table[index] = value;
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}
const table = new Hashtable(1); 
table.set("Kuat")
table.display()

table.set("Kugr")
table.display()

//This function is not consistent because it does not always return the same value for the same key. We can have two words for one spot and cause collision or overwrite them.