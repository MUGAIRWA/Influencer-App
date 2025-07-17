import React from 'react';
import { UserIcon, FileTextIcon, CalendarIcon, BellIcon, CheckIcon, ClockIcon, MoreHorizontalIcon } from 'lucide-react';
export const Notifications = () => {
  return <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <BellIcon size={18} className="text-blue-600 mr-2" />
          <h3 className="font-medium text-gray-800">Notifications</h3>
        </div>
        <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
          Mark all as read
        </button>
      </div>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 relative">
          <div className="absolute top-4 right-4">
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontalIcon size={16} />
            </button>
          </div>
          <div className="flex">
            <div className="mr-3 mt-1">
              <div className="bg-blue-100 p-2 rounded-full">
                <UserIcon size={16} className="text-blue-600" />
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-medium">New Application</p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">@InfluencerX</span> applied for
                Campaign Y
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-xs text-gray-500">30 minutes ago</span>
                <div className="flex space-x-1">
                  <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded hover:bg-blue-700">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-100 transition-colors relative">
          <div className="absolute top-4 right-4">
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontalIcon size={16} />
            </button>
          </div>
          <div className="flex">
            <div className="mr-3 mt-1">
              <div className="bg-purple-100 p-2 rounded-full">
                <FileTextIcon size={16} className="text-purple-600" />
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Content Submission</p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">@InfluencerZ</span> submitted
                content for Campaign W
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-xs text-gray-500">2 hours ago</span>
                <div className="flex space-x-1">
                  <button className="bg-purple-600 text-white text-xs px-2 py-1 rounded hover:bg-purple-700">
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-100 transition-colors relative">
          <div className="absolute top-4 right-4">
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontalIcon size={16} />
            </button>
          </div>
          <div className="flex">
            <div className="mr-3 mt-1">
              <div className="bg-green-100 p-2 rounded-full">
                <CalendarIcon size={16} className="text-green-600" />
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-medium">
                Campaign Going Live Soon
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Campaign "Summer Sale"</span> goes
                live in 2 days
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-xs text-gray-500">5 hours ago</span>
                <div className="flex space-x-1">
                  <button className="bg-green-600 text-white text-xs px-2 py-1 rounded hover:bg-green-700">
                    Prepare
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-yellow-100 transition-colors relative">
          <div className="absolute top-4 right-4">
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontalIcon size={16} />
            </button>
          </div>
          <div className="flex">
            <div className="mr-3 mt-1">
              <div className="bg-yellow-100 p-2 rounded-full">
                <ClockIcon size={16} className="text-yellow-600" />
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Budget Update</p>
              <p className="text-sm text-gray-600 mt-1">
                Campaign "New Product Launch" has used 75% of its budget
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-xs text-gray-500">1 day ago</span>
                <div className="flex space-x-1">
                  <button className="bg-yellow-600 text-white text-xs px-2 py-1 rounded hover:bg-yellow-700">
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
          View All Notifications
        </button>
      </div>
    </div>;
};