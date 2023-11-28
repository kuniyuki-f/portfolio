import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      coverImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      category: z.string(),
      tags: z.array(z.string()),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    }),
});

export const collections = {
  blog: blogCollection,
};
