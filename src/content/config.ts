import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    items: z.array(z.object({
      name: z.string(),
      price: z.string(),
      ingredients: z.array(z.object({
        protein: z.string().optional(),
        description: z.string(),
        sauce: z.string().optional()
      }))
    }))
  })
});

export const collections = {
  menu: menuCollection
};