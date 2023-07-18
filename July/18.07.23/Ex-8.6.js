// A postman needs to deliver to 20 homes. He needs to find the shortest route that goes to all 20 homes. Is this an NP-complete problem?
function calculateDistance(home1, home2){
    const dx = home2.x - home1.x;
    const dy = home2.y - home1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function findClosestHome(currentHome, homes){
    let closestHome;
    let closestDistance = Infinity;
    for(const [key, coordinates] of homes){
        if (key !== currentHome){
            const distance = calculateDistance(coordinates, homes.get(currentHome));
        if (distance < closestDistance){
            closestHome = key;
            closestDistance = distance;
        }
      }
    }
    return closestHome;
}  

function navigatePostman(homes){
    const visitedHomes = new Set();
    let currentHome = "Home 1"; 
    visitedHomes.add(currentHome);

    while(visitedHomes.size < homes.size){
      let closestDistance = Infinity;
      let closestHome;
      for(const [key, coordinates] of homes){
        if (!visitedHomes.has(key)){
            const distance = calculateDistance(homes.get(currentHome), coordinates);
            if (distance < closestDistance){
                closestDistance = distance;
                closestHome = key;
          }
        }
      }
  
    visitedHomes.add(closestHome);
    console.log("Visit ${closestHome}");
    currentHome = closestHome;
    }
}  

const homes = new Map([
    ["Home 1", { x: 10, y: 20 }],
    ["Home 2", { x: 30, y: 40 }],
    ["Home 3", { x: 50, y: 60 }],
    ["Home 4", { x: 70, y: 80 }],
    ["Home 5", { x: 90, y: 100 }],
    ["Home 6", { x: 110, y: 120 }],
    ["Home 7", { x: 130, y: 140 }],
    ["Home 8", { x: 150, y: 160 }],
    ["Home 9", { x: 170, y: 180 }],
    ["Home 10", { x: 190, y: 200 }],
    ["Home 11", { x: 210, y: 220 }],
    ["Home 12", { x: 230, y: 240 }],
    ["Home 13", { x: 250, y: 260 }],
    ["Home 14", { x: 270, y: 280 }],
    ["Home 15", { x: 290, y: 300 }],
    ["Home 16", { x: 310, y: 320 }],
    ["Home 17", { x: 330, y: 340 }],
    ["Home 18", { x: 350, y: 360 }],
    ["Home 19", { x: 270, y: 20 }],
    ["Home 20", { x: 270, y: 30 }], ]);
  
navigatePostman(homes);
  
// This is the traveling salesman problem, NP-complete problem with homes instead of cities.
// There is no known polynomial-time algorithm to solve it.
// But here is mine, take it like you have X,Y coordinates table. 