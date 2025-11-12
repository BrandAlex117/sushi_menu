import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    items: z.array(z.object({
      name: z.string(),
      price: z.string(),
      type: z.string().optional(),
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