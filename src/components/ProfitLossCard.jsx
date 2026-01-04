import React from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';
import vector3 from '../assets/Vector3.svg';
import vector4 from '../assets/Vector4.svg';
import FrameIcon from '../assets/FrameIcon.png';
import vector5 from '../assets/Vector5.png';
import MomentumSurge1 from '../assets/Momentum Surge1.png';
import MomentumSurge2 from '../assets/Momentum Surge2.png';
import MomentumSurge3 from '../assets/Momentum Surge3.png';
const AlgoRow = ({ name, multiplier, pnl, status, icon }) => {
    return (
        <div className="grid grid-cols-12 items-center py-3 border-b border-gray-800 last:border-b-0 hover:bg-gray-800/50 transition-colors px-2 -mx-2 rounded-lg cursor-pointer o">
            <div className="col-span-4 flex items-center gap-3">
                <img src={icon} alt={name} className="w-8 h-8 rounded-full" />
                <span className="text-white text-sm font-medium truncate hover:underline">{name}</span>
            </div>
            <div className="col-span-2 text-center text-gray-400 text-sm">{multiplier}</div>
            <div className="col-span-3 text-right text-emerald-500 text-sm font-semibold pr-8">{pnl}</div>
            <div className="col-span-3 flex justify-end">
                {status ? (
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors">
                        <img src={vector5} alt="vector5" />
                        {status}
                    </button>
                ) : (
                    <button className="text-blue-400 hover:text-blue-300 text-xs font-medium underline transition-colors">
                        View Details
                    </button>
                )}
            </div>
        </div>
    );
};

const ProfitLossCard = ({ totalPnL = "₹1,50,00.84", transactions = 5, lastUpdated = "25th Oct 2025 | 11:53 PM" }) => {
    const algos = [
        { name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', status: 'Square Off', icon: MomentumSurge1 },
        { name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', status: null, icon: MomentumSurge2 },
        { name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', status: 'Square Off', icon: MomentumSurge3 },
        { name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', status: 'Square Off', icon: MomentumSurge1 },
        { name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', status: 'Square Off', icon: MomentumSurge2 },
        { name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', status: null, icon: MomentumSurge3 },
    ];

    return (
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold">Overall Profit/Loss</h3>
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
                <div className="flex items-center gap-4">
                    <button className="bg-gray-600 hover:bg-white hover:text-black text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                        Live
                        <img src={vector3} alt="" className="w-4 h-4 group-hover:brightness-0" />
                    </button>
                    <button className="bg-gray-600 hover:bg-white hover:text-black text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 group">
                        Virtual
                        <img src={vector4} alt="" className="w-4 h-4 group-hover:brightness-0" />
                    </button>
                    <button className="">
                        <img src={FrameIcon} alt="" className="hover:bg-gray-800" />
                    </button>
                </div>
            </div>

            <div className="flex items-baseline gap-2 mb-1">
                <span className="text-emerald-500 text-3xl font-bold">{totalPnL}</span>
                <span className="text-gray-400 text-sm">in {transactions} transactions</span>
            </div>
            <div className="text-gray-500 text-sm mb-4">Last Updated:
                <span className="text-white">{lastUpdated}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                <div className="bg-[#1a1a1a] rounded-lg px-3 py-2 flex flex-col justify-center">
                    <span className="text-gray-400 text-xs whitespace-nowrap">Booked P&L</span>
                    <span className="text-emerald-500 text-lg font-bold truncate" title="₹1,50,000.84">₹1,50,000.84</span>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg px-3 py-2 flex flex-col justify-center">
                    <span className="text-gray-400 text-xs whitespace-nowrap">Cap. Deployed</span>
                    <span className="text-white text-lg font-bold truncate" title="₹1,50,000.84">₹1,50,000.84</span>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg px-3 py-2 flex flex-col justify-center sm:col-span-2 lg:col-span-1">
                    <span className="text-gray-400 text-xs whitespace-nowrap">Active Algos</span>
                    <span className="text-white text-lg font-bold truncate">4</span>
                </div>
            </div>

            <div className="space-y-0">
                <div className="grid grid-cols-12 py-2 border-b border-gray-800 text-xs font-semibold text-gray-400">
                    <div className="col-span-4 pl-12">Algo Name</div>
                    <div className="col-span-2 text-center">Multiplier</div>
                    <div className="col-span-3 text-center pl-3">P&L</div>
                    {/* <div className="col-span-3 text-center"></div> */}
                </div>
                <div className="max-h-64 overflow-y-auto overflow-x-hidden custom-scrollbar pr-2">
                    {algos.map((algo, index) => (
                        <AlgoRow key={index} {...algo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfitLossCard;
