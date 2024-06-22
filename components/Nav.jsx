"use client";

import {Sheet, SheetContent, SheetTrigger, SheetClose} from '@/components/ui/sheet';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const Nav = () => {
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="hover:text-accent text-[32px]" style={{ strokeWidth: 2 }} />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <SheetClose asChild>
                        <Link href="/">
                            <h1 className="text-4xl font-semibold hover:text-accent">
                                "More Tools are on their way!" <span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Nav;