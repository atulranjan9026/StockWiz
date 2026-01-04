import React from 'react';
import { Bell, Settings } from 'lucide-react';
import dhan from '../assets/dhanLogo.png';

const TopNavBar = ({ userName = "John Smith", userEmail = "smith@mail.in", balance = "₹20,00,764.84", equity = "Margin Available" }) => {
  return (
    <div className="bg-[#0a0a0a] border-b border-gray-800 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Menu icon */}
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z" fill="currentColor" />
            </svg>
          </button>
          <span className="text-white font-medium">Dashboard</span>
        </div>

        {/* Right side - User info and actions */}
        <div className="flex items-center gap-4">
          {/* Broker/Balance info */}
          <div className="flex items-center gap-3 bg-emerald-900/30 border border-emerald-700/50 rounded-lg px-4 py-2">
            <img src={dhan} alt="Broker Logo" className="w-8 h-8 rounded-full object-contain" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">{equity}</span>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs">Token Expiry: 30th Dec 25 | 12:22 AM</span>
            </div>
            <span className="text-white font-semibold text-base">{balance}</span>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Settings icon */}
          <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <Settings size={18} />
          </button>

          {/* Notifications */}
          <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors relative">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-white text-[10px] font-semibold flex items-center justify-center">
              3
            </span>
          </button>

          {/* User profile */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">{userName}</span>
              <span className="text-gray-400 text-xs">{userEmail}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
