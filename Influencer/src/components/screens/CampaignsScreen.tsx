import React, { useState } from 'react';
import { CampaignCard } from '../ui/CampaignCard';
import { SearchIcon, FilterIcon } from 'lucide-react';
export function CampaignsScreen() {
  const [activeTab, setActiveTab] = useState('discover');
  const campaigns = [{
    id: 1,
    title: 'Summer Fashion Collection Promo',
    brand: 'StyleHub',
    brandLogo: 'https://logo.clearbit.com/zara.com',
    category: 'Fashion',
    payout: 500,
    deadline: '3 days left',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    title: 'Fitness Supplement Review',
    brand: 'GymLife',
    brandLogo: 'https://logo.clearbit.com/gymshark.com',
    category: 'Fitness',
    payout: 350,
    deadline: '5 days left',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    title: 'New Vegan Restaurant Promotion',
    brand: 'GreenEats',
    brandLogo: 'https://logo.clearbit.com/sweetgreen.com',
    category: 'Food',
    payout: 400,
    deadline: '1 week left',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    title: 'Tech Gadget Unboxing Video',
    brand: 'TechZone',
    brandLogo: 'https://logo.clearbit.com/bestbuy.com',
    category: 'Technology',
    payout: 600,
    deadline: '4 days left',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  return <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Campaigns</h1>
        <button className="p-2 rounded-full bg-gray-100">
          <FilterIcon size={20} />
        </button>
      </div>
      <div className="relative mb-6">
        <SearchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search campaigns..." className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex border-b border-gray-200 mb-6">
        <button className={`pb-2 px-4 text-sm font-medium ${activeTab === 'discover' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('discover')}>
          Discover
        </button>
        <button className={`pb-2 px-4 text-sm font-medium ${activeTab === 'applied' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('applied')}>
          Applied
        </button>
        <button className={`pb-2 px-4 text-sm font-medium ${activeTab === 'active' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('active')}>
          Active
        </button>
        <button className={`pb-2 px-4 text-sm font-medium ${activeTab === 'completed' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('completed')}>
          Completed
        </button>
      </div>
      <div className="space-y-4">
        {campaigns.map(campaign => <CampaignCard key={campaign.id} campaign={campaign} />)}
      </div>
    </div>;
}