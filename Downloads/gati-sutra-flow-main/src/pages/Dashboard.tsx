import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Gauge,
  AlertTriangle,
  Siren,
  Wind,
  TrendingDown,
} from 'lucide-react';
import { trafficStats, aqiData } from '@/lib/mockData';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { JunctionGrid } from '@/components/dashboard/JunctionGrid';
import { AlertsPanel } from '@/components/dashboard/AlertsPanel';
import { TrafficChart } from '@/components/dashboard/TrafficChart';
import { AQIWidget } from '@/components/dashboard/AQIWidget';
import { EmergencyPanel } from '@/components/dashboard/EmergencyPanel';
import { PredictionWidget } from '@/components/dashboard/PredictionWidget';
import { CityMap } from '@/components/dashboard/CityMap';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-display font-bold gati-gradient-text">
            Traffic Control Center
          </h1>
          <p className="text-muted-foreground text-sm">
            Real-time city-wide traffic monitoring and AI-powered management
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
            Last updated: Just now
          </span>
          <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Live
          </span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Vehicles"
          value={trafficStats.totalVehicles.toLocaleString()}
          change="+12% from yesterday"
          changeType="neutral"
          icon={Car}
          index={0}
        />
        <StatsCard
          title="Average Speed"
          value={`${trafficStats.avgSpeed} km/h`}
          change="-5 km/h from peak"
          changeType="negative"
          icon={Gauge}
          iconColor="text-warning"
          index={1}
        />
        <StatsCard
          title="Active Incidents"
          value={trafficStats.totalAccidents}
          change="1 critical"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-destructive"
          index={2}
        />
        <StatsCard
          title="Green Corridors"
          value={trafficStats.greenCorridorsActive}
          change="Emergency active"
          changeType="positive"
          icon={Siren}
          iconColor="text-success"
          index={3}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map - Takes 2 columns */}
        <div className="lg:col-span-2">
          <CityMap />
        </div>
        
        {/* Alerts Panel */}
        <div className="lg:col-span-1">
          <AlertsPanel />
        </div>
      </div>

      {/* Charts and Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrafficChart />
        </div>
        <div>
          <PredictionWidget />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <JunctionGrid />
        </div>
        <div className="space-y-6">
          <AQIWidget />
          <EmergencyPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
