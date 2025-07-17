import React from 'react';
import { DashboardSummary } from './DashboardSummary';
import { BudgetOverview } from './BudgetOverview';
import { CampaignStatus } from './CampaignStatus';
import { TopPerformers } from './TopPerformers';
import { Notifications } from './Notifications';
import { TrendingUpIcon, BellIcon, StarIcon } from 'lucide-react';
export const Dashboard = () => {
  return <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              👋 Welcome back, Brand Name!
            </h1>
            <p className="text-blue-100">
              Here's what's happening with your campaigns today.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center">
              <TrendingUpIcon size={18} className="mr-2" />
              Analytics Overview
            </button>
            <button className="bg-blue-400 bg-opacity-30 text-white px-3 py-2 rounded-md hover:bg-opacity-40 transition-colors">
              <BellIcon size={18} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
          <StarIcon size={20} className="mr-2 text-yellow-500" />
          Campaign Summary
        </h2>
        <DashboardSummary />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Budget Overview
          </h2>
          <BudgetOverview />
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Campaign Status
          </h2>
          <CampaignStatus />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Top Performing Influencers
          </h2>
          <TopPerformers />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Recent Notifications
          </h2>
          <Notifications />
        </div>
      </div>
    </div>;
};