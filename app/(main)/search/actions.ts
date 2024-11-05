import { cache } from "react";

// Define a type for the search result items
type SearchResult = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
};

export const getSearchResults = cache(
    async (query: string | string[] | undefined): Promise<SearchResult[]> => {
        // Ensure query is a string
        const searchQuery = Array.isArray(query) ? query[0] : query;

        if (!searchQuery) {
            return [];
        }

        try {
            // In a real application, you would replace this with an actual API call
            // For example:
            // const response = await fetch(`https://api.example.com/search?q=${encodeURIComponent(searchQuery)}`)
            // const data = await response.json()
            // return data.results

            // For demonstration, we'll return mock data
            await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

            const mockResults: SearchResult[] = [
                {
                    id: "1",
                    title: "Result 1",
                    description: "Description for Result 1",
                    imageUrl: "/placeholder.svg?height=100&width=100",
                },
                {
                    id: "2",
                    title: "Result 2",
                    description: "Description for Result 2",
                    imageUrl: "/placeholder.svg?height=100&width=100",
                },
                {
                    id: "3",
                    title: "Result 3",
                    description: "Description for Result 3",
                    imageUrl: "/placeholder.svg?height=100&width=100",
                },
            ].filter((result) =>
                result.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return mockResults;
        } catch (error) {
            console.error("Error fetching search results:", error);
            throw new Error("Failed to fetch search results");
        }
    }
);
