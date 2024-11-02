import { MainLogo } from "@/components/logo";
// import { SearchField } from "@/components/search-field";
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
                <MainLogo className="flex-shrink-0" />
                {/* <SearchField className="hidden flex-grow max-w-md sm:block" /> */}
                <nav className="flex items-center gap-2 sm:gap-4">
                    <MenubarButton
                        className="sm:hidden"
                        aria-label="Open menu"
                    />
                    {/* <SearchField className="hidden sm:hidden" /> */}
                    {user ? (
                        <UserButton className="hidden sm:block" />
                    ) : (
                        <>
                            <LoginButton className="hidden sm:block" />
                            <UploadButton className="hidden sm:block" />
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

Navbar.displayName = "Navbar";
export { Navbar };
