import BlurImage from "@/components/blur-image";
import { fetchUnsplashImages } from "@/lib/unsplash-api";
import { Suspense } from "react";

export default async function Home() {
    const initialImages = await fetchUnsplashImages(1);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlurImage initialImages={initialImages} />
        </Suspense>
    );
}
