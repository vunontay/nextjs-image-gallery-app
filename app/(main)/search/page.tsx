import { getSearchResults } from "@/app/(main)/search/actions";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const params = await searchParams;
    const results = await getSearchResults(params.query || "");

    return <div>{results[0]?.imageUrl}</div>;
}
