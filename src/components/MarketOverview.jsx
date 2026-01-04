import React from 'react';
import BullIcon from '../assets/Bull.png';
import Pattern from '../assets/Pattern.png';

const MarketCard = ({ title, value, change, changePercent, isPositive }) => {
    return (
        <div className="bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 hover:border-gray-700 transition-colors">
            <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-xs font-medium">{title}</span>
                <div className="flex items-baseline gap-2">
                    <span className="text-white text-xl font-bold">{value}</span>
                    <span className={`text-sm font-medium ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                        {isPositive ? '+' : ''}{change} ({changePercent})
                    </span>
                </div>
            </div>
        </div>
    );
};

const MarketOverview = ({ markets }) => {
    const defaultMarkets = [
        { title: 'Nifty', value: '23,508.40', change: '+258.90', changePercent: '+1.11%', isPositive: true },
        { title: 'Bank Nifty', value: '23,508.40', change: '+258.90', changePercent: '+1.11%', isPositive: true },
        { title: 'Midcap Nifty', value: '23,508.40', change: '-98.80', changePercent: '-1.11%', isPositive: false },
        { title: 'Nifty500', value: '23,508.40', change: '+258.90', changePercent: '+1.11%', isPositive: true },
        { title: 'INDIA VIX', value: '13.78', change: '+258.90', changePercent: '+1.11%', isPositive: true },
    ];

    const marketData = markets || defaultMarkets;

    return (
        <div className="px-6 mt-6">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👋</span>
                <h1 className="text-white text-2xl font-semibold">
                    Good Morning, <span className="font-bold">Sambhav Singhvi</span>
                </h1>
            </div>

            <div className="flex gap-4 ">
                {/* Market Indices Strip */}
                <div className="flex-1 bg-[#0f0f0f] border border-gray-800 rounded-xl flex items-center divide-x divide-gray-800">
                    {marketData.map((market, index) => (
                        <div key={index} className="px-6 min-w-[200px] flex flex-col gap-1 first:pl-4">
                            <span className="text-gray-400 text-xs font-medium">{market.title}</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-white text-lg font-bold">{market.value}</span>
                                <span className={`text-xs font-medium ${market.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {market.change} ({market.changePercent})
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Market Sentiment Card */}
                <div className="flex-shrink-0 w-full xl:w-[240px] bg-gradient-to-br from-emerald-900/40 to-black border border-emerald-800/50 rounded-xl px-5 py-3 relative overflow-hidden flex flex-col justify-center min-h-[80px]">
                    <div className="flex flex-col gap-1 relative z-10">
                        <span className="text-gray-400 text-xs font-medium">Market Sentiment</span>
                        <span className="text-white text-xl font-bold">Bullish</span>
                    </div>
                    {/* Bull icon background */}
                    <div className="absolute right-[-1px] bottom-[4px]  transform">
                        <img src={Pattern} alt="" />
                    </div>
                    <div className="absolute right-[-1px] bottom-[0px]  transform rotate-[-6`deg]">
                        <img src={BullIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketOverview;
