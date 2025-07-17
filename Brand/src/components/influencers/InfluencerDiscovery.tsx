import React from 'react';
import { SearchIcon } from 'lucide-react';
export const InfluencerDiscovery = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Discover Influencers
      </h1>
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <div className="w-full md:w-auto">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Location</option>
                <option>United States</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Category</option>
                <option>Fashion</option>
                <option>Beauty</option>
                <option>Fitness</option>
                <option>Food</option>
                <option>Travel</option>
                <option>Technology</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Follower Count</option>
                <option>1K - 10K</option>
                <option>10K - 50K</option>
                <option>50K - 100K</option>
                <option>100K - 500K</option>
                <option>500K+</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Platform</option>
                <option>Instagram</option>
                <option>TikTok</option>
                <option>YouTube</option>
                <option>Twitter</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Performance</option>
                <option>High Engagement</option>
                <option>High Conversion</option>
                <option>Growing Audience</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className="text-gray-400" />
            </div>
            <input type="text" className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search influencers by name, handle, or keywords" />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-medium text-gray-700">Influencer Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Influencer Card 1 */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-gray-600 text-sm">IN</span>
              </div>
              <div>
                <h3 className="font-medium">@Username</h3>
                <p className="text-sm text-gray-500">Fashion, Beauty</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Bio snippet with a brief description of the influencer's content
              and style.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                Fashion
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                Beauty
              </span>
            </div>
            <div className="space-y-1 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Engagement Rate:</span>
                <span className="font-medium">5.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Available:</span>
                <span className="font-medium text-green-600">Yes</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
                View Profile
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Invite
              </button>
            </div>
          </div>
        </div>
        {/* Influencer Card 2 */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-gray-600 text-sm">IN</span>
              </div>
              <div>
                <h3 className="font-medium">@Username2</h3>
                <p className="text-sm text-gray-500">Gaming, Tech</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Tech enthusiast sharing gaming experiences and tech reviews with
              an engaged audience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Gaming
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                Tech
              </span>
            </div>
            <div className="space-y-1 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Engagement Rate:</span>
                <span className="font-medium">4.8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Available:</span>
                <span className="font-medium text-green-600">Yes</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
                View Profile
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Invite
              </button>
            </div>
          </div>
        </div>
        {/* More influencer cards would follow the same pattern */}
      </div>
    </div>;
};