"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
    {
        href: "/#pricing",
        label: "Pricing",
    },
    {
        href: "/#testimonials",
        label: "Reviews",
    },
    {
        href: "/#faq",
        label: "FAQ",
    },
];

const cta = <button className="btn btn-primary px-2 py-2 bg-[#6373ee] rounded-md">Get started</button>;

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
    useEffect(() => {
        setIsOpen(false);
    }, [searchParams]);

    return (
        <header className="bg-base-200">
            <nav
                className="container flex items-center justify-between px-8 py-4 mx-auto"
                aria-label="Global"
            >
                {/* Your logo/name on large screens */}
                <div className="flex lg:flex-1">
                    <Link
                        className="flex items-center gap-2 shrink-0 "
                        href="/"
                        title={`${config.appName} hompage`}
                    >
                        <Image
                            src={logo}
                            alt={`${config.appName} logo`}
                            className="w-8"
                            placeholder="blur"
                            priority={true}
                        />
                        <span className="font-extrabold text-lg">{config.appName}</span>
                    </Link>
                </div>

                {/* CTA on large screens */}
                <a href="https://ship-fast-docs-k7568tswk-nouman-arshads-projects.vercel.app/" target="_blank">
                    <div className="lg:flex lg:justify-end lg:flex-1">
                        {cta}
                    </div>
                </a>
            </nav>


        </header>
    );
};

export default Header;
