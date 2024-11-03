import Image from "next/image";
import HomeBanner from "@/assets/banner/home-banner.webp";
import { Suspense } from "react";
import { SearchForm } from "@/app/(main)/_components/search-form";
import { GalleryImage } from "@/components/gallery-image";
import { fetchUnsplashImages } from "@/lib/unsplash-api";
import { H1, H2, H3 } from "@/components/title";
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
            <div className="-mx-4 sm:-mx-8 -mt-2 sm:-mt-4 relative">
                <Image
                    src={HomeBanner}
                    alt="home-banner"
                    priority
                    className="brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <H1
                        className="text-primary text-2xl md:text-4xl font-bold mb-2"
                        title="Free high quality beautiful image warehouse"
                    />
                    <H2
                        className="text-white mb-6 text-md"
                        title="Beautiful free stock photos with over 1 million images and videos shared by our talented community."
                    />
                    <SearchForm />
                </div>
            </div>
            <div className="flex justify-between py-6 md:py-8">
                <H3 title="Free Stock Photos" className="text-2xl font-bold" />
                <OrderButton />
            </div>
            <GalleryImage initialImages={initialImages} />
        </Suspense>
    );
}
