import { useState } from 'react';
import { motion } from 'framer-motion';
import { Siren, Ambulance, Flame, Shield, MapPin, Clock, ArrowRight, Phone, Radio, Building2 } from 'lucide-react';
import { emergencyVehicles } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const vehicleIcons = {
  ambulance: Ambulance,
  fire: Flame,
  police: Shield,
};

const vehicleColors = {
  ambulance: { bg: 'bg-destructive/10', text: 'text-destructive', border: 'border-destructive/30' },
  fire: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/30' },
  police: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/30' },
};

// Pune hospitals for routing
const puneHospitals = [
  { name: 'Sassoon General Hospital', area: 'Shivajinagar' },
  { name: 'Ruby Hall Clinic', area: 'Sassoon Road' },
  { name: 'Jehangir Hospital', area: 'Sassoon Road' },
  { name: 'KEM Hospital', area: 'Rasta Peth' },
  { name: 'Deenanath Mangeshkar Hospital', area: 'Erandwane' },
  { name: 'Sahyadri Hospital', area: 'Deccan' },
];

const EmergencyPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(emergencyVehicles[0]?.id);
  const activeVehicles = emergencyVehicles.filter(v => v.status === 'responding' || v.status === 'en_route');

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-display font-bold gati-gradient-text">
            Pune Emergency Response
          </h1>
          <p className="text-muted-foreground text-sm">
            Green corridor management and emergency vehicle tracking
          </p>
        </div>
        <div className="flex items-center gap-3">
          {activeVehicles.length > 0 && (
            <Badge className="bg-destructive text-destructive-foreground animate-pulse">
              <Siren className="h-3 w-3 mr-1" />
              {activeVehicles.length} Active Emergency
            </Badge>
          )}
          <Button className="gati-gradient text-white">
            <Phone className="h-4 w-4 mr-2" />
            Dial 108 / 112
          </Button>
        </div>
      </motion.div>

      {/* Active Corridors Alert */}
      {activeVehicles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 flex items-center gap-4"
        >
          <div className="p-3 rounded-full bg-destructive/20">
            <Siren className="h-6 w-6 text-destructive animate-pulse" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-destructive">Green Corridors Active in Pune</h3>
            <p className="text-sm text-muted-foreground">
              {activeVehicles.length} emergency vehicles en route. Traffic signals on FC Road, JM Road corridors adjusted.
            </p>
          </div>
          <Button variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/10">
            View Routes
          </Button>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vehicle List */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="font-display font-semibold mb-4">Emergency Vehicles</h3>
          {emergencyVehicles.map((vehicle, index) => {
            const Icon = vehicleIcons[vehicle.type];
            const colors = vehicleColors[vehicle.type];
            const isActive = vehicle.status === 'responding' || vehicle.status === 'en_route';

            return (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'gati-card p-4 cursor-pointer transition-all',
                  selectedVehicle === vehicle.id && 'ring-2 ring-primary',
                  isActive && 'border-destructive/30'
                )}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={cn('p-2.5 rounded-lg', colors.bg)}>
                    <Icon className={cn('h-5 w-5', colors.text)} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{vehicle.callSign}</span>
                      <Badge variant="outline" className={cn(
                        'text-xs capitalize',
                        isActive && 'bg-destructive/10 text-destructive border-destructive/30 animate-pulse'
                      )}>
                        {vehicle.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      <span>ETA: {vehicle.eta > 0 ? `${vehicle.eta} min` : 'Arrived'}</span>
                    </div>
                  </div>
                </div>
                {isActive && (
                  <div className="flex items-center gap-1 text-xs text-success mt-2 pt-2 border-t border-border">
                    <ArrowRight className="h-3 w-3" />
                    <span>Green corridor active via FC Road</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Map / Route Visualization */}
        <div className="lg:col-span-2">
          <Card className="gati-card h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <MapPin className="h-5 w-5 text-primary" />
                Pune Emergency Route
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] bg-muted/30 rounded-xl flex items-center justify-center border border-border relative overflow-hidden">
                {/* Simulated Pune route visualization */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--destructive))" />
                      <stop offset="100%" stopColor="hsl(var(--success))" />
                    </linearGradient>
                  </defs>
                  {/* Route: Koregaon Park → FC Road → JM Road → Sassoon Hospital */}
                  <path
                    d="M 600 100 Q 500 150 400 180 T 200 250 T 100 350"
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="4"
                    strokeDasharray="10 5"
                    className="animate-pulse"
                  />
                  {/* Vehicle marker */}
                  <circle cx="400" cy="180" r="8" fill="hsl(var(--destructive))" className="animate-pulse">
                    <animate attributeName="r" values="8;12;8" dur="1s" repeatCount="indefinite" />
                  </circle>
                  {/* Destination marker - Sassoon Hospital */}
                  <circle cx="100" cy="350" r="10" fill="hsl(var(--success))" />
                </svg>
                
                {/* Route labels */}
                <div className="absolute top-8 right-8 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                  Koregaon Park
                </div>
                <div className="absolute top-[40%] left-[45%] text-xs text-primary bg-background/80 px-2 py-1 rounded">
                  FC Road
                </div>
                <div className="absolute bottom-20 left-8 text-xs text-success bg-background/80 px-2 py-1 rounded flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  Sassoon Hospital
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs">
                  <div className="flex items-center gap-1 text-destructive">
                    <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                    PUNE-108-A Location
                  </div>
                  <div className="flex items-center gap-1 text-success">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    Destination
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-2xl font-display font-bold text-destructive">4</p>
                  <p className="text-xs text-muted-foreground">Signals Cleared</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-2xl font-display font-bold text-warning">6</p>
                  <p className="text-xs text-muted-foreground">Minutes ETA</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-2xl font-display font-bold text-success">1.8</p>
                  <p className="text-xs text-muted-foreground">km Remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pune Hospitals */}
      <Card className="gati-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display">
            <Building2 className="h-5 w-5 text-primary" />
            Major Pune Hospitals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {puneHospitals.map((hospital, index) => (
              <motion.div
                key={hospital.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="p-3 rounded-lg bg-muted/30 text-center"
              >
                <p className="font-medium text-sm">{hospital.name}</p>
                <p className="text-xs text-muted-foreground">{hospital.area}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto py-4 flex-col gap-2">
          <Radio className="h-5 w-5" />
          <span>Broadcast Alert</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex-col gap-2">
          <MapPin className="h-5 w-5" />
          <span>Clear All Routes</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex-col gap-2">
          <Siren className="h-5 w-5" />
          <span>Simulate Emergency</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex-col gap-2">
          <Shield className="h-5 w-5" />
          <span>Priority Override</span>
        </Button>
      </div>
    </div>
  );
};

export default EmergencyPage;
