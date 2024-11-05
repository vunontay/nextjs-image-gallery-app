import { getSearchResults } from "@/app/(main)/search/actions";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const results = await getSearchResults(searchParams.query);

    console.log(results);
    return <div>{results[0]?.imageUrl}</div>;
}
