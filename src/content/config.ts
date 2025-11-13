import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    items: z.array(z.object({
      // Para archivos con subcategorías (makis)
      type: z.string().optional(),
      content: z.array(z.object({
        name: z.string(),
        price: z.string(),
        type: z.string().optional(), // "Empanizado", "Frio"
        ingredients: z.array(z.object({
          protein: z.string().optional(),
          description: z.string(),
          sauce: z.string().optional()
        }))
      })).optional(),
      
      // Para archivos normales (burguers)
      name: z.string().optional(),
      price: z.string().optional(),
      ingredients: z.array(z.object({
        protein: z.string().optional(),
        description: z.string(),
        sauce: z.string().optional()
      })).optional()
    }))
  })
});

export const collections = {
  menu: menuCollection
};