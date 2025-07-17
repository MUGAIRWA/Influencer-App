import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeCampaignSubTab: string;
  setActiveCampaignSubTab: (tab: string) => void;
  activeApplicationTab: string;
  setActiveApplicationTab: (tab: string) => void;
}
export const Layout = ({
  children,
  activeTab,
  setActiveTab,
  activeCampaignSubTab,
  setActiveCampaignSubTab,
  activeApplicationTab,
  setActiveApplicationTab
}: LayoutProps) => {
  return <div className="flex flex-col min-h-screen bg-gray-50 w-full">
      <Header />
      <div className="flex flex-1">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} activeCampaignSubTab={activeCampaignSubTab} setActiveCampaignSubTab={setActiveCampaignSubTab} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>;
};