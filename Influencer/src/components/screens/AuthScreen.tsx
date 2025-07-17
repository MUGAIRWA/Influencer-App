import React, { useState } from 'react';
import { AtSignIcon, LockIcon, UserIcon } from 'lucide-react';
export function AuthScreen({
  onAuth
}) {
  const [isLogin, setIsLogin] = useState(true);
  return <div className="min-h-screen bg-white p-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-2">
          {isLogin ? 'Welcome back' : 'Join as an Influencer'}
        </h1>
        <p className="text-gray-600">
          {isLogin ? 'Log in to access your campaigns and earnings' : 'Create an account to start earning with your influence'}
        </p>
      </div>
      <form className="space-y-4" onSubmit={e => {
      e.preventDefault();
      onAuth();
    }}>
        {!isLogin && <div className="relative">
            <UserIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Full Name" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>}
        <div className="relative">
          <AtSignIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input type="email" placeholder="Email Address" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="relative">
          <LockIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input type="password" placeholder="Password" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {isLogin && <div className="text-right">
            <a href="#" className="text-sm text-blue-600">
              Forgot password?
            </a>
          </div>}
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
          {isLogin ? 'Log In' : 'Create Account'}
        </button>
        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-3 text-gray-500 text-sm">
            or continue with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg">
            <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg">
            <img src="https://cdn.cdnlogo.com/logos/i/92/instagram.svg" alt="Instagram" className="w-5 h-5 mr-2" />
            Instagram
          </button>
        </div>
        <div className="text-center mt-6">
          <button type="button" className="text-blue-600" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
          </button>
        </div>
      </form>
    </div>;
}