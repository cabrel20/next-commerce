"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/men",
  },
  {
    name: "Women",
    href: "/women",
  },
  {
    name: "Teens",
    href: "/teens",
  },
];

export default function Navbar() {
  const currentLink = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className=" flex items-center justify-between mx-auto max-w-2xl lg:max-w-7xl  px-4 sm:px-6">
        <Link href="/">
          <h1 className=" text-lg md:text-2xl font-bold">
            Next<span className=" text-primary">Commerce</span>
          </h1>
        </Link>
        <nav className=" hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className={
                  currentLink === link.href
                    ? "text-primary text-lg font-semibold"
                    : "text-gray-600 text-lg font-semibold transition duration-100 hover:text-gray-800"
                }
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className=" flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className=" flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag size={20} />
            <span className=" text-xs text-gray-500 hidden md:block font-semibold">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
