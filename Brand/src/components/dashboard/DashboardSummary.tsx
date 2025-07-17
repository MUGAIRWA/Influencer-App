import React from 'react';
import { BarChart2Icon, CheckCircleIcon, FileIcon, TrendingUpIcon, UsersIcon, ShoppingBagIcon } from 'lucide-react';
export const DashboardSummary = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              Active Campaigns
            </p>
            <div className="flex items-baseline mt-1">
              <h3 className="text-3xl font-bold text-gray-800">3</h3>
              <span className="ml-2 text-green-500 text-sm font-medium flex items-center">
                <TrendingUpIcon size={14} className="mr-1" />
                +2 this month
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              Last updated: 2 hours ago
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <BarChart2Icon className="text-blue-600" size={24} />
          </div>
        </div>
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full rounded-full" style={{
          width: '75%'
        }}></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              Completed Campaigns
            </p>
            <div className="flex items-baseline mt-1">
              <h3 className="text-3xl font-bold text-gray-800">12</h3>
              <span className="ml-2 text-green-500 text-sm font-medium flex items-center">
                <TrendingUpIcon size={14} className="mr-1" />
                +4 this quarter
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              Last updated: 1 day ago
            </p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircleIcon className="text-green-600" size={24} />
          </div>
        </div>
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="bg-green-500 h-full rounded-full" style={{
          width: '100%'
        }}></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Draft Campaigns</p>
            <div className="flex items-baseline mt-1">
              <h3 className="text-3xl font-bold text-gray-800">5</h3>
              <span className="ml-2 text-yellow-500 text-sm font-medium">
                Needs attention
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              Last updated: 5 days ago
            </p>
          </div>
          <div className="bg-gray-100 p-3 rounded-full">
            <FileIcon className="text-gray-600" size={24} />
          </div>
        </div>
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="bg-yellow-500 h-full rounded-full" style={{
          width: '40%'
        }}></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              Total Influencers
            </p>
            <div className="flex items-baseline mt-1">
              <h3 className="text-3xl font-bold text-gray-800">42</h3>
              <span className="ml-2 text-green-500 text-sm font-medium flex items-center">
                <TrendingUpIcon size={14} className="mr-1" />
                +7 new
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">Last updated: Today</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <UsersIcon className="text-purple-600" size={24} />
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              Total Engagement
            </p>
            <div className="flex items-baseline mt-1">
              <h3 className="text-3xl font-bold text-gray-800">156K</h3>
              <span className="ml-2 text-green-500 text-sm font-medium flex items-center">
                <TrendingUpIcon size={14} className="mr-1" />
                +12.5%
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">Last updated: Today</p>
          </div>
          <div className="bg-indigo-100 p-3 rounded-full">
            <TrendingUpIcon className="text-indigo-600" size={24} />
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              Sales Attributed
            </p>
            <div className="flex items-baseline mt-1">
              <h3 className="text-3xl font-bold text-gray-800">$24.8K</h3>
              <span className="ml-2 text-green-500 text-sm font-medium flex items-center">
                <TrendingUpIcon size={14} className="mr-1" />
                +18.2%
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">Last updated: Today</p>
          </div>
          <div className="bg-pink-100 p-3 rounded-full">
            <ShoppingBagIcon className="text-pink-600" size={24} />
          </div>
        </div>
      </div>
    </div>;
};