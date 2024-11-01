import { MainLogo } from "@/components/logo";
import { SearchField } from "@/components/search-field";
import { UserButton } from "@/components/user-button";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="mx-auto flex flex-wrap items-center justify-center gap-4 max-w-2xl px-4 py-4 sm:px-6 lg:max-w-6xl lg:px-8">
                <MainLogo />
                <SearchField />
                <UserButton className="sm:ms-auto" />
            </div>
        </header>
    );
};

Navbar.displayName = "Navbar";
export { Navbar };
