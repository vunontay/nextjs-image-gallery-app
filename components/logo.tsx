import Link from "next/link";

const MainLogo = () => {
    return (
        <Link href="/" className="text-2xl font-medium text-primary">
            <span className="font-bold">Gallery Image</span>
        </Link>
    );
};

MainLogo.displayName = "MainLogo";

export { MainLogo };
