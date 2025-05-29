import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import Text from "@/components/Text";

type PropsType = {
    isOpen: boolean;
    onClose: () => void;
};

export default function NavMenu(props: PropsType) {
    const pathname = usePathname();

    const { isOpen, onClose } = props;

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
                id="headlessui-popover-panel-:Rrmiqja:"
                data-headlessui-state="open"
                data-open=""
            >
                <div className="flex flex-row-reverse items-center justify-between">
                    <button
                        aria-label="Close menu"
                        className="cursor-pointer -m-1 p-1"
                        type="button"
                        data-headlessui-state="open active"
                        data-open=""
                        data-active=""
                        onClick={onClose}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                        >
                            <path
                                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                    <h2 className="font-bold text-sm-4xl text-zinc-600 dark:text-zinc-400">
                        Navigation
                    </h2>
                </div>
                <nav className="mt-6">
                    <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                        {navItems.map((item, index: number) => {
                            const isNavActive = pathname === item.href;

                            return (
                                <li key={index}>
                                    <Link href={item.href}>
                                        <Text
                                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
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
        </>
    );
}
