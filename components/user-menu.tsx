"use client";

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
import Link from "next/link";
import { useRouter } from "next/navigation";

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
        <Button className={className} variant={"outline"} size={"icon"}>
            <Menu />
        </Button>
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
