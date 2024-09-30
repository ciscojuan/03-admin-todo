'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

interface Props {
  icon: React.ReactNode;
  path?: String;
  title: String;
}

function SidebarItem({ title, icon, path }: Props) {
  const pathName = usePathname();
  return (
    <>
      {/* Active className:  */}

      <Link
        href={ path }
        className={`${
          pathName === path
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white"
            : ""
        } 
        px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group`}
      >
        { icon }
        <span className="group-hover:text-white-700">{ title }</span>
      </Link>
    </>
  );
}

export default SidebarItem;
