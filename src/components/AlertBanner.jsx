import React from 'react';
import { AlertCircle } from 'lucide-react';

const AlertBanner = ({ message = "Order failed in 3 strategies have failed orders", onViewAll }) => {
    return (
        <div className="bg-gradient-to-r from-red-900/40 to-red-800/20 border-l-4 border-red-600 px-6 py-3 mx-6 mt-4 rounded-r-lg">
            <div className="flex items-center">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <AlertCircle size={16} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-white font-semibold">Order failed</span>
                        <span className="text-red-200">{message}</span>
                    </div>
                </div>
                <button
                    onClick={onViewAll}
                    className="bg-red-700 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors ml-5"
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default AlertBanner;
