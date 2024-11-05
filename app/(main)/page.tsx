import { Suspense } from "react";

import { GalleryImage } from "@/components/gallery-image";
import { fetchUnsplashImages } from "@/lib/unsplash-api";
import { H3 } from "@/components/title";
import { OrderButton } from "@/components/order-button";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ order?: string }>;
}) {
    const params = await Promise.resolve(searchParams);
    const initialImages = await fetchUnsplashImages(
        1,
        params.order || "popular"
    );

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="-mx-4 sm:-mx-8 -mt-2 sm:-mt-4 relative"></div>
            <div className="flex justify-between py-6 md:py-8">
                <H3 title="Free Stock Photos" className="text-2xl font-bold" />
                <OrderButton />
            </div>
            <GalleryImage initialImages={initialImages} />
        </Suspense>
    );
}
