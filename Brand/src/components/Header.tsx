import React from 'react';
import { UserCircle } from 'lucide-react';
export const Header = () => {
  return <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between w-full">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-blue-600">Brand Portal</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
          <UserCircle size={24} />
          <span className="hidden md:inline">My Account</span>
        </button>
      </div>
    </header>;
};