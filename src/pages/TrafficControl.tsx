import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrafficCone, RefreshCw, Sliders, Play, Pause, Settings2 } from 'lucide-react';
import { junctions } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const TrafficControl = () => {
  const [autoMode, setAutoMode] = useState(true);
  const [selectedJunction, setSelectedJunction] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-display font-bold gati-gradient-text">
            Traffic Control
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage traffic signals and flow across all junctions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted">
            <span className="text-sm">AI Auto Mode</span>
            <Switch checked={autoMode} onCheckedChange={setAutoMode} />
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </motion.div>

      {/* Control Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {junctions.map((junction, index) => (
          <motion.div
            key={junction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              'gati-card p-4 cursor-pointer transition-all',
              selectedJunction === junction.id && 'ring-2 ring-primary'
            )}
            onClick={() => setSelectedJunction(junction.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-sm truncate">{junction.name}</span>
              <Badge
                className={cn(
                  junction.status === 'green' && 'bg-success',
                  junction.status === 'yellow' && 'bg-warning',
                  junction.status === 'red' && 'bg-destructive'
                )}
              >
                {junction.status.toUpperCase()}
              </Badge>
            </div>

            {/* Traffic Light Visualization */}
            <div className="flex justify-center mb-4">
              <div className="bg-muted rounded-lg p-2 flex flex-col gap-2">
                <div className={cn(
                  'w-6 h-6 rounded-full transition-all',
                  junction.status === 'red' ? 'bg-destructive shadow-[0_0_12px_hsl(0,84%,60%)]' : 'bg-destructive/20'
                )} />
                <div className={cn(
                  'w-6 h-6 rounded-full transition-all',
                  junction.status === 'yellow' ? 'bg-warning shadow-[0_0_12px_hsl(45,93%,47%)]' : 'bg-warning/20'
                )} />
                <div className={cn(
                  'w-6 h-6 rounded-full transition-all',
                  junction.status === 'green' ? 'bg-success shadow-[0_0_12px_hsl(142,76%,36%)]' : 'bg-success/20'
                )} />
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Congestion</span>
                <span className="font-medium">{junction.congestionLevel}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all',
                    junction.congestionLevel < 40 ? 'bg-success' :
                    junction.congestionLevel < 70 ? 'bg-warning' : 'bg-destructive'
                  )}
                  style={{ width: `${junction.congestionLevel}%` }}
                />
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Wait: {junction.waitTime}s</span>
                <span>{junction.vehicleCount} vehicles</span>
              </div>
            </div>

            {/* Controls */}
            {!autoMode && selectedJunction === junction.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 pt-4 border-t border-border space-y-3"
              >
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-success border-success/30">
                    Green
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-warning border-warning/30">
                    Yellow
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-destructive border-destructive/30">
                    Red
                  </Button>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-2">Signal Duration</label>
                  <Slider defaultValue={[30]} max={120} step={5} />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {autoMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="gati-card p-6 text-center gati-border-glow"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-2">
            <Settings2 className="h-4 w-4 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-medium">AI Auto Mode Active</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Traffic signals are being optimized automatically based on real-time conditions.
            <br />
            Turn off Auto Mode to manually control individual junctions.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default TrafficControl;
