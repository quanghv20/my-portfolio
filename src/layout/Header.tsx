import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="shadow sm:shadow-none fixed top-0 left-0 z-50 w-full pointer-events-none z-50 flex flex-none flex-col bg-zinc-50 dark:bg-black">
            {/* <header className="fixed top-0 left-0 z-50 w-full bg-white shadow"> */}
            <div className="top-0 z-10 h-auto pt-6 pb-6">
                <div className="sm:px-8 top-(--header-top,--spacing(6)) w-full">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="relative flex gap-4">
                                    <div className="flex flex-1">
                                        {/* {location.pathname !== "/" && <NavbarAvatar />} */}
                                    </div>
                                    <Navbar />
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
