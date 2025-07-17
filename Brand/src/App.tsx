import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/dashboard/Dashboard';
import { MyCampaigns } from './components/campaigns/MyCampaigns';
import { CreateCampaign } from './components/campaigns/CreateCampaign';
import { InfluencerDiscovery } from './components/influencers/InfluencerDiscovery';
import { Applications } from './components/applications/Applications';
import { Submissions } from './components/applications/Submissions';
import { Payments } from './components/payments/Payments';
import { Reports } from './components/reports/Reports';
import { Settings } from './components/settings/Settings';
export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeCampaignSubTab, setActiveCampaignSubTab] = useState('my-campaigns');
  const [activeApplicationTab, setActiveApplicationTab] = useState('applications');
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'campaigns':
        return activeCampaignSubTab === 'my-campaigns' ? <MyCampaigns /> : <CreateCampaign />;
      case 'influencers':
        return <InfluencerDiscovery />;
      case 'applications':
        return activeApplicationTab === 'applications' ? <Applications /> : <Submissions />;
      case 'submissions':
        return <Submissions />;
      case 'payments':
        return <Payments />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  return <Layout activeTab={activeTab} setActiveTab={setActiveTab} activeCampaignSubTab={activeCampaignSubTab} setActiveCampaignSubTab={setActiveCampaignSubTab} activeApplicationTab={activeApplicationTab} setActiveApplicationTab={setActiveApplicationTab}>
      {renderContent()}
    </Layout>;
}