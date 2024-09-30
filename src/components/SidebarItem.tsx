import Link from 'next/link';
import React from 'react'
import { CiBookmarkCheck } from 'react-icons/ci';

function SidebarItem() {
  return (
    <>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      
      <Link
        href="/dashboard/rest-todos"
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <CiBookmarkCheck size={30} className="text-green-800" />
        <span className="group-hover:text-gray-700">To dos Done</span>
      </Link>
    </>
  );
}

export default SidebarItem