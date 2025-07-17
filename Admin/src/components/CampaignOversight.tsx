import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronLeft, ChevronRight, CheckCircle, XCircle, Eye, Flag, MoreHorizontal, Calendar, Users, DollarSign } from 'lucide-react';
export const CampaignOversight: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const tabs = [{
    id: 'all',
    label: 'All Campaigns'
  }, {
    id: 'active',
    label: 'Active'
  }, {
    id: 'pending',
    label: 'Pending'
  }, {
    id: 'completed',
    label: 'Completed'
  }, {
    id: 'flagged',
    label: 'Flagged'
  }];
  // Sample data for campaigns
  const campaigns = [{
    id: 'CAMP-1001',
    title: 'Summer Collection Launch',
    brand: 'Fashion Forward',
    brandLogo: 'https://via.placeholder.com/40',
    budget: '$15,000',
    influencers: 12,
    startDate: '2023-06-15',
    endDate: '2023-07-15',
    status: 'active',
    categories: ['Fashion', 'Summer']
  }, {
    id: 'CAMP-1002',
    title: 'Fitness App Promotion',
    brand: 'FitLife',
    brandLogo: 'https://via.placeholder.com/40',
    budget: '$8,500',
    influencers: 8,
    startDate: '2023-06-20',
    endDate: '2023-07-10',
    status: 'pending',
    categories: ['Fitness', 'Technology']
  }, {
    id: 'CAMP-1003',
    title: 'Organic Skincare Line',
    brand: 'Pure Beauty',
    brandLogo: 'https://via.placeholder.com/40',
    budget: '$12,000',
    influencers: 15,
    startDate: '2023-05-10',
    endDate: '2023-06-10',
    status: 'completed',
    categories: ['Beauty', 'Organic']
  }, {
    id: 'CAMP-1004',
    title: 'Travel Vlog Series',
    brand: 'Wanderlust Adventures',
    brandLogo: 'https://via.placeholder.com/40',
    budget: '$20,000',
    influencers: 5,
    startDate: '2023-07-01',
    endDate: '2023-08-15',
    status: 'pending',
    categories: ['Travel', 'Lifestyle']
  }, {
    id: 'CAMP-1005',
    title: 'Gaming Hardware Review',
    brand: 'GameTech',
    brandLogo: 'https://via.placeholder.com/40',
    budget: '$18,000',
    influencers: 10,
    startDate: '2023-06-05',
    endDate: '2023-06-25',
    status: 'active',
    categories: ['Gaming', 'Technology']
  }, {
    id: 'CAMP-1006',
    title: 'Food Delivery Service',
    brand: 'QuickBite',
    brandLogo: 'https://via.placeholder.com/40',
    budget: '$7,500',
    influencers: 20,
    startDate: '2023-05-20',
    endDate: '2023-06-05',
    status: 'flagged',
    categories: ['Food', 'Service']
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
            Active
          </span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
            Pending
          </span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
            Completed
          </span>;
      case 'flagged':
        return <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
            Flagged
          </span>;
      default:
        return null;
    }
  };
  const filteredCampaigns = selectedTab === 'all' ? campaigns : campaigns.filter(camp => camp.status === selectedTab);
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Campaign Oversight</h1>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
            <input type="text" placeholder="Search campaigns..." className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <Filter size={18} className="mr-2" />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Campaigns</p>
              <h3 className="text-2xl font-bold mt-1">24</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Calendar size={24} className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Engaged Influencers</p>
              <h3 className="text-2xl font-bold mt-1">142</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Campaign Budget</p>
              <h3 className="text-2xl font-bold mt-1">$243,500</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <DollarSign size={24} className="text-purple-600" />
            </div>
          </div>
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
                  Campaign
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Influencers
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeline
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
              {filteredCampaigns.map(campaign => <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <p className="text-sm font-medium text-gray-900">
                          {campaign.title}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {campaign.categories.map(category => <span key={category} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded">
                              {category}
                            </span>)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img src={campaign.brandLogo} alt={campaign.brand} className="w-8 h-8 rounded-full" />
                      <span className="ml-2 text-sm text-gray-900">
                        {campaign.brand}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {campaign.budget}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.influencers} influencers
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.startDate} to {campaign.endDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {getStatusBadge(campaign.status)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye size={18} />
                      </button>
                      {campaign.status === 'pending' && <>
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
            <span className="font-medium">24</span> campaigns
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
            <button className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>;
};