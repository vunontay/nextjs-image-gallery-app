import { SearchForm } from "@/app/(main)/_components/search-form";
import { GalleryImage } from "@/components/gallery-image";
import { fetchUnsplashImages } from "@/lib/unsplash-api";
import { Suspense } from "react";

export default async function Home() {
    const initialImages = await fetchUnsplashImages(1);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <h1 className="text-primary text-2xl font-bold mb-2">
                Free high quality beautiful image warehouse
            </h1>
            <h2 className="mb-6 text-md">
                Beautiful free stock photos with over 1 million images and
                videos shared by our talented community.
            </h2>
            <SearchForm />
            <GalleryImage initialImages={initialImages} />
        </Suspense>
    );
}
