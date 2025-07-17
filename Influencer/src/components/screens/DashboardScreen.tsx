import React from 'react';
import { StatCard } from '../ui/StatCard';
import { CampaignCard } from '../ui/CampaignCard';
import { DollarSignIcon, TrendingUpIcon, CheckCircleIcon, BellIcon } from 'lucide-react';
export function DashboardScreen() {
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
  }];
  return <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Emma!</h1>
          <p className="text-gray-600">Your dashboard is looking good today</p>
        </div>
        <div className="relative">
          <BellIcon size={24} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>
      </div>
      <div className="bg-blue-600 text-white p-4 rounded-lg mb-6">
        <div className="text-sm mb-1">Total Earnings</div>
        <div className="text-3xl font-bold mb-1">$2,580.50</div>
        <div className="text-xs opacity-80">+12% from last month</div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard icon={CheckCircleIcon} title="Active Campaigns" value="4" color="bg-green-500" />
        <StatCard icon={TrendingUpIcon} title="Engagement Rate" value="4.8%" trend={2.1} color="bg-purple-500" />
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Active Campaigns</h2>
          <a href="#" className="text-blue-600 text-sm">
            View all
          </a>
        </div>
        {campaigns.map(campaign => <CampaignCard key={campaign.id} campaign={campaign} />)}
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recommended for You</h2>
          <a href="#" className="text-blue-600 text-sm">
            View all
          </a>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <TrendingUpIcon size={24} className="text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium">AI-Matched Campaigns</h3>
            <p className="text-sm text-gray-600">
              We found 6 new campaigns matching your profile
            </p>
          </div>
        </div>
      </div>
    </div>;
}