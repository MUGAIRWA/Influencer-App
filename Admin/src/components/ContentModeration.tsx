import React from 'react';
import { Search, Filter } from 'lucide-react';
export const ContentModeration: React.FC = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Content Moderation</h1>
      <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
        <p className="text-gray-500">
          Content Moderation content will be displayed here
        </p>
      </div>
    </div>;
};