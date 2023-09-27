import {z} from 'zod';


let dbSchema = {
    PostTable: {
        tableName: "Post",
        schema: z.object({
            contents : z.string()
        })
    }
}

type PostType = z.infer<typeof dbSchema.PostTable.schema>;