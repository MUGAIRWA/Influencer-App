import React from 'react';
export const Settings = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">
              Account
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">
              Brand Profile
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">
              Team Members
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">
              Billing
            </button>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Account Settings
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="Doe" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="john.doe@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Change Password
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input type="password" id="currentPassword" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input type="password" id="newPassword" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input type="password" id="confirmPassword" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Notification Preferences
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">
                      Email Notifications
                    </p>
                    <p className="text-sm text-gray-500">
                      Receive email notifications for important updates
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">
                      SMS Notifications
                    </p>
                    <p className="text-sm text-gray-500">
                      Receive text message alerts
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">
                      Marketing Communications
                    </p>
                    <p className="text-sm text-gray-500">
                      Receive updates about new features and promotions
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};