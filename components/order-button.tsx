"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { OrderData } from "@/schemas/search-schema";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

// Define the order options
const orderOptions: OrderData[] = [
    { value: "latest", param: "latest", label: "Latest" },
    { value: "oldest", param: "oldest", label: "Oldest" },
    { value: "popular", param: "popular", label: "Popular" },
    { value: "views", param: "views", label: "Most Viewed" },
    { value: "downloads", param: "downloads", label: "Most Downloaded" },
];

const OrderButton = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get the current 'order' parameter from the URL
    const currentParam = searchParams.get("order") || "";

    // Find the current order option based on the URL parameter
    const currentOrder =
        orderOptions.find((option) => option.param === currentParam) ||
        orderOptions[0];

    const handleValueChange = (newValue: string) => {
        // Find the selected order option
        const selectedOrder = orderOptions.find(
            (option) => option.value === newValue
        );

        if (selectedOrder) {
            // Create a new URLSearchParams object from the current search parameters
            const params = new URLSearchParams(searchParams);

            // Set the 'order' parameter based on the selected value
            params.set("order", selectedOrder.param);

            // Update the URL with the new search parameters
            router.push(`?${params.toString()}`);
        }
    };

    return (
        <Select value={currentOrder.value} onValueChange={handleValueChange}>
            <SelectTrigger className="w-40 text-sm font-medium">
                <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {orderOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
OrderButton.displayName = "OrderButton";
export { OrderButton };
