"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormData, searchSchema } from "@/schemas/search-schema";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const SearchForm = () => {
    const form = useForm<SearchFormData>({
        resolver: zodResolver(searchSchema),
        defaultValues: {
            query: "",
            type: "photos",
        },
    });

    const handleSubmit = (data: SearchFormData) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className=" flex items-center gap-2 pb-10"
            >
                <div className="relative">
                    <FormField
                        control={form.control}
                        name="query"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Search for images..."
                                        className="pe-10"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        variant={"default"}
                        className="absolute right-2 top-1/2 w-10 h-8 -translate-y-1/2 transform rounded-sm"
                    >
                        <SearchIcon />
                    </Button>
                </div>
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="min-w-28 text-sm font-medium">
                                        <SelectValue placeholder="Search type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="photos">
                                        Photos
                                    </SelectItem>
                                    <SelectItem value="collections">
                                        Collections
                                    </SelectItem>
                                    <SelectItem value="users">Users</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};
SearchForm.displayName = "SearchForm";

export { SearchForm };
