import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { InfluencerManagement } from './components/InfluencerManagement';
import { BrandManagement } from './components/BrandManagement';
import { CampaignOversight } from './components/CampaignOversight';
import { PayoutManagement } from './components/PayoutManagement';
import { ReportsAnalytics } from './components/ReportsAnalytics';
import { NotificationsMessaging } from './components/NotificationsMessaging';
import { ContentModeration } from './components/ContentModeration';
import { SettingsPermissions } from './components/SettingsPermissions';
import { LogsAudit } from './components/LogsAudit';
export function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar collapsed={sidebarCollapsed} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/influencers" element={<InfluencerManagement />} />
              <Route path="/brands" element={<BrandManagement />} />
              <Route path="/campaigns" element={<CampaignOversight />} />
              <Route path="/payouts" element={<PayoutManagement />} />
              <Route path="/reports" element={<ReportsAnalytics />} />
              <Route path="/notifications" element={<NotificationsMessaging />} />
              <Route path="/content" element={<ContentModeration />} />
              <Route path="/settings" element={<SettingsPermissions />} />
              <Route path="/logs" element={<LogsAudit />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>;
}