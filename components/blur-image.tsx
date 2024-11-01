"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const BlurImage = () => {
    const [isLoading, setLoading] = useState<boolean>(true);
    return (
        <a href="#" className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                    alt=""
                    src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
                    fill // Use fill instead of layout="fill"
                    className={cn(
                        "duration-700 ease-in-out group-hover:opacity-75",
                        isLoading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                    )}
                    onLoad={() => setLoading(false)}
                    priority // Keep this prop for performance
                    sizes="(max-width: 640px) 100vw, 50vw" // Adjust sizes based on your layout
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">vunontay</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
                @vunontay-dev
            </p>
        </a>
    );
};

export default BlurImage;
