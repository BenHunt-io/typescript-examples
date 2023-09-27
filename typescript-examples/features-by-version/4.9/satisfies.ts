

/**
 * Example using satifies to enforce that a collection implementation is either using numbers or strings for the type of the item in the collection
 */

interface Collection<T> {
    items: T[];
    add(item: T);
    getAll() : T[];
}

let collectionNumberImpl = {
    items :[],
    add : (item: number) => this.items.push(item),
    getAll : () => this.items

} satisfies Collection<number | string>



let collectionBooleanImpl = {
    items :[],
    // @ts-ignore
    add : (item: boolean) => this.items.push(item),
    getAll : () => this.items

} satisfies Collection<number | string>



