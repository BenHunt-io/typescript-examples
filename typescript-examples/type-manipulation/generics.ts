import { test } from "@jest/globals";


/**
 * Working with Generic Type Variables
 */

function identityWithoutType(arg : any){
    return arg;
}

function identity<T>(arg : T){
    return arg;
}

function logIdentity<T>(arg: T[]){
    console.log(arg.length);
}

test("identity function with types", () => {
    let result = identity({name: "ben"});
})

test("identity function without types", () => {
    let result = identityWithoutType({name: "ben"});
})

test("log identity", () => {
    let result = logIdentity([5]);
})


/**
 * Generic Types
 */

{
    function genericFunction<T>(arg: T) : T {
        return arg;
    }

    interface GenericIdentityFn {
        <T> (arg: T) : T
    }

    // assign genericFn to a function of type GenericFnType
    let genericFn : GenericIdentityFn = genericFunction;
}


{
    // visible to all members of interface
    interface GenericIdentityFn<T> {
        (arg: T) : T
    }

    let genericFn : GenericIdentityFn<number> =  (arg) => arg*2;
    let result = genericFn(5);
}

/**
 * Generic Classes
 */

class GenericNum<NumType> {
    zeroValue : NumType;
    add: (num : NumType, numOther: NumType) => NumType;
}

let num = new GenericNum<number>();
num.zeroValue = 0;
num.add = (x, y) => x+y;


let stringNum = new GenericNum<string>();
stringNum.zeroValue = "0";
stringNum.add = (x, y) => x+y;

/**
 * Generic Constraints
 */
{
    type WithId = {
        _id : number
    }

    function printObjectWithId<T extends WithId>(obj : T){
        console.log(obj);
    }

    // does not compile
    printObjectWithId({
        // @ts-ignore 
        firstName: "Ben"
    })

    printObjectWithId({
        _id: 1,
        firstName: "Ben"
    })


}

/**
 * Using Type Parameters in Generic Constraints
 */
{
    function getProp<T, Prop extends keyof T>(obj : T, key: Prop){
        return obj[key];
    }

    // @ts-ignore -- does not compile
    getProp({a: 1, b: 2}, "c");

    getProp({a: 1, b: 2}, "a");
}



