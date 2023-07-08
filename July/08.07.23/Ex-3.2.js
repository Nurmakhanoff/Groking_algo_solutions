function countdown(count){
    console.log(count);
    countdown(count-1);
}
countdown(5);
// RangeError: Maximum call stack size exceeded at -11293.
// This continuous growth of the stack, without any respite, leads to what is called a "stack overflow." The stack overflow occurs when the available memory for the stack is exhausted, resulting in a runtime error.