

{
    interface Point {
        x: number,
        y: number
    }

    type P = Point["x"];
}


{
    interface GenericPoint<T> {
        x: T,
        y: T
    }

    type PointA = GenericPoint<object>["x"];

    // @ts-ignore -- does not compile, need to specify generic type
    type PointB = GenericPoint["x"];

}


{
    interface BigDecimal {
        
    }

    // add constraint that type parameter is of type object
    interface GenericPoint<T extends object> {
        x: T,
        y: T
    }

    type PointA = GenericPoint<BigDecimal>["x"];

    // @ts-ignore -- does not compile, need to specify generic type
    type PointB = GenericPoint["x"];

}


{
    interface BigDecimal {
        
    }

    // add constraint that type parameter is of type object
    interface GenericPoint<T extends object = {}> {
        x: T,
        y: T
    }

    // no error, default to empty object type
    type PointB = GenericPoint["x"];
}