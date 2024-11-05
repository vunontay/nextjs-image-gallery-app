"use client";

import Image from "next/image";
import { Heart, FolderPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TImage } from "@/app/types/image-type";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface CardImageProps {
    onAddToCollection?: () => void;
    onAddToWishlist?: () => void;
    isLoading: boolean;
    image: TImage | null | undefined;
}

const CardImage = ({
    onAddToCollection,
    onAddToWishlist,
    isLoading,
    image,
}: CardImageProps) => {
    return (
        <div className="group relative w-full h-full overflow-hidden rounded-lg">
            <Image
                alt={image?.alt_description || "Image from Unsplash"}
                src={
                    image?.urls.regular ||
                    "/placeholder.svg?height=300&width=300"
                }
                width={image?.width || 300}
                height={image?.height || 300}
                className={cn(
                    "object-cover w-full h-full duration-700 ease-in-out group-hover:scale-110",
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                )}
                blurDataURL={image?.blur_hash}
            />
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex space-x-2 items-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    onClick={onAddToCollection}
                                    className="bg-white text-black hover:bg-gray-200"
                                >
                                    <FolderPlus className="size-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-primary text-white">
                                <p>Add to collection</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    onClick={onAddToWishlist}
                                    className="bg-white text-black hover:bg-gray-200"
                                >
                                    <Heart className="size-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-primary text-white">
                                <p>Add to wishlist</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center justify-center">
                <h3 className="text-lg font-medium text-white">
                    @{image?.user.username || "username"}
                </h3>
            </div>
        </div>
    );
};
CardImage.displayName = "CardImage";
export { CardImage };
