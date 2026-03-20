"use client";

import MainNavSearch from "./MainNavSearch";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MainNavMenu from "./MainNavMenu";
import Link from "next/link";
import { UserAuth } from "@/app/context/auth-context";
import Image from "next/image";

const MainNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { user, isLoading, verifyUserStatus } = UserAuth();

  const onCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const onOpenMenu = () => {
    setMenuIsOpen(true);
  };

  useEffect(() => {
    verifyUserStatus();
  }, [user, isLoading]);

  return (
    <nav className="w-full px-2 py-2  h-[20%] border-b border-b-gray-300">
      <ul className="sm:max-w-[80%] md:max-w-[90%] lg:max-2xl:max-w-[80%] m-auto flex justify-between items-center ">
        <li className="sm:max-2xl:hidden mr-3" onClick={onOpenMenu}>
          <Menu />
        </li>
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
        <li className="hidden md:flex justify-between items-center gap-4 mx-4">
          <p className="hover:text-gray-400 transition-all duration-75 ease-in">
            <Link href="/main/Interpretations">Interpretation</Link>
          </p>
          <p className="hover:text-gray-400 transition-all duration-75 ease-in">
            <Link href="/main/Questions">Questions</Link>
          </p>
          <p className="hover:text-gray-400 transition-all duration-75 ease-in">
            <Link href="/main/AskAQuestion">Ask A Question</Link>
          </p>
          <p className="hover:text-gray-400 transition-all duration-75 ease-in">
            <Link href="/main/ViewTeachings">View Teachings</Link>
          </p>
        </li>

        <li>
          <MainNavSearch />
        </li>
      </ul>
      <MainNavMenu isOpen={menuIsOpen} onClose={onCloseMenu} />
    </nav>
  );
};

export default MainNavigation;
