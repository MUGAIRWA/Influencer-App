import React from 'react';
import { PlusIcon } from 'lucide-react';
export const MyCampaigns = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">My Campaigns</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
          <PlusIcon size={18} className="mr-1" />
          <span>Create New Campaign</span>
        </button>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  # Influencers
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $5,000
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  12
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                    View
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    Edit
                  </a>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $3,000
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  8
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                    View
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Archive
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Holiday Campaign
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Draft
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  0
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                    Edit
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Delete
                  </a>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $7,500
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  15
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                    View
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};