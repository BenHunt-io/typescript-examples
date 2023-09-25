

 

function printGenericObject<T extends object>(obj: T){
    console.log(`Object: ${obj}`);
    console.log(`Constructor name: ${obj.constructor.name}`)
}


class Money {}

printGenericObject(new Money());