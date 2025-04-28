import {z} from 'zod';

export const EnvSchema = z.object({
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT: z.string().url(),
    NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY: z.string(),
    IMAGEKIT_PRIVATE_KEY: z.string(),
    NEXT_PUBLIC_API_ENDPOINT: z.string().url(),
    DATABASE_URL: z.string().url(),
})

export const env = EnvSchema.parse(process.env);