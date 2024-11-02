import { z } from "zod";

const searchSchema = z.object({
    query: z.string().min(1, "Search query is required"),
    type: z.enum(["photos", "collections", "users"]),
});

export type SearchFormData = z.infer<typeof searchSchema>;

export { searchSchema };
