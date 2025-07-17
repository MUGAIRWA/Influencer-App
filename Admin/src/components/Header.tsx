import React from 'react';
import { Bell, Search, Menu, ChevronDown } from 'lucide-react';
interface HeaderProps {
  onMenuClick: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  onMenuClick
}) => {
  return <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Menu size={20} />
        </button>
        <div className="ml-4 relative hidden md:block w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </div>
          <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-md hover:bg-gray-100 relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <span className="text-sm font-medium mr-2 hidden md:block">
            Admin User
          </span>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <span className="font-medium text-sm">AD</span>
          </div>
          <ChevronDown size={16} className="ml-1 text-gray-500" />
        </div>
      </div>
    </header>;
};