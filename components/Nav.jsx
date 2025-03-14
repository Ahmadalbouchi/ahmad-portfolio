"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    
return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.path}
                    className={`${pathname === link.path && "text-accent border-b-2 border-accent"
                        
                    } captilize font-medium hover:text-accent transition-all `}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
