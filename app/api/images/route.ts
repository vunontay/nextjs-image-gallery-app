import { fetchUnsplashImages } from "@/lib/unsplash-api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = await new URL(request.url);
        const page = searchParams.get("page") || "1";
        const order_by = searchParams.get("order");
        const images = await fetchUnsplashImages(
            Number(page),
            order_by?.toString()
        );

        return NextResponse.json(images);
    } catch (error) {
        console.error("API route error:", error);

        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "An unexpected error occurred",
                images: [],
            },
            { status: 500 }
        );
    }
}
