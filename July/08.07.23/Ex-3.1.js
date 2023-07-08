function fact(x){
    if(x==1){
        return 1;
    }
    else{
        return x * fact(x-1);
    }
}
console.log(fact(5));

function lookForKey(box) {
    for (let item of box) {
      if (item.is_a_box) {
        lookForKey(item);
      } 
      else if (item.is_a_key){
        console.log("Found the key!");
      }
    }
}

function countdown(count){
    if(count==0){
        console.log(count);
        return count;
    }    
    else{
        console.log(count);
        countdown(count-1);
    }
}
countdown(5);