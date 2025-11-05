import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    items: z.array(z.object({
      name: z.string(),
      price: z.string(),
      ingredients: z.array(z.object({
        protein: z.string(),
        description: z.string(),
        sauce: z.string()
      }))
    }))
  })
});

export const collections = {
  menu: menuCollection
};