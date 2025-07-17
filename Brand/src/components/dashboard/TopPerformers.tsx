import React from 'react';
import { TrendingUpIcon, StarIcon, ExternalLinkIcon, ChevronRightIcon } from 'lucide-react';
export const TopPerformers = () => {
  return <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium text-gray-800">
          Top Performing Influencers
        </h3>
        <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-100">
          <div className="flex items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="Influencer 1" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
              <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
                <StarIcon size={10} className="text-white" />
              </div>
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <h4 className="font-medium">Sarah Johnson</h4>
                <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Instagram
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500">Followers: 245K</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">Engagement: 5.8%</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end mb-1">
              <TrendingUpIcon size={14} className="text-green-500 mr-1" />
              <span className="font-medium text-green-600">ROI: 150%</span>
            </div>
            <button className="text-blue-600 text-sm hover:underline flex items-center">
              View Profile
              <ExternalLinkIcon size={12} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-100 transition-colors">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="Influencer 2" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
            <div className="ml-4">
              <div className="flex items-center">
                <h4 className="font-medium">Michael Chen</h4>
                <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                  YouTube
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500">Subscribers: 1.2M</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">Avg Views: 350K</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end mb-1">
              <TrendingUpIcon size={14} className="text-green-500 mr-1" />
              <span className="font-medium text-green-600">ROI: 120%</span>
            </div>
            <button className="text-blue-600 text-sm hover:underline flex items-center">
              View Profile
              <ExternalLinkIcon size={12} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-100 transition-colors">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="Influencer 3" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
            <div className="ml-4">
              <div className="flex items-center">
                <h4 className="font-medium">Alicia Rodriguez</h4>
                <span className="ml-2 text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
                  TikTok
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500">Followers: 780K</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">Avg Likes: 85K</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end mb-1">
              <TrendingUpIcon size={14} className="text-green-500 mr-1" />
              <span className="font-medium text-green-600">ROI: 110%</span>
            </div>
            <button className="text-blue-600 text-sm hover:underline flex items-center">
              View Profile
              <ExternalLinkIcon size={12} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center">
            See All Top Performers
            <ChevronRightIcon size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>;
};