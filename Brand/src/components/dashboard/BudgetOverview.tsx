import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
export const BudgetOverview = () => {
  // Sample data for the charts
  const monthlySpendData = [{
    name: 'Jan',
    spent: 2500,
    budget: 4000
  }, {
    name: 'Feb',
    spent: 3200,
    budget: 4000
  }, {
    name: 'Mar',
    spent: 3800,
    budget: 4000
  }, {
    name: 'Apr',
    spent: 2800,
    budget: 4000
  }, {
    name: 'May',
    spent: 3900,
    budget: 4000
  }, {
    name: 'Jun',
    spent: 3500,
    budget: 4000
  }];
  const budgetAllocationData = [{
    name: 'Instagram',
    value: 8500
  }, {
    name: 'TikTok',
    value: 5000
  }, {
    name: 'YouTube',
    value: 3500
  }, {
    name: 'Twitter',
    value: 2000
  }, {
    name: 'Other',
    value: 1000
  }];
  const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-800">
            Monthly Spend vs. Budget
          </h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-500">Spent</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
              <span className="text-xs text-gray-500">Budget</span>
            </div>
          </div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlySpendData} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="name" tick={{
              fontSize: 12
            }} />
              <YAxis tick={{
              fontSize: 12
            }} />
              <Tooltip contentStyle={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }} formatter={value => [`$${value}`, 'Amount']} />
              <Bar dataKey="spent" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="budget" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Budget Allocation
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={budgetAllocationData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={2} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                {budgetAllocationData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Legend />
              <Tooltip formatter={value => [`$${value}`, 'Budget']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 border-t pt-4 border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Budget</p>
              <p className="text-xl font-bold text-gray-800">$20,000</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Remaining</p>
              <p className="text-xl font-bold text-green-600">$4,500</p>
            </div>
          </div>
          <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full rounded-full" style={{
            width: '77.5%'
          }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">77.5% spent</p>
        </div>
      </div>
    </div>;
};