import React from 'react';
import { Users, Briefcase, Clock, Calendar, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
export const Dashboard: React.FC = () => {
  // Sample data for charts
  const activityData = [{
    name: 'Mon',
    signups: 5,
    campaigns: 3,
    posts: 12
  }, {
    name: 'Tue',
    signups: 8,
    campaigns: 5,
    posts: 18
  }, {
    name: 'Wed',
    signups: 12,
    campaigns: 4,
    posts: 22
  }, {
    name: 'Thu',
    signups: 7,
    campaigns: 6,
    posts: 15
  }, {
    name: 'Fri',
    signups: 10,
    campaigns: 8,
    posts: 25
  }, {
    name: 'Sat',
    signups: 4,
    campaigns: 2,
    posts: 10
  }, {
    name: 'Sun',
    signups: 3,
    campaigns: 1,
    posts: 8
  }];
  const influencerCategoryData = [{
    name: 'Fashion',
    value: 35
  }, {
    name: 'Beauty',
    value: 25
  }, {
    name: 'Fitness',
    value: 20
  }, {
    name: 'Travel',
    value: 15
  }, {
    name: 'Food',
    value: 5
  }];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  const statCards = [{
    title: 'Total Influencers',
    value: '1,234',
    change: '+12%',
    icon: <Users size={24} className="text-blue-500" />
  }, {
    title: 'Total Brands',
    value: '567',
    change: '+8%',
    icon: <Briefcase size={24} className="text-purple-500" />
  }, {
    title: 'Pending Vetting',
    value: '45',
    change: '-5%',
    icon: <Clock size={24} className="text-amber-500" />
  }, {
    title: 'Active Campaigns',
    value: '78',
    change: '+15%',
    icon: <Calendar size={24} className="text-green-500" />
  }, {
    title: 'Total Payouts',
    value: '$125,750',
    change: '+22%',
    icon: <DollarSign size={24} className="text-emerald-500" />
  }, {
    title: 'Weekly Growth',
    value: '8.2%',
    change: '+1.5%',
    icon: <TrendingUp size={24} className="text-indigo-500" />
  }];
  const alerts = [{
    id: 1,
    message: '5 new influencers awaiting verification',
    type: 'info'
  }, {
    id: 2,
    message: 'Suspicious activity detected on user ID #8842',
    type: 'warning'
  }, {
    id: 3,
    message: 'Payment processing failed for 3 influencers',
    type: 'error'
  }, {
    id: 4,
    message: "New brand 'FashionCo' registered and awaiting approval",
    type: 'info'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex items-center space-x-3">
          <select className="border border-gray-300 rounded-md px-3 py-1.5 bg-white text-sm">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {statCards.map((card, index) => <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                <span className={`text-xs font-medium ${card.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {card.change} from last period
                </span>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">{card.icon}</div>
            </div>
          </div>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Weekly Activity</h3>
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <span>Signups</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                <span>Campaigns</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                <span>Posts</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="signups" fill="#3b82f6" />
                <Bar dataKey="campaigns" fill="#22c55e" />
                <Bar dataKey="posts" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">
              Influencer Categories
            </h3>
          </div>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={influencerCategoryData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {influencerCategoryData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Recent Activity</h3>
            <button className="text-sm text-blue-600 hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Campaign
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Nike Sports</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    Created new campaign "Summer Collection"
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    5 min ago
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      Influencer
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Sarah Johnson</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    Submitted verification documents
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    25 min ago
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                      Payment
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Alex Turner</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    Requested payout of $1,250
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    1 hour ago
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
                      Brand
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">FashionCo</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    Registered new account
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    2 hours ago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">System Alerts</h3>
            <button className="text-sm text-blue-600 hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {alerts.map(alert => <div key={alert.id} className={`p-3 rounded-md flex items-start ${alert.type === 'info' ? 'bg-blue-50 border border-blue-200' : alert.type === 'warning' ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
                <AlertTriangle size={18} className={`mr-2 flex-shrink-0 ${alert.type === 'info' ? 'text-blue-500' : alert.type === 'warning' ? 'text-amber-500' : 'text-red-500'}`} />
                <span className="text-sm">{alert.message}</span>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};