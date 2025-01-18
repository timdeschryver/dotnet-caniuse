import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const versions = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/data/versions" }),
    schema: z.object({
        version: z.string(),
        releaseDate: z
            .string()
            .date()
            .transform((str) => new Date(str)),
        endOfSupportDate: z
            .string()
            .date()
            .transform((str) => new Date(str)),
        label: z.enum(["LTS", "STS"]),
        features: z.array(
            z.object({
                tags: z.array(z.string()),
                name: z.string(),
                description: z.string(),
                docs: z.string().url(),
            }),
        ),
    }),
});

export const collections = { versions };
