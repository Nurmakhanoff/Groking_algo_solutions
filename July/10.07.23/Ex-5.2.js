// Which of these hash functions are consistent?
//5.2 f(x) = rand() -> Returns a random number every time

const map = new Map();
function rand(){
    return Math.floor(Math.random() * 10);
}
function f(x){
    console.log(map.get(x));
}
map.set("a", rand());

f("a");

//Answer is No, it is not a consistent hash function(js map), because it gives a random number every time.
