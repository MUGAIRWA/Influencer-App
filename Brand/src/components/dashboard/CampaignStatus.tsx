import React from 'react';
import { CheckCircleIcon, ClockIcon, AlertCircleIcon, ChevronRightIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
export const CampaignStatus = () => {
  return <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium text-gray-800">Campaign Status</h3>
        <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                <ClockIcon size={18} className="text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium">Pending Approvals</h4>
                <p className="text-sm text-gray-500">2 campaigns need review</p>
              </div>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
              Pending
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-100 hover:border-yellow-200 transition-colors">
              <span className="text-gray-800 font-medium">Campaign A</span>
              <div className="flex items-center">
                <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full mr-2">
                  3 days ago
                </span>
                <ChevronRightIcon size={16} className="text-gray-400" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-100 hover:border-yellow-200 transition-colors">
              <span className="text-gray-800 font-medium">Campaign C</span>
              <div className="flex items-center">
                <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full mr-2">
                  1 day ago
                </span>
                <ChevronRightIcon size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <CheckCircleIcon size={18} className="text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Live Campaigns</h4>
                <p className="text-sm text-gray-500">2 campaigns active</p>
              </div>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
              Active
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-100 hover:border-green-200 transition-colors">
              <div>
                <span className="text-gray-800 font-medium">Campaign B</span>
                <div className="flex items-center mt-1">
                  <TrendingUpIcon size={14} className="text-green-500 mr-1" />
                  <span className="text-xs text-green-600">
                    +12% engagement
                  </span>
                </div>
              </div>
              <ChevronRightIcon size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-100 hover:border-green-200 transition-colors">
              <div>
                <span className="text-gray-800 font-medium">Campaign D</span>
                <div className="flex items-center mt-1">
                  <TrendingDownIcon size={14} className="text-red-500 mr-1" />
                  <span className="text-xs text-red-600">-3% engagement</span>
                </div>
              </div>
              <ChevronRightIcon size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-lg mr-3">
                <AlertCircleIcon size={18} className="text-red-600" />
              </div>
              <div>
                <h4 className="font-medium">Attention Required</h4>
                <p className="text-sm text-gray-500">
                  1 campaign needs attention
                </p>
              </div>
            </div>
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
              Urgent
            </span>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between bg-white p-3 rounded-md border border-red-100 hover:border-red-200 transition-colors">
              <span className="text-gray-800 font-medium">Campaign E</span>
              <div className="flex items-center">
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full mr-2">
                  Budget limit
                </span>
                <ChevronRightIcon size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};