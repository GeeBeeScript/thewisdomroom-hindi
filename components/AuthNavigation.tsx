"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AuthNavigation = () => {
  return (
    <nav className="w-full px-2 py-2  h-[20%] border-b border-b-gray-300">
      <ul className="sm:max-2xl:max-w-[80%] m-auto flex justify-between items-center ">
        <li className="flex gap-1 sm:flex-col sm:gap-2 sm:justify-center sm:items-center">
          <p className="font-bold text-[1.2rem]">
            The Wisdom Room{" "}
            <span className="flex gap-2 justify-start items-center sm:w-full">
              ({" "}
              <span>
                <Image
                  src="/india_flag.png"
                  alt="Hindi logo"
                  width={20}
                  height={20}
                />
              </span>{" "}
              <span className="hidden sm:block text-[0.8rem]">IN</span> )
            </span>
          </p>
        </li>
        <li className="flex justify-between items-center gap-5">
          <Link href="/signup">
            <Button>साइन अप करें</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="border-zinc-950 text-zinc-950">
              लॉगिन करें
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavigation;
