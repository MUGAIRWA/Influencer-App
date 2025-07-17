import React from 'react';
export const Submissions = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Applications & Submissions
      </h1>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">
              Applications
            </button>
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">
              Content Submissions
            </button>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Content Submissions
          </h2>
          <div className="space-y-4">
            {/* Submission 1 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-3 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <span className="text-gray-600 text-sm">IN</span>
                  </div>
                  <div>
                    <h3 className="font-medium">@FashionForward</h3>
                    <p className="text-sm text-gray-500">
                      Campaign: Summer Collection
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Approve
                  </button>
                  <button className="px-4 py-2 border border-red-500 text-red-600 rounded-md hover:bg-red-50">
                    Request Changes
                  </button>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Submission Notes:</strong>{' '}
                  Here's my content featuring your summer collection. I've
                  included both photos and a short video. The engagement has
                  been great so far!
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Content 1
                </div>
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Content 2
                </div>
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Content 3
                </div>
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Video
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <h4 className="font-medium text-blue-800 mb-2">
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-blue-600">Likes</p>
                    <p className="font-medium">2,456</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Comments</p>
                    <p className="font-medium">128</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Shares</p>
                    <p className="font-medium">87</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Link Clicks</p>
                    <p className="font-medium">342</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Submission 2 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-3 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <span className="text-gray-600 text-sm">IN</span>
                  </div>
                  <div>
                    <h3 className="font-medium">@TechReviewer</h3>
                    <p className="text-sm text-gray-500">
                      Campaign: New Product Launch
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Approve
                  </button>
                  <button className="px-4 py-2 border border-red-500 text-red-600 rounded-md hover:bg-red-50">
                    Request Changes
                  </button>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Submission Notes:</strong>{' '}
                  I've created a detailed review video of your new product,
                  highlighting all the key features. I've also included some
                  product shots that I think came out really well.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Video
                </div>
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Content 1
                </div>
                <div className="bg-gray-200 h-20 rounded-md flex items-center justify-center text-gray-500">
                  Content 2
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <h4 className="font-medium text-blue-800 mb-2">
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-blue-600">Views</p>
                    <p className="font-medium">5,782</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Comments</p>
                    <p className="font-medium">231</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Shares</p>
                    <p className="font-medium">124</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Link Clicks</p>
                    <p className="font-medium">587</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};