function validOrNot(routineList) {
    const validSteps = ["Wake up", "Shower", "Brush teeth", "Eat breakfast"];
    const allowedNextSteps = {
      "Wake up": ["Shower", "Brush teeth"],
      "Shower": ["Brush teeth", "Eat breakfast"],
      "Brush teeth": ["Shower", "Eat breakfast"],
      "Eat breakfast": ["Shower"]
    };
  
    let currentStep = null;
    for (const step of routineList) {
      if (!validSteps.includes(step)) {
        return false;
      }
      if (currentStep !== null && !allowedNextSteps[currentStep].includes(step)) {
        return false;
      }
      currentStep = step;
    }
    return true;
  }
  

//   1nnode
//     |
//     v
// 0node <-- 2node <-- 3node

//     Shower
//      |
//      v
// Wake up <-- Brush Teeth <-- Eat Breakfast

const varA = ["Wake up", "Shower", "Eat breakfast", "Brush teeth"];
const varB = ["Wake up", "Brush teeth", "Eat breakfast", "Shower"];
const varC = ["Shower", "Wake up", "Brush teeth", "Eat breakfast"];

console.log(validOrNot(varA));
console.log(validOrNot(varB));
console.log(validOrNot(varC));
// c invalid, a invalid, b valid
