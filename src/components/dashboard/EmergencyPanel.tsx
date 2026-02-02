import { motion } from 'framer-motion';
import { Ambulance, Flame, Shield, MapPin, Clock, ArrowRight } from 'lucide-react';
import { emergencyVehicles, EmergencyVehicle } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const vehicleIcons = {
  ambulance: Ambulance,
  fire: Flame,
  police: Shield,
};

const vehicleColors = {
  ambulance: 'bg-destructive/10 text-destructive border-destructive/30',
  fire: 'bg-orange-500/10 text-orange-500 border-orange-500/30',
  police: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
};

const statusLabels = {
  responding: 'Responding',
  en_route: 'En Route',
  on_scene: 'On Scene',
  returning: 'Returning',
};

function VehicleCard({ vehicle, index }: { vehicle: EmergencyVehicle; index: number }) {
  const Icon = vehicleIcons[vehicle.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'p-3 rounded-lg border transition-all',
        vehicle.status === 'en_route' || vehicle.status === 'responding'
          ? 'border-destructive/30 bg-destructive/5'
          : 'border-border'
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn('p-2 rounded-lg border', vehicleColors[vehicle.type])}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium text-sm">{vehicle.callSign}</span>
            <Badge
              variant="outline"
              className={cn(
                'text-[10px]',
                vehicle.status === 'en_route' || vehicle.status === 'responding'
                  ? 'bg-destructive/10 text-destructive border-destructive/30 animate-pulse'
                  : ''
              )}
            >
              {statusLabels[vehicle.status]}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <Clock className="h-3 w-3" />
            <span>ETA: {vehicle.eta > 0 ? `${vehicle.eta} min` : 'Arrived'}</span>
          </div>
          {vehicle.status === 'en_route' && (
            <div className="flex items-center gap-1 text-xs text-success mt-1">
              <ArrowRight className="h-3 w-3" />
              <span>Green corridor active</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function EmergencyPanel() {
  const activeVehicles = emergencyVehicles.filter(
    (v) => v.status === 'responding' || v.status === 'en_route'
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="gati-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-display font-semibold">Emergency Response</h3>
          {activeVehicles.length > 0 && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
              {activeVehicles.length} Active
            </span>
          )}
        </div>
        <Badge variant="outline">{emergencyVehicles.length} Vehicles</Badge>
      </div>

      <div className="space-y-2">
        {emergencyVehicles.map((vehicle, index) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4" size="sm">
        <MapPin className="h-4 w-4 mr-2" />
        View All on Map
      </Button>
    </motion.div>
  );
}
