

type Point = {x: number, y: number}

type PointType = keyof Point;
type PointTypeUsingString = "x" | "y";


// Object has many 0-many properties with keys of type number
type Arrayish = {[n : number] : any}
let arrayishObj : Arrayish = {};

// @ts-ignore -- does not compile
arrayishObj = {"a" : "foo"};
arrayishObj = {1 : "foo"};

type Mapish = {[key: string] : boolean}
type M = keyof Mapish;

// js keys coerced to string always, so key type is 
let mKeyType : M = "0";
mKeyType = 0;

// @ts-ignore -- does not compile
mKeyType = true
