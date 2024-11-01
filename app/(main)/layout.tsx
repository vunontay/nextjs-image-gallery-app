import { Navbar } from "@/app/(main)/_components/navbar";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8">
                {children}
            </main>
        </>
    );
}
