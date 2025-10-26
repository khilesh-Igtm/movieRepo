const z = require('zod');

const entrySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.enum(['Movie', 'TV Show'], { message: 'Type must be "Movie" or "TV Show"' }),
  director: z.string().min(1, 'Director is required'),
  budget: z.string().min(1, 'Budget is required'),
  location: z.string().min(1, 'Location is required'),
  duration: z.string().min(1, 'Duration is required'),
  yearTime: z.string().min(1, 'Year/Time is required'),
});

const updateEntrySchema = entrySchema.partial(); 

const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(10),
});

const searchSchema = z.object({
  title: z.string().optional(),
});

module.exports = { entrySchema, updateEntrySchema, paginationSchema, searchSchema };