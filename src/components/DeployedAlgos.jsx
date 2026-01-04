import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import MomentumSurge1 from '../assets/Momentum Surge1.png';
import MomentumSurge2 from '../assets/Momentum Surge2.png';
import MomentumSurge11 from '../assets/Momentum Surge11.png';
import Live from '../assets/Vector3.svg';
import Virtual from '../assets/Vector4.svg';
import FrameIcon from '../assets/FrameIcon.png';

const StatusBadge = ({ status }) => {
    const styles = {
        'Live': 'bg-red-600 text-white',
        'Waiting for next Signal': 'bg-yellow-600 text-white',
        'Stopped': 'bg-gray-600 text-white',
    };

    return (
        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold flex items-center gap-1.5 ${styles[status] || 'bg-gray-600 text-white'}`}>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            {status}
        </span>
    );
};

const DeploymentTypeBadge = ({ type }) => {
    const styles = {
        'Live': 'bg-blue-600/20 text-white border-blue-600/50',
        'Virtual': 'bg-red-600/20 text-white border-red-600/50',
    };

    return (
        <span className={`px-2 py-0.5 rounded-xl text-xs font-medium border flex items-center gap-2 ${styles[type] || 'bg-gray-600/20 text-gray-400 border-gray-600/50'}`}>

            <img src={type === 'Live' ? Live : Virtual} alt={type} className="w-4 h-4 brightness-0 invert" />
            {type}
        </span>
    );
};

const AlgoItem = ({ name, status, deployedTime, deploymentType, totalPnL, icon }) => {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0 hover:bg-gray-900/30 transition-colors">
            <div className="flex items-center gap-3 flex-1">
                <img src={icon} alt={name} className="w-8 h-8" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-medium">{name}</span>
                        <StatusBadge status={status} />
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
                        {/* <Zap size={15} className='text-white' /> */}
                        <img src={FrameIcon} alt="FrameIcon" className="w-4 h-4 bg-black" />
                        <span>Deployed on
                            <span className="text-white ml-1">{deployedTime}</span></span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex flex-col items-start">
                    <span className="text-gray-400 text-xs">Deployment Type</span>
                    <DeploymentTypeBadge type={deploymentType} />
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-gray-400 text-xs">Total P&L</span>
                    <span className="text-emerald-500 text-sm font-bold">{totalPnL}</span>
                </div>
            </div>
        </div>
    );
};

const DeployedAlgos = () => {
    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Active', 'Paused', 'Stopped'];

    const algos = [
        {
            name: 'Momentum AlgoFolio',
            status: 'Live',
            deployedTime: '20th Nov 25 | 12:00 PM',
            deploymentType: 'Live',
            totalPnL: '+₹1,50,000',
            icon: MomentumSurge11
        },
        {
            name: 'Bank Nifty Monthly Straddle 2.0',
            status: 'Waiting for next Signal',
            deployedTime: '20th Nov 25 | 12:00 PM',
            deploymentType: 'Virtual',
            totalPnL: '+₹1,50,000',
            icon: MomentumSurge2
        },
        {
            name: 'Trend Individual Algo',
            status: 'Live',
            deployedTime: '20th Nov 25 | 12:00 PM',
            deploymentType: 'Live',
            totalPnL: '+₹1,50,000',
            icon: MomentumSurge1
        },
        {
            name: 'SMC AlgoFolio',
            status: 'Waiting for next Signal',
            deployedTime: '20th Nov 25 | 12:00 PM',
            deploymentType: 'Virtual',
            totalPnL: '+₹1,50,000',
            icon: MomentumSurge11
        },
        {
            name: 'Trend Individual Algo',
            status: 'Live',
            deployedTime: '20th Nov 25 | 12:00 PM',
            deploymentType: 'Live',
            totalPnL: '+₹1,50,000',
            icon: MomentumSurge1
        },
        {
            name: 'Trend Individual Algo',
            status: 'Live',
            deployedTime: '20th Nov 25 | 12:00 PM',
            deploymentType: 'Live',
            totalPnL: '+₹1,50,000',
            icon: MomentumSurge1
        },
        {
            name: 'Trend Individual Algo',
            status: 'Stopped',
            deployedTime: '20th Nov 25 | 12:00 PM',
            deploymentType: 'Live',
            totalPnL: '+₹1,50,000',
            icon: MomentumSurge1
        },
    ];

    return (
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Zap size={20} className="text-white" />
                    <h3 className="text-white font-semibold">Deployed Algos</h3>
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M8 5V9M8 11V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium ml-2 transition-colors">
                        View More
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === tab
                                ? 'bg-gray-700 text-white'
                                : 'bg-transparent text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-0">
                {algos.map((algo, index) => (
                    <AlgoItem key={index} {...algo} />
                ))}
            </div>
        </div>
    );
};

export default DeployedAlgos;
