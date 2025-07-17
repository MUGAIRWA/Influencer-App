import React from 'react';
import { DollarSignIcon, TrendingUpIcon, ArrowRightIcon, CreditCardIcon, CheckIcon, ClockIcon } from 'lucide-react';
export function EarningsScreen() {
  const transactions = [{
    id: 1,
    campaign: 'Summer Fashion Collection',
    amount: 500,
    date: 'Aug 15, 2023',
    status: 'Paid'
  }, {
    id: 2,
    campaign: 'Fitness Supplement Review',
    amount: 350,
    date: 'Aug 10, 2023',
    status: 'Processing'
  }, {
    id: 3,
    campaign: 'Tech Gadget Unboxing',
    amount: 600,
    date: 'Jul 28, 2023',
    status: 'Paid'
  }, {
    id: 4,
    campaign: 'Skincare Routine Video',
    amount: 450,
    date: 'Jul 20, 2023',
    status: 'Paid'
  }];
  return <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Earnings</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-600 mb-1">
            Available Balance
          </h2>
          <div className="text-4xl font-bold mb-2">$2,580.50</div>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium">
            Withdraw Funds
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-1">
            <TrendingUpIcon size={16} className="text-green-500 mr-1" />
            <span className="text-sm text-gray-600">This Month</span>
          </div>
          <div className="text-xl font-bold">$1,350.00</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-1">
            <ClockIcon size={16} className="text-orange-500 mr-1" />
            <span className="text-sm text-gray-600">Pending</span>
          </div>
          <div className="text-xl font-bold">$850.00</div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <h2 className="font-medium mb-4">Payment Methods</h2>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <CreditCardIcon size={20} className="text-blue-600" />
            </div>
            <div>
              <div className="font-medium">PayPal</div>
              <div className="text-xs text-gray-500">emma@example.com</div>
            </div>
          </div>
          <div className="text-blue-600">
            <CheckIcon size={20} />
          </div>
        </div>
        <button className="text-blue-600 text-sm flex items-center">
          <span>Add payment method</span>
          <ArrowRightIcon size={16} className="ml-1" />
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Transaction History</h2>
          <button className="text-blue-600 text-sm">View all</button>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {transactions.map((transaction, index) => <div key={transaction.id} className={`p-4 flex justify-between items-center ${index < transactions.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <div>
                <div className="font-medium">{transaction.campaign}</div>
                <div className="text-xs text-gray-500">{transaction.date}</div>
              </div>
              <div className="flex items-center">
                <div className={`text-sm font-medium mr-2 ${transaction.status === 'Paid' ? 'text-green-600' : 'text-orange-500'}`}>
                  ${transaction.amount}
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${transaction.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                  {transaction.status}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}