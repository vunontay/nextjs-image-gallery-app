"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import { useRouter } from "next/navigation";

const SearchField = () => {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const q = (form.q as HTMLInputElement).value.trim();
        if (!q) return;
        router.push(`/search?q=${encodeURIComponent(q)}`);
    };

    return (
        <form onSubmit={handleSubmit} method="GET" action={"/search"}>
            <div className="relative">
                <Input
                    name="q"
                    placeholder={"Search image..."}
                    className="pe-10"
                />
                <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
            </div>
        </form>
    );
};

SearchField.displayName = "SearchField";

export { SearchField };
