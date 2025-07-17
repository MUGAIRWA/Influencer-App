import React, { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Flag, Ban, ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal, Eye } from 'lucide-react';
export const InfluencerManagement: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const tabs = [{
    id: 'all',
    label: 'All Influencers'
  }, {
    id: 'pending',
    label: 'Pending Verification'
  }, {
    id: 'approved',
    label: 'Approved'
  }, {
    id: 'rejected',
    label: 'Rejected'
  }, {
    id: 'flagged',
    label: 'Flagged'
  }];
  // Sample data for influencers
  const influencers = [{
    id: 'INF-1001',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    location: 'New York, USA',
    followers: '1.2M',
    category: 'Fashion',
    status: 'approved',
    platforms: ['Instagram', 'TikTok'],
    joinDate: '2023-01-15',
    lastActive: '2023-06-10'
  }, {
    id: 'INF-1002',
    name: 'Alex Rodriguez',
    email: 'alex.r@example.com',
    location: 'Los Angeles, USA',
    followers: '850K',
    category: 'Fitness',
    status: 'approved',
    platforms: ['Instagram', 'YouTube'],
    joinDate: '2023-02-22',
    lastActive: '2023-06-08'
  }, {
    id: 'INF-1003',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    location: 'London, UK',
    followers: '2.5M',
    category: 'Beauty',
    status: 'pending',
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    joinDate: '2023-05-30',
    lastActive: '2023-06-09'
  }, {
    id: 'INF-1004',
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    location: 'Toronto, Canada',
    followers: '500K',
    category: 'Tech',
    status: 'pending',
    platforms: ['YouTube', 'Twitter'],
    joinDate: '2023-05-28',
    lastActive: '2023-06-07'
  }, {
    id: 'INF-1005',
    name: 'Olivia Brown',
    email: 'olivia.b@example.com',
    location: 'Sydney, Australia',
    followers: '1.8M',
    category: 'Travel',
    status: 'flagged',
    platforms: ['Instagram', 'Blog'],
    joinDate: '2022-11-10',
    lastActive: '2023-06-01'
  }, {
    id: 'INF-1006',
    name: 'David Kim',
    email: 'david.k@example.com',
    location: 'Seoul, South Korea',
    followers: '3.2M',
    category: 'Gaming',
    status: 'rejected',
    platforms: ['Twitch', 'YouTube', 'TikTok'],
    joinDate: '2023-04-05',
    lastActive: '2023-05-20'
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
            Approved
          </span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
            Pending
          </span>;
      case 'rejected':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
            Rejected
          </span>;
      case 'flagged':
        return <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
            Flagged
          </span>;
      default:
        return null;
    }
  };
  const filteredInfluencers = selectedTab === 'all' ? influencers : influencers.filter(inf => inf.status === selectedTab);
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Influencer Management
        </h1>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
            <input type="text" placeholder="Search influencers..." className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <Filter size={18} className="mr-2" />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add Influencer
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => <button key={tab.id} onClick={() => setSelectedTab(tab.id)} className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${selectedTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                {tab.label}
              </button>)}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Influencer
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Followers
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platforms
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInfluencers.map(influencer => <tr key={influencer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium">
                          {influencer.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {influencer.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {influencer.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {influencer.location}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {influencer.followers}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {influencer.category}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {influencer.platforms.map(platform => <span key={platform} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded">
                          {platform}
                        </span>)}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {getStatusBadge(influencer.status)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye size={18} />
                      </button>
                      {influencer.status === 'pending' && <>
                          <button className="p-1 text-gray-400 hover:text-green-600">
                            <CheckCircle size={18} />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-600">
                            <XCircle size={18} />
                          </button>
                        </>}
                      <button className="p-1 text-gray-400 hover:text-amber-600">
                        <Flag size={18} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Ban size={18} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-700">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">6</span> of{' '}
            <span className="font-medium">42</span> influencers
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              <ChevronLeft size={16} />
            </button>
            <button className="px-3 py-1 border border-blue-500 rounded-md bg-blue-500 text-white">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              3
            </button>
            <span className="text-gray-500">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              8
            </button>
            <button className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>;
};