"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  label: string;
  href: string;
};

const NavLink = ({ label, href }: Props) => {
  const pathname = usePathname();
  const active = "after:scale-100";
  const inactive = "after:scale-0";
  return (
    <Link
      className={`font-medium 
      ${pathname === href ? active : inactive}
      opacity-100 hover:opacity-70  transition-opacity ease-in duration-200 relative after:content-['']  after:absolute after:w-full after:h-[2px] after:transition-all after:duration-200 after:ease-in     after:left-0 after:right-0 after:top-[24px] after:bg-white hover:after:scale-50`}
      href={href}
    >
      {label}{" "}
    </Link>
  );
};

export default NavLink;
