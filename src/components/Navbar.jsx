import userSidebar from "@/hooks/useSidebar";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navLInk from "./navLink";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const { isOpen, onOpen, onClose } = userSidebar();
  const router = useRouter();
  return (
    <nav className="flex items-center border-b border-gray-300 shadow-md  justify-end lg:justify-start  h-14 px-5">
      <ul className="hidden lg:flex lg:space-x-8 lg:items-center">
        {navLInk.map((link) => {
          return (
            <li className={`${router.asPath === link.href ? " text-blue-400 " : ""}`}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
      <div className="lg:hidden">
        {isOpen ? (
          <FaTimes size={25} onClick={() => onClose()} />
        ) : (
          <FaBars size={25} onClick={() => onOpen()} />
        )}
      </div>
    </nav>
  );
}
