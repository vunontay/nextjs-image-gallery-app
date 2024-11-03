import { z } from "zod";

const searchSchema = z.object({
    query: z.string().min(1, "Search query is required"),
    type: z.enum(["photos", "collections", "users"]),
});

const orderSchema = z.object({
    value: z.enum(["latest", "oldest", "popular", "views", "downloads"]),
    param: z.enum(["latest", "oldest", "popular", "views", "downloads"]),
    label: z.string(),
});

export type SearchFormData = z.infer<typeof searchSchema>;
export type OrderData = z.infer<typeof orderSchema>;
export { searchSchema, orderSchema };
