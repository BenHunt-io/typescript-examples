

/**
 * Example 1
 */
{
    interface Post {
        content : string
    }

    interface RequiredId  {
        _id : any
    }

    interface OptionalId {
        _id? : any
    }

    // If post extends RequiredId make type P = RequiredId else OptionalId
    type P = Post extends RequiredId ? RequiredId : OptionalId;

    function createPost(content : string) : P {
        return {
            // _id evaluates to optional
        }
    }
}


/**
 * Example 2
 */

{
    interface PostWithId {
        _id : any
        content : string
    }

    interface PostWithoutId {
        content : string
    }

    interface RequiredId  {
        _id : any
    }

    interface OptionalId {
        _id? : any
    }

    type OptionalUnlessRequiredId<T> = T extends RequiredId ? T : OptionalId & T;

    function save<T>(post : OptionalUnlessRequiredId<T>) {
    }

    function doSave(){
        save<PostWithoutId>({ 
            content : "happy birthday"
        })

        save<PostWithId>({
            _id : 1,
            content : "happy birthday"
        })
    }
}
