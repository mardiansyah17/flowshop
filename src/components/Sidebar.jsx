import userSidebar from "@/hooks/useSidebar";
import Link from "next/link";
import React from "react";
import navLInk from "./navLink";
import { useRouter } from "next/router";

export default function Sidebar() {
  const { isOpen, onClose } = userSidebar();
  const router = useRouter();
  return (
    <div
      className={`h-screen  fixed top-0 w-80 bg-white border-r border-gray-300 z-10 ease-in-out duration-300 ${
        isOpen ? "translate-x-0 " : "-translate-x-full"
      }`}
    >
      <ul className="p-2">
        {navLInk.map((link) => {
          return (
            <li
              onClick={() => onClose()}
              className={` p-3 mb-1 rounded-md hover:bg-gray-500 hover:bg-opacity-10 box-border ${
                router.asPath === link.href ? "text-blue-500" : ""
              }`}
            >
              <Link
                className={` w-full block transition-all ease-in-out duration-500 delay-100 ${
                  isOpen ? "translate-x-5" : "-translate-x-4"
                } `}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
