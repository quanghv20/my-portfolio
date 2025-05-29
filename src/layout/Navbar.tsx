'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/constants";
import Text from "@/components/Text";
import NavMenu from "./NavMenu";

export default function Navbar() {
    const pathname = usePathname();

    const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = () => setIsNavMenuOpen((prev) => !prev);

    useEffect(() => {
        setIsNavMenuOpen(false);
    }, [pathname]);

    return (
        <div className="flex flex-1 justify-end md:justify-center">
            <div className="pointer-events-auto md:hidden" data-headlessui-state="">
                <button
                    className="cursor-pointer group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:Rbmiqja:"
                    onClick={handleToggleMenu}
                >
                    Menu
                    <svg
                        viewBox="0 0 8 6"
                        aria-hidden="true"
                        className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                    >
                        <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>

                <NavMenu isOpen={isNavMenuOpen} onClose={handleToggleMenu} />
            </div>
            <nav className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    {navItems.map((item, index: number) => {
                        const isNavActive = pathname === item.href;

                        return (
                            <li key={index}>
                                <Link href={item.href}>
                                    <Text
                                        className="relative block px-4 mx-2 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                        highlighted={isNavActive}
                                    >
                                        {item?.label}
                                    </Text>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
