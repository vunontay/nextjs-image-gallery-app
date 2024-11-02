"use client";

import { TImage } from "@/app/types/image-type";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IGalleryImageProps {
    initialImages: TImage[];
}

const GalleryImage = ({ initialImages }: IGalleryImageProps) => {
    const [images, setImages] = useState<TImage[]>(initialImages);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(2);
    const [hasMore, setHasMore] = useState<boolean>(true);

    // Sử dụng react-intersection-observer
    const { ref, inView } = useInView({
        threshold: 0.1, // Khi 10% phần tử vào viewport
    });

    const loadMoreImages = async () => {
        if (isLoading || !hasMore) return;

        setLoading(true);
        try {
            const response = await fetch(`/api/images?page=${page}`);
            const newImages: TImage[] = await response.json();

            if (newImages.length === 0) {
                setHasMore(false);
            } else {
                setImages((prev) => [...prev, ...newImages]);
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.error("Failed to load more images", error);
        } finally {
            setLoading(false);
        }
    };

    // Trigger load more khi cuộn đến phần tử cuối
    useEffect(() => {
        if (inView && hasMore) {
            loadMoreImages();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, hasMore]);

    return (
        <div>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {images.map((image, index) => (
                    <Link
                        key={image.id}
                        href={image.links.html}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                            <Image
                                alt={
                                    image.alt_description ||
                                    "Image from Unsplash"
                                }
                                src={image.urls.small}
                                fill
                                className={cn(
                                    "duration-700 ease-in-out group-hover:opacity-75",
                                    isLoading
                                        ? "scale-110 blur-2xl grayscale"
                                        : "scale-100 blur-0 grayscale-0"
                                )}
                                onLoad={() => setLoading(false)}
                                priority={index < 4}
                                sizes="(max-width: 640px) 100vw, 50vw"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-primary">
                            {image.user.name}
                        </h3>
                        <p className="mt-1 text-lg font-medium ">
                            @{image.user.username}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Phần tử cuối để detect khi cuộn đến */}
            {hasMore && (
                <div ref={ref} className="mt-10">
                    {isLoading && <Spinner />}
                </div>
            )}
        </div>
    );
};

GalleryImage.displayName = "GalleryImage";
export { GalleryImage };
