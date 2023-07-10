// Which of these hash functions are consistent?
// 5.1 -> f(x) = 1 
// Returns “1” for all input

const map = new Map();
function f(x){
    console.log(map.get(x));
}
map.set("a", 1);
map.set("b", 1);
map.set("c", 1);

f("a");
f("a");
f("a");
f("b");
f("c");

//A hash function is considered consistent if it always produces the same output for the same input. Consistency ensures that if you hash a particular value multiple times using the same hash function, you will always get the same result.
//Answer is yes, it is consistent hash function(js map).
