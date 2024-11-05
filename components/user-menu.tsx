"use client";

import { SearchForm } from "@/app/(main)/_components/search-form";
import { MainLogo } from "@/components/logo";
import { H3 } from "@/components/title";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { UserAvatar } from "@/components/user-avatar";

import { cn } from "@/lib/utils";
import {
    Check,
    LogOutIcon,
    Menu,
    Monitor,
    Moon,
    Palette,
    Sun,
    Upload,
    UserIcon,
} from "lucide-react";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IUserMenu {
    className?: string;
}

const LoginButton = ({ className }: IUserMenu) => {
    return (
        <Link href={""} className={className}>
            <Button variant={"outline"} size={"default"}>
                Sign In
            </Button>
        </Link>
    );
};

const UploadButton = ({ className }: IUserMenu) => {
    return (
        <Link href={""} className={className}>
            <Button variant={"default"} size={"default"}>
                Upload <Upload />
            </Button>
        </Link>
    );
};

const MenubarButton = ({ className }: IUserMenu) => {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        className={className}
                        variant={"outline"}
                        size={"icon"}
                    >
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                        <SheetTitle className="border-b pb-2">
                            <MainLogo className="" />
                        </SheetTitle>
                    </SheetHeader>
                    <div className="h-full">
                        <H3
                            title="Search for free photos"
                            className="text-xl font-semibold py-2 mt-4 text-center"
                        />
                        <SearchForm />

                        <div className="absolute w-full bottom-4 px-6 pt-2 left-0 border-t">
                            <div className="flex items-center justify-end gap-2 sm:gap-2">
                                <LoginButton />
                                <UploadButton />
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

const UserButton = ({ className }: IUserMenu) => {
    const { theme, setTheme } = useTheme();

    const router = useRouter();

    const switchLanguage = (lang: string) => {
        router.push(`/${lang}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn("flex-none rounded-full ", className)}>
                    <UserAvatar avatarUrl="" className="shadow-md" size={40} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="py-2">
                    @vunontay
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={`""`}>
                    <DropdownMenuItem>
                        <UserIcon className="mr-2 size-4" />
                        Profile
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="gap-2">
                        <Palette className="mr-2 size-4" />
                        Theme
                    </DropdownMenuSubTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem
                                onClick={() => setTheme("system")}
                            >
                                <Monitor className="mr-2 size-4" />
                                System
                                {theme === "system" && (
                                    <Check className="ms-2 size-4" />
                                )}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="mr-2 size-4" />
                                Light
                                {theme === "light" && (
                                    <Check className="ms-2 size-4" />
                                )}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="mr-2 size-4" />
                                Dark
                                {theme === "dark" && (
                                    <Check className="ms-2 size-4" />
                                )}
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="gap-2">
                        <span className="mr-2 size-4">🌐</span> Language
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem
                                onClick={() => switchLanguage("en")}
                            >
                                <span>English</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => switchLanguage("vi")}
                            >
                                <span>Tiếng Việt</span>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        // logout();
                    }}
                >
                    <LogOutIcon className="mr-2 size-4" />
                    logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

UserButton.displayName = "UserButton";
LoginButton.displayName = "LoginButton";
UploadButton.displayName = "UploadButton";
MenubarButton.displayName = "MenubarButton";
export { UserButton, LoginButton, UploadButton, MenubarButton };
