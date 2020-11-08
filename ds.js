let origDogs = ["Bulldog", "Beagle", "Labrador"];
let cats  = new Array("Americal Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingos");

// array copy Elements
let sliceDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0)

// stack functions (LIFO)
let pushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = dogs.shift();

// add and remove from first
let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift();

// atomic add and remove elements (where, how many to remove, element list)
dogs.splice(2,1,"Pug", "Boxer");

// array functions - concat, spread, slice and sort
let animals = dogs.concat(cats, birds);
let newAnimals = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();

function scanArray([first, second]){
    console.log("Scan: "+first+" "+second);
}
scanArray(animals);

let jounAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) allAnimals+=animal+" ";

console.log("Animals: "+allAnimals);