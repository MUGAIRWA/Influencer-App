import React from 'react';
export const Reports = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-500 text-sm">Total Campaigns</p>
          <h3 className="text-2xl font-bold mt-1">20</h3>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-500 text-sm">Total Influencers</p>
          <h3 className="text-2xl font-bold mt-1">45</h3>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-500 text-sm">Total Content Pieces</p>
          <h3 className="text-2xl font-bold mt-1">128</h3>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-500 text-sm">Avg. Engagement Rate</p>
          <h3 className="text-2xl font-bold mt-1">4.7%</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Campaign Performance
          </h2>
          <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
            Performance Chart
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            ROI by Platform
          </h2>
          <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
            ROI Chart
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Top Performing Campaigns
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROI
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Summer Promo 2025
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  180%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5.8%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1,245
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Spring Collection
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  155%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  4.9%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  987
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    New Product Launch
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  140%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  4.2%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  856
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Top Performing Influencers
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Influencer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROI
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    @TopInfluencer
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Instagram
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  6.2%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  324
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  210%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    @SecondBest
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  TikTok
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  5.7%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  287
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  180%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    @ThirdPlace
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  YouTube
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  5.1%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  243
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  165%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};