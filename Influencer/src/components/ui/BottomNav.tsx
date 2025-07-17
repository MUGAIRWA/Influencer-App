import React from 'react';
import { HomeIcon, SearchIcon, DollarSignIcon, BellIcon, UserIcon } from 'lucide-react';
export function BottomNav({
  currentScreen,
  navigateTo
}) {
  const navItems = [{
    id: 'dashboard',
    label: 'Home',
    icon: HomeIcon
  }, {
    id: 'campaigns',
    label: 'Campaigns',
    icon: SearchIcon
  }, {
    id: 'earnings',
    label: 'Earnings',
    icon: DollarSignIcon
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: BellIcon
  }, {
    id: 'profile',
    label: 'Profile',
    icon: UserIcon
  }];
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        {navItems.map(item => <button key={item.id} className={`flex flex-col items-center p-2 ${currentScreen === item.id ? 'text-blue-600' : 'text-gray-500'}`} onClick={() => navigateTo(item.id)}>
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>)}
      </div>
    </div>;
}