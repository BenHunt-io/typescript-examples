

interface Post {
    _id : `post_${string}`
}

interface User {
    _id : `user_${string}`

}

interface Schema {
    post: Post,
    user: User
}


function createId<Id extends Schema[keyof Schema]["_id"]>(id : Id){
    return id;
}

function driver(){
    // createId("comment_1"); type error
    createId("post_1");
    createId("user_1");

}
