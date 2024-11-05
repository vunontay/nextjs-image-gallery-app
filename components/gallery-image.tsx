"use client";

import { TImage } from "@/app/types/image-type";
import { CardImage } from "@/components/card-image";
import { Spinner } from "@/components/spinner";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface IGalleryImageProps {
    initialImages: TImage[];
}

const GalleryImage = (
    { initialImages }: IGalleryImageProps = { initialImages: [] }
) => {
    const [images, setImages] = useState<TImage[]>(initialImages);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(2);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [columns, setColumns] = useState<number>(4);
    const searchParams = useSearchParams();
    const galleryRef = useRef<HTMLDivElement>(null);

    const currentParam = searchParams.get("order") || "latest";
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    const loadMoreImages = async () => {
        if (isLoading || !hasMore) return;

        setLoading(true);
        try {
            const response = await fetch(
                `/api/images?page=${page}&order=${currentParam}`
            );
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

    useEffect(() => {
        if (inView && hasMore) {
            loadMoreImages();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, hasMore]);

    useEffect(() => {
        const updateColumns = () => {
            const width = galleryRef.current?.offsetWidth || window.innerWidth;
            if (width < 640) setColumns(2);
            else if (width < 1024) setColumns(3);
            else if (width < 1280) setColumns(4);
            else setColumns(5);
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    return (
        <div className="container mx-auto" ref={galleryRef}>
            <div
                className="grid gap-4"
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gridAutoRows: "10px",
                }}
            >
                {images.map((image) => (
                    <div
                        key={image.id}
                        style={{
                            gridRowEnd: `span ${Math.ceil(
                                image.height / (image.width / 250) / 14
                            )}`,
                        }}
                    >
                        <CardImage
                            image={image}
                            onAddToCollection={() =>
                                console.log(`Add ${image.id} to collection`)
                            }
                            onAddToWishlist={() =>
                                console.log(`Add ${image.id} to wishlist`)
                            }
                            isLoading={isLoading}
                        />
                    </div>
                ))}
            </div>

            {hasMore && (
                <div ref={ref} className="mt-10 flex justify-center">
                    {isLoading && <Spinner />}
                </div>
            )}
        </div>
    );
};

GalleryImage.displayName = "GalleryImage";
export { GalleryImage };
