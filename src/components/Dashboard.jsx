import React from 'react';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import AlertBanner from './AlertBanner';
import MarketOverview from './MarketOverview';
import ProfitLossCard from './ProfitLossCard';
import DeployedAlgos from './DeployedAlgos';
import FeaturedAlgos from './FeaturedAlgos';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navigation */}
                <TopNavBar />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Alert Banner */}
                    <AlertBanner />

                    {/* Market Overview */}
                    <MarketOverview />

                    {/* Main Grid */}
                    <div className="px-6 mt-6 pb-6 flex flex-col lg:flex-row gap-6">
                        {/* Left Column - Profit/Loss (40%) */}
                        <div className="w-full lg:w-[45%] ">
                            <ProfitLossCard />
                        </div>

                        {/* Right Column - Deployed Algos (60%) */}
                        <div className="w-full lg:w-[55%] ">
                            <DeployedAlgos />
                        </div>
                    </div>

                    {/* Featured Algos */}
                    <FeaturedAlgos />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
