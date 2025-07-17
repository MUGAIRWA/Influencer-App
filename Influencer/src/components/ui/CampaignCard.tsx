import React from 'react';
import { ClockIcon, DollarSignIcon, CheckIcon } from 'lucide-react';
export function CampaignCard({
  campaign
}) {
  return <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4 shadow-sm">
      <div className="relative">
        <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover" />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
          {campaign.category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img src={campaign.brandLogo} alt={campaign.brand} className="w-6 h-6 rounded-full mr-2" />
          <span className="text-sm text-gray-600">{campaign.brand}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{campaign.title}</h3>
        <div className="flex justify-between text-sm mb-3">
          <div className="flex items-center text-green-600">
            <DollarSignIcon size={16} className="mr-1" />
            <span>${campaign.payout}</span>
          </div>
          <div className="flex items-center text-orange-500">
            <ClockIcon size={16} className="mr-1" />
            <span>{campaign.deadline}</span>
          </div>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium">
          Apply Now
        </button>
      </div>
    </div>;
}