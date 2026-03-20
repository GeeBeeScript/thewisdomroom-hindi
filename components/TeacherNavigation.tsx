"use client";

import { useEffect, useState } from "react";
import MainNavMenu from "./MainNavMenu";
import { Menu } from "lucide-react";
import { UserAuth } from "@/app/context/auth-context";
import Image from "next/image";

const TeacherNavigation = () => {
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
      <ul className="sm:max-2xl:max-w-[80%] m-auto flex justify-between items-center ">
        <li>
          <div className="font-bold text-[1.2rem] flex justify-between items-center gap-5">
            <span className="md:hidden" onClick={onOpenMenu}>
              <Menu />
            </span>
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
          </div>
        </li>
      </ul>

      <MainNavMenu isOpen={menuIsOpen} onClose={onCloseMenu} />
    </nav>
  );
};

export default TeacherNavigation;
