import {z, defineCollection} from 'astro:content';

const bookCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        author: reference('authors'),
    })

});

const authorsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        email: z.string(),
        bio: z.string(),
        
    })

});

const NewsLetterCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        author: z.string(),
        date: z.string(),
        draft: z.boolean(),
    })

});

export const collections = {
    book: bookCollection,
    newsletter: NewsLetterCollection,

}