import React from 'react';
import { UserIcon, InstagramIcon, YoutubeIcon, MapPinIcon, SettingsIcon, HelpCircleIcon, LogOutIcon } from 'lucide-react';
export function ProfileScreen() {
  return <div className="pb-6">
      <div className="bg-blue-600 pt-10 pb-16 px-4 relative">
        <div className="flex justify-end">
          <button className="p-2 rounded-full bg-blue-500">
            <SettingsIcon size={20} className="text-white" />
          </button>
        </div>
      </div>
      <div className="px-4 -mt-12">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col items-center -mt-12 mb-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-bold mt-2">Emma Johnson</h1>
            <div className="flex items-center text-sm text-gray-600">
              <MapPinIcon size={16} className="mr-1" />
              <span>New York, USA</span>
            </div>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mt-2">
              Verified Influencer
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="text-center text-sm text-gray-600 mb-3">
              Fashion & Lifestyle Content Creator
            </div>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center">
                <InstagramIcon size={16} className="text-pink-600 mr-1" />
                <span className="text-sm font-medium">56.8K</span>
              </div>
              <div className="flex items-center">
                <YoutubeIcon size={16} className="text-red-600 mr-1" />
                <span className="text-sm font-medium">22.3K</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h2 className="font-medium mb-4">Performance Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Campaigns</div>
              <div className="text-xl font-bold">24</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Success Rate</div>
              <div className="text-xl font-bold">98%</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Avg. Rating</div>
              <div className="text-xl font-bold">4.9/5</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Response Time</div>
              <div className="text-xl font-bold">2h</div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <button className="w-full flex items-center p-3 bg-white rounded-lg shadow-sm">
            <HelpCircleIcon size={20} className="text-gray-600 mr-3" />
            <span>Help & Support</span>
          </button>
          <button className="w-full flex items-center p-3 bg-white rounded-lg shadow-sm text-red-600">
            <LogOutIcon size={20} className="mr-3" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>;
}