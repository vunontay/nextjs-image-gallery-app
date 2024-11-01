import { TImage } from "@/app/types/image-type";
import "server-only";

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const IMAGES_PER_PAGE = 8;

export async function fetchUnsplashImages(page: number): Promise<TImage[]> {
    if (!UNSPLASH_ACCESS_KEY) {
        throw new Error("Unsplash API key is missing");
    }

    const response = await fetch(
        `https://api.unsplash.com/photos?page=${page}&per_page=${IMAGES_PER_PAGE}&order_by=popular`,
        {
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
            // Important: configure caching strategy
            next: {
                revalidate: 3600, // Revalidate every hour
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch images");
    }

    return response.json();
}
