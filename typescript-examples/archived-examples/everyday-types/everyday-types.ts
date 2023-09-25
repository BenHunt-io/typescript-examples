"use strict";
/**
 *
 * Primitives: string, number, boolean
 * Arrays: string[], number[], boolean[], etc
 * any
*/


/**
 * Variables
 */
// Can Infer Type
let beans = "HEB Salt Free Black Beans";



/**
 * Functions
 */
function calculateInterest(principle: number, rate: number, years: number) {
    return principle * Math.pow(rate, years);
}
let interest = calculateInterest(10000, 1.05, 5);
console.log(interest); // $12762.815..



/**
 * Contextual Typing, anonymous function in forEach can contextualize what the type for name is
 * with the inferred string[] type from names.
 */
 let names = ["Ben", "Benito", "Benihana"];
names.forEach(function (name) {
    console.log(name.toLowerCase()); // "Ben" "Benito" "Benihana"
});



/**
 * Object Types
 *  - can have optional properties. Allows for mixed ordering of optional args!
 */
function printCar(car : {price?: number, make: string, model: string, vin?: string}) {
    console.log(`Car: price:${car.price}, make:${car.make}, model:${car.model}, vin:${car.vin}`)
}


// Error
// printCar({ make: "Ford"});
printCar({ make: "Ford", model: "Fusion" });
printCar({ make: "Ford", model: "Fusion" });
printCar({ make: "Ford", model: "Fusion", vin: "kkkkkkkkkkkkk" });
printCar({ price: 20_000, make: "Ford", model: "Fusion", vin: "kkkkkkkkkkkkk" });
printCar({ make: "Ford", model: "Fusion", vin: "kkkkkkkkkkkkk", price: 20_000});


/**
 * Union Types
 */

function printIdentifier(id: number | string, 
    car: {make: string, model: number} | {make: string, model: string}){
        // narrowing
        if(typeof id === "string"){
        console.log(id.toUpperCase());
    }
    console.log(`Car make: ${car.make} model: ${car.model}`);
}

printIdentifier(10, {make:"Tesla", model: "CyberTruck"});
printIdentifier("ten", {make:"Tesla", model: 550102020});
// Error
// printIdentifier({age: 26});



/**
 * Type Aliases (not extendable)
 */

type Car = {
    id: number | string;
    make: string;
    model: string;
}

function printOnlyCars(car: Car){
    console.log(car);
}

printOnlyCars({id:1, make:"Tesla", model:"CyberTruck"});




/**
 * Interfaces (exstendable)
 */

// compare types and interfaces
// extending types
// type Animal = {
//     name: string
// }
// type Bear = Animal & { 
//     honey: Boolean 
// }

// extending interfaces
interface Animal {
    name: string
}
interface Bear extends Animal {
    honey: boolean
}

// CAN redefine interfaces, CANNOT redefine types
interface Animal {
    class: string
}

function printBear(bear: Bear){
    console.log(bear);
}

printBear({name: "black bear", class:"mammal", honey:true})
// error
// printBear({name: "black bear", honey:true})


/**
 * Type coercions
 *  - Used more for types that are determined at runtime. You might know what
 * the type will be but TypeScript cannot.
 */

interface Dog extends Animal {
    owner: string
}

let bear = {name: "black bear", class:"mammal", honey:true} as Bear;
let dog = <Dog>{name: "chase", owner:"Jesse's Dad"};
// error
// dog = <Bear>dog;


/**
 * Literal Types
 */


function walk(direction: 'LEFT' | 'RIGHT' | 'FORWARD' | 'BACKWARD'){
    console.log(`Walking in the ${direction} direction`);
}

walk('FORWARD');
// Error
//walk('SIDEWAYS');


/**
 * Literal Type Inference
 */

function processReq(url: string, method: 'POST' | 'GET'){
    console.log(`${method} ${url}`);
}

let req = {url: "http://localhost:3000/coin/1", method: "GET" as "GET"};
// ERROR
// req.method = 'PUT';

processReq(req.url, req.method);

/**
 * Strict Null Checks
 *  - should be on to avoid Null Pointer errors.
 */

function printDangeriousValue(value: string | null) {
    // non-null type assertion
    console.log(value!.toUpperCase);
    // Error (w/ out strict compilation on)
    // console.log(value.toUpperCase);
}

printDangeriousValue("Ben isn't that dangerous");


// printPerson({name: "Ben"});
// printPerson({name: "Ben", ssn: "111-22-3333", city:"Austin");
// type Mac = {
//     launch :
// }
// // Union Types
// let mac : Mac = {
//     launch : (app: string) => console.log(`Opening ${app}`);
//     launchUnixTerminal : () => console.log("Opening Unix Terminal");
// }
// let pc : PC = {
//     launch : (app: string) => console.log(`Opening ${app}`);
//     launchPowershell : () => console.log("Opening Powershell");
// }
// function openChrome()
