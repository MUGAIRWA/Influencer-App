import React from 'react';
export const Applications = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Applications & Submissions
      </h1>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">
              Applications
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">
              Content Submissions
            </button>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Pending Applications
          </h2>
          <div className="space-y-4">
            {/* Application 1 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-3 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <span className="text-gray-600 text-sm">IN</span>
                  </div>
                  <div>
                    <h3 className="font-medium">@TravelWithSarah</h3>
                    <p className="text-sm text-gray-500">
                      Blogger,{' '}
                      <a href="#" className="text-blue-600">
                        Instagram Profile
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Accept
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                    Reject
                  </button>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <p className="text-gray-700">
                  <strong className="text-gray-900">
                    Application Message:
                  </strong>{' '}
                  Excited to apply for your summer campaign! I've worked with
                  similar brands before and my audience loves travel content. I
                  think I'd be a great fit for promoting your products.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Sample Content
                </div>
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Sample Content
                </div>
              </div>
            </div>
            {/* Application 2 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-3 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <span className="text-gray-600 text-sm">IN</span>
                  </div>
                  <div>
                    <h3 className="font-medium">@FoodieAdventures</h3>
                    <p className="text-sm text-gray-500">
                      Chef,{' '}
                      <a href="#" className="text-blue-600">
                        YouTube Channel
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Accept
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                    Reject
                  </button>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <p className="text-gray-700">
                  <strong className="text-gray-900">
                    Application Message:
                  </strong>{' '}
                  My audience loves discovering new food products and kitchen
                  tools. I'd love to create a recipe video featuring your
                  products and share it with my engaged cooking community.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Sample Content
                </div>
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Sample Content
                </div>
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Sample Content
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};