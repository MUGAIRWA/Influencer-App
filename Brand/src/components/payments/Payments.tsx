import React from 'react';
import { PlusIcon, DownloadIcon } from 'lucide-react';
export const Payments = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Budget & Payments
      </h1>
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <p className="text-gray-500 text-sm">Current Balance</p>
            <h2 className="text-3xl font-bold text-gray-800">$4,500</h2>
          </div>
          <button className="mt-3 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <PlusIcon size={18} className="mr-1" />
            <span>Add Funds</span>
          </button>
        </div>
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="font-medium text-gray-800 mb-3">Budget Tracker</h3>
          <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center">
            Chart: Monthly Spend vs. Budget
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-medium text-gray-800 mb-3">
            Per-Campaign Spend Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campaign
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Spent
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remaining
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $5,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $3,200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $1,800
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      Spring Collection
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $3,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $3,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $0
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      New Product Launch
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $7,500
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $4,300
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $3,200
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          Payment History
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2025-07-01
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Campaign A Payout
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  -$1,000
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 flex items-center">
                    <DownloadIcon size={16} className="mr-1" />
                    Download
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2025-06-25
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Wallet Top-up
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  +$5,000
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 flex items-center">
                    <DownloadIcon size={16} className="mr-1" />
                    Download
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2025-06-15
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Campaign B Payout
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  -$2,500
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 flex items-center">
                    <DownloadIcon size={16} className="mr-1" />
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h3 className="font-medium text-gray-800 mb-4">
            Pending Payouts (to influencers)
          </h3>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-md flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="font-medium">@InfluencerName</p>
                <p className="text-sm text-gray-500">
                  Campaign: Summer Promo 2025
                </p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <span className="font-medium mr-4">$750</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Pending Approval
                </span>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-md flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="font-medium">@AnotherInfluencer</p>
                <p className="text-sm text-gray-500">
                  Campaign: New Product Launch
                </p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <span className="font-medium mr-4">$1,200</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Pending Approval
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};