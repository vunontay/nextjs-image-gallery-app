import { SearchForm } from "@/app/(main)/_components/search-form";
import { MainLogo } from "@/components/logo";
import {
    LoginButton,
    UserButton,
    UploadButton,
    MenubarButton,
} from "@/components/user-menu";

const Navbar = () => {
    let user;
    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="container mx-auto flex items-center justify-between gap-2 px-4 sm:px-8 py-2 sm:gap-4 sm:py-4 lg:gap-8">
                <div className="flex items-center gap-8">
                    <MainLogo className="" />
                    <SearchForm className="hidden lg:flex" />
                </div>
                <nav className="flex items-center gap-2 sm:gap-2">
                    <MenubarButton
                        className="lg:hidden"
                        aria-label="Open menu"
                    />

                    {user ? (
                        <UserButton className="hidden lg:block" />
                    ) : (
                        <>
                            <LoginButton className="hidden lg:block" />
                            <UploadButton className="hidden lg:block" />
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

Navbar.displayName = "Navbar";
export { Navbar };
