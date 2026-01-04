import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const AlgoCard = ({ title, provider, metric, metricValue, badge, gradientFrom, gradientTo, buttonText, buttonColor }) => {
    return (
        <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} border border-gray-700/50 rounded-xl p-5 relative overflow-hidden`}>
            {/* Badge */}
            <div className="absolute top-4 right-4">
                <div className={`${badge.bg} ${badge.text} px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5`}>
                    {badge.icon}
                    <span>{badge.label}</span>
                </div>
            </div>

            {/* Icon */}
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded"></div>
            </div>

            {/* Title */}
            <h4 className="text-white text-lg font-bold mb-2">{title}</h4>

            {/* Provider */}
            <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 text-sm">By {provider}</span>
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                        <path d="M3.5 5L4.5 6L6.5 4M9 5C9 7.2 7.2 9 5 9C2.8 9 1 7.2 1 5C1 2.8 2.8 1 5 1C7.2 1 9 2.8 9 5Z" stroke="white" strokeWidth="1" fill="none" />
                    </svg>
                </div>
            </div>

            {/* Metric */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm font-medium">{metric}:</span>
                    <span className={`text-2xl font-bold ${metricValue.startsWith('+') ? 'text-emerald-400' : metricValue.includes('Users') ? 'text-purple-400' : 'text-white'}`}>
                        {metricValue}
                    </span>
                </div>
            </div>

            {/* Action Button */}
            <button className={`w-full ${buttonColor} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                {buttonText}
            </button>
        </div>
    );
};

const FeaturedAlgos = () => {
    const algos = [
        {
            title: 'Midcap Nifty Option Scalper CE',
            provider: 'Stockwiz Tech. LLP',
            metric: 'Win Rate',
            metricValue: '+80.89%',
            badge: {
                label: 'Highest Win Rate',
                bg: 'bg-blue-600',
                text: 'text-white',
                icon: <TrendingUp size={12} />
            },
            gradientFrom: 'from-blue-950/50',
            gradientTo: 'to-blue-900/20',
            buttonText: 'View Details',
            buttonColor: 'bg-blue-600'
        },
        {
            title: 'Midcap Nifty Option Scalper CE',
            provider: 'Stockwiz Tech. LLP',
            metric: 'Most Deployed',
            metricValue: '2,480 Users',
            badge: {
                label: 'Most Deployed',
                bg: 'bg-purple-600',
                text: 'text-white',
                icon: <Users size={12} />
            },
            gradientFrom: 'from-purple-950/50',
            gradientTo: 'to-purple-900/20',
            buttonText: 'Deploy Now',
            buttonColor: 'bg-gradient-to-r from-purple-600 to-purple-500'
        },
        {
            title: 'Midcap Nifty Option Scalper CE',
            provider: 'Stockwiz Tech. LLP',
            metric: 'Most Profitable',
            metricValue: '+₹2,480',
            badge: {
                label: 'Most Profitable',
                bg: 'bg-emerald-600',
                text: 'text-white',
                icon: <DollarSign size={12} />
            },
            gradientFrom: 'from-emerald-950/50',
            gradientTo: 'to-emerald-900/20',
            buttonText: 'Deploy Now',
            buttonColor: 'bg-gradient-to-r from-yellow-600 to-yellow-500'
        },
    ];

    return (
        <div className="px-6 mt-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                    <span className="text-sm">🔥</span>
                </div>
                <h3 className="text-white font-semibold text-lg">Featured Algos</h3>
                <button className="text-gray-400 hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 5V9M8 11V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {algos.map((algo, index) => (
                    <AlgoCard key={index} {...algo} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedAlgos;
