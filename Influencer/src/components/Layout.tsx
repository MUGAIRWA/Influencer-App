import React from 'react';
import { BottomNav } from './ui/BottomNav';
export function Layout({
  children,
  currentScreen,
  navigateTo
}) {
  return <div className="w-full min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 max-w-md mx-auto w-full bg-white overflow-y-auto">
        <div className="h-full pb-16">{children}</div>
      </div>
      <BottomNav currentScreen={currentScreen} navigateTo={navigateTo} />
    </div>;
}