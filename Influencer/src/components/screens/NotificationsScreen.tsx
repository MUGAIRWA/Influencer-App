import React from 'react';
import { CheckCircleIcon, AlertCircleIcon, BellIcon, DollarSignIcon } from 'lucide-react';
export function NotificationsScreen() {
  const notifications = [{
    id: 1,
    type: 'campaign_invite',
    title: 'New Campaign Invitation',
    message: 'You have been invited to promote "Summer Collection" by StyleHub',
    time: '10 minutes ago',
    icon: BellIcon,
    color: 'bg-blue-100 text-blue-600'
  }, {
    id: 2,
    type: 'payment',
    title: 'Payment Received',
    message: 'You received $500 for "Tech Gadget Review" campaign',
    time: '2 hours ago',
    icon: DollarSignIcon,
    color: 'bg-green-100 text-green-600'
  }, {
    id: 3,
    type: 'approval',
    title: 'Campaign Approved',
    message: 'Your submission for "Fitness Supplement" campaign was approved',
    time: '1 day ago',
    icon: CheckCircleIcon,
    color: 'bg-green-100 text-green-600'
  }, {
    id: 4,
    type: 'reminder',
    title: 'Submission Deadline',
    message: 'The "Vegan Restaurant" campaign is due in 24 hours',
    time: '1 day ago',
    icon: AlertCircleIcon,
    color: 'bg-orange-100 text-orange-600'
  }];
  return <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <button className="text-sm text-blue-600">Mark all as read</button>
      </div>
      <div className="space-y-4">
        {notifications.map(notification => <div key={notification.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex">
              <div className={`p-2 rounded-lg mr-3 ${notification.color}`}>
                <notification.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{notification.title}</h3>
                  <span className="text-xs text-gray-500">
                    {notification.time}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  {notification.message}
                </p>
                {notification.type === 'campaign_invite' && <div className="flex mt-3">
                    <button className="bg-blue-600 text-white py-1 px-4 rounded text-sm mr-2">
                      View Details
                    </button>
                    <button className="border border-gray-300 py-1 px-4 rounded text-sm">
                      Decline
                    </button>
                  </div>}
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}