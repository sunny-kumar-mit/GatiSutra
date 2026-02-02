import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Gauge } from 'lucide-react';
import { junctions, Junction } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

function JunctionCard({ junction, index }: { junction: Junction; index: number }) {
  const statusColors = {
    green: 'traffic-light-green',
    yellow: 'traffic-light-yellow',
    red: 'traffic-light-red',
  };

  const congestionColor =
    junction.congestionLevel < 40
      ? 'text-success'
      : junction.congestionLevel < 70
      ? 'text-warning'
      : 'text-destructive';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="gati-card p-4 hover:gati-glow transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={cn('w-3 h-3 rounded-full', statusColors[junction.status])} />
          <span className="font-medium text-sm truncate max-w-[140px]">{junction.name}</span>
        </div>
        <Badge variant="outline" className={cn('text-xs', congestionColor)}>
          {junction.congestionLevel}%
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Car className="h-3.5 w-3.5" />
          <span>{junction.vehicleCount}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Gauge className="h-3.5 w-3.5" />
          <span>{junction.avgSpeed} km/h</span>
        </div>
        <div className="flex items-center gap-1.5 col-span-2">
          <Clock className="h-3.5 w-3.5" />
          <span>Wait: {junction.waitTime}s</span>
        </div>
      </div>

      {/* Congestion Bar */}
      <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${junction.congestionLevel}%` }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
          className={cn(
            'h-full rounded-full',
            junction.congestionLevel < 40
              ? 'bg-success'
              : junction.congestionLevel < 70
              ? 'bg-warning'
              : 'bg-destructive'
          )}
        />
      </div>
    </motion.div>
  );
}

export function JunctionGrid() {
  return (
    <div className="gati-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold">Live Junction Status</h3>
        <Badge variant="outline" className="text-xs">
          <MapPin className="h-3 w-3 mr-1" />
          {junctions.length} Junctions
        </Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {junctions.map((junction, index) => (
          <JunctionCard key={junction.id} junction={junction} index={index} />
        ))}
      </div>
    </div>
  );
}
