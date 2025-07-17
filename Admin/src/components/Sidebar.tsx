import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, Calendar, DollarSign, BarChart2, Bell, FileText, Settings, FileDigit, Menu } from 'lucide-react';
interface SidebarProps {
  collapsed: boolean;
}
export const Sidebar: React.FC<SidebarProps> = ({
  collapsed
}) => {
  const navItems = [{
    name: 'Dashboard',
    icon: <LayoutDashboard size={20} />,
    path: '/dashboard'
  }, {
    name: 'Influencers',
    icon: <Users size={20} />,
    path: '/influencers'
  }, {
    name: 'Brands',
    icon: <Briefcase size={20} />,
    path: '/brands'
  }, {
    name: 'Campaigns',
    icon: <Calendar size={20} />,
    path: '/campaigns'
  }, {
    name: 'Payouts',
    icon: <DollarSign size={20} />,
    path: '/payouts'
  }, {
    name: 'Reports',
    icon: <BarChart2 size={20} />,
    path: '/reports'
  }, {
    name: 'Notifications',
    icon: <Bell size={20} />,
    path: '/notifications'
  }, {
    name: 'Content',
    icon: <FileText size={20} />,
    path: '/content'
  }, {
    name: 'Settings',
    icon: <Settings size={20} />,
    path: '/settings'
  }, {
    name: 'Logs',
    icon: <FileDigit size={20} />,
    path: '/logs'
  }];
  return <aside className={`${collapsed ? 'w-16' : 'w-64'} bg-gray-900 text-white transition-all duration-300 ease-in-out flex flex-col h-full`}>
      <div className={`p-4 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && <span className="text-xl font-bold">Admin Panel</span>}
        {collapsed && <Menu size={24} />}
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {navItems.map(item => <li key={item.name}>
              <NavLink to={item.path} className={({
            isActive
          }) => `flex items-center px-4 py-3 ${isActive ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-800'} ${collapsed ? 'justify-center' : ''}`}>
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </NavLink>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        {!collapsed && <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="font-medium text-sm">AD</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
          </div>}
        {collapsed && <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="font-medium text-sm">AD</span>
            </div>
          </div>}
      </div>
    </aside>;
};