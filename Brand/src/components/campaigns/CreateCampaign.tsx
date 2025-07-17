import React from 'react';
export const CreateCampaign = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Create Campaign</h1>
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="campaignName" className="block text-sm font-medium text-gray-700 mb-1">
              Campaign Name
            </label>
            <input type="text" id="campaignName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter campaign name" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea id="description" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter campaign description"></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input type="number" id="budget" className="w-full pl-7 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter budget amount" />
              </div>
            </div>
            <div>
              <label htmlFor="influencerCount" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Influencers
              </label>
              <input type="number" id="influencerCount" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter number of influencers" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input type="date" id="startDate" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input type="date" id="endDate" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Campaign Requirements
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="req1" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="req1" className="ml-2 block text-sm text-gray-700">
                  Post on Instagram
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="req2" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="req2" className="ml-2 block text-sm text-gray-700">
                  Post on TikTok
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="req3" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="req3" className="ml-2 block text-sm text-gray-700">
                  Include product link
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <button type="button" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Save as Draft
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>;
};