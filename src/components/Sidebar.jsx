import React, { useState } from 'react';
import { LayoutDashboard, Briefcase, TrendingUp, Zap, User, ChevronLeft, MessageCircle, Star } from 'lucide-react';
import Vector1 from '../assets/Vector1.png';
import Vector2 from '../assets/Vector2.png';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: true },
        { icon: Briefcase, label: 'Portfolio', active: false },
        { icon: TrendingUp, label: 'Pre-Built Algos', active: false },
        { icon: Zap, label: 'My Algos', active: false },
        { icon: User, label: 'My Account', active: false },
    ];

    return (
        <div className={`bg-[#0a0a0a] border-r border-gray-800 flex flex-col transition-all duration-300 overflow-y-auto ${isCollapsed ? 'w-20' : 'w-64'}`}>
            {/* Logo */}
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="text-white font text-xl flex items-center gap-1">
                        Stryke
                        <img src={Vector1} alt="Vector1" />
                    </div>
                </div>
            </div>

            {/* Search */}
            {!isCollapsed && (
                <div className="px-4 py-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
                        />
                        <svg
                            className="absolute right-3 top-2.5 text-gray-500"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Collapse button */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="mx-4 mb-2 flex items-center justify-center w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
                <ChevronLeft size={16} className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
            </button>

            {/* Menu Items */}
            <nav className="flex-1 px-4 py-2">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${item.active
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                            }`}
                    >
                        <item.icon size={20} />
                        {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                    </button>
                ))}
            </nav>

            {/* Contact Us */}
            {!isCollapsed && (
                <div className="p-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-600/50 rounded-xl p-4">
                        <div className="mb-4">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                                <img src={Vector2} alt="Vector2" className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-semibold text-base mb-2">Contact Us</h4>
                            <p className="text-blue-100 text-xs leading-relaxed">
                                A.I Trading Bots Trading Bots Lorem Ipsum
                            </p>
                        </div>
                        <button className="w-full bg-white text-black py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                            Support
                        </button>
                    </div>
                </div>
            )}

            {/* Live Credits */}
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center justify-between bg-gray-900 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        {!isCollapsed && <span className="text-white text-sm font-medium">Live Credits</span>}
                    </div>
                    {!isCollapsed && (
                        <span className="text-white font-bold">2<span className="text-gray-500">/4</span></span>
                    )}
                </div>
            </div>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-semibold">
                        JS
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1">
                            <div className="text-white text-sm font-medium">John Smith</div>
                        </div>
                    )}
                    {!isCollapsed && (
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <circle cx="8" cy="4" r="1.5" />
                                <circle cx="8" cy="8" r="1.5" />
                                <circle cx="8" cy="12" r="1.5" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
