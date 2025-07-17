import React from 'react';
import { LayoutDashboardIcon, UsersIcon, ClipboardListIcon, FileTextIcon, CreditCardIcon, BarChartIcon, SettingsIcon, ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeCampaignSubTab: string;
  setActiveCampaignSubTab: (tab: string) => void;
}
export const Sidebar = ({
  activeTab,
  setActiveTab,
  activeCampaignSubTab,
  setActiveCampaignSubTab
}: SidebarProps) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Set default subtabs when main tab changes
    if (tab === 'campaigns') {
      setActiveCampaignSubTab('my-campaigns');
    }
  };
  return <aside className="bg-white border-r border-gray-200 w-64 min-h-full hidden md:block">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <button className={`flex items-center w-full px-4 py-3 rounded-md text-left ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => handleTabClick('dashboard')}>
              <LayoutDashboardIcon size={20} className="mr-3" />
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-left ${activeTab === 'campaigns' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => handleTabClick('campaigns')}>
              <div className="flex items-center">
                <div size={20} className="mr-3" />
                <span>Campaigns</span>
              </div>
              {activeTab === 'campaigns' ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
            </button>
            {activeTab === 'campaigns' && <ul className="pl-10 mt-1 space-y-1">
                <li>
                  <button className={`w-full px-3 py-2 rounded-md text-left ${activeCampaignSubTab === 'my-campaigns' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveCampaignSubTab('my-campaigns')}>
                    My Campaigns
                  </button>
                </li>
                <li>
                  <button className={`w-full px-3 py-2 rounded-md text-left ${activeCampaignSubTab === 'create' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveCampaignSubTab('create')}>
                    Create
                  </button>
                </li>
              </ul>}
          </li>
          <li>
            <button className={`flex items-center w-full px-4 py-3 rounded-md text-left ${activeTab === 'influencers' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => handleTabClick('influencers')}>
              <UsersIcon size={20} className="mr-3" />
              <span>Influencers</span>
            </button>
          </li>
          <li>
            <button className={`flex items-center w-full px-4 py-3 rounded-md text-left ${activeTab === 'applications' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => handleTabClick('applications')}>
              <ClipboardListIcon size={20} className="mr-3" />
              <span>Applications</span>
            </button>
          </li>
          <li>
            <button className={`flex items-center w-full px-4 py-3 rounded-md text-left ${activeTab === 'submissions' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => handleTabClick('submissions')}>
              <FileTextIcon size={20} className="mr-3" />
              <span>Submissions</span>
            </button>
          </li>
          <li>
            <button className={`flex items-center w-full px-4 py-3 rounded-md text-left ${activeTab === 'payments' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => handleTabClick('payments')}>
              <CreditCardIcon size={20} className="mr-3" />
              <span>Payments</span>
            </button>
          </li>
          <li>
            <button className={`flex items-center w-full px-4 py-3 rounded-md text-left ${activeTab === 'reports' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => handleTabClick('reports')}>
              <BarChartIcon size={20} className="mr-3" />
              <span>Reports</span>
            </button>
          </li>
          <li>
            <button className={`flex items-center w-full px-4 py-3 rounded-md text-left ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => handleTabClick('settings')}>
              <SettingsIcon size={20} className="mr-3" />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>;
};