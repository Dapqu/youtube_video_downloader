import Link from "next/link";

// Component imports
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-8 border-b-2 border-customColor">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex justify-center items-center flex-grow">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold hover:text-accent">
                            Utility Wizard <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <div className="items-center gap-8">
                    <Nav />
                </div>
            </div>
        </header>
    );
}

export default Header;