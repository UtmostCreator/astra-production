import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: ({image}) => z.object({
        author: z.string(),
        categories: z.string().array().optional(),
        date: z.string(),
        featured: z.boolean({
            required_error: "Featured",
            invalid_type_error: "Non-Featured",
        }),
        image: image(),
        title: z.string(),
    }),
});

export const collections = { posts: postsCollection };
