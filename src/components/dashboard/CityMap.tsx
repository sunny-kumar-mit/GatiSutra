import { motion } from 'framer-motion';
import { MapPin, Maximize2, Layers } from 'lucide-react';
import { junctions, cityCenter } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

// Pune City Map visualization
export function CityMap() {
  const [selectedJunction, setSelectedJunction] = useState<string | null>(null);

  // Convert lat/lng to x/y positions for Pune map
  const getPosition = (lat: number, lng: number) => {
    const centerLat = cityCenter.lat;
    const centerLng = cityCenter.lng;
    const scale = 350; // Adjusted for Pune's spread
    
    const x = 50 + (lng - centerLng) * scale;
    const y = 50 - (lat - centerLat) * scale;
    
    return { x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="gati-card p-5 h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <h3 className="font-display font-semibold">Pune City Traffic Map</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Layers className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-success shadow-[0_0_8px_hsl(142,76%,36%)]" />
          <span className="text-muted-foreground">Clear</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-warning shadow-[0_0_8px_hsl(45,93%,47%)]" />
          <span className="text-muted-foreground">Moderate</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive shadow-[0_0_8px_hsl(0,84%,60%)]" />
          <span className="text-muted-foreground">Congested</span>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-[400px] bg-muted/30 rounded-xl overflow-hidden border border-border">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${(i + 1) * 10}%`}
                y1="0"
                x2={`${(i + 1) * 10}%`}
                y2="100%"
                stroke="currentColor"
                strokeDasharray="4 4"
              />
              <line
                x1="0"
                y1={`${(i + 1) * 10}%`}
                x2="100%"
                y2={`${(i + 1) * 10}%`}
                stroke="currentColor"
                strokeDasharray="4 4"
              />
            </g>
          ))}
        </svg>

        {/* Roads (simplified connections) */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Major road connections */}
          {junctions.slice(0, -1).map((junction, i) => {
            const pos1 = getPosition(junction.lat, junction.lng);
            const nextJunctions = junctions.slice(i + 1).filter((_, idx) => idx < 3);
            return nextJunctions.map((nextJ, idx) => {
              const pos2 = getPosition(nextJ.lat, nextJ.lng);
              const distance = Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
              if (distance > 30) return null; // Only connect nearby junctions
              return (
                <line
                  key={`road-${i}-${idx}`}
                  x1={`${pos1.x}%`}
                  y1={`${pos1.y}%`}
                  x2={`${pos2.x}%`}
                  y2={`${pos2.y}%`}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="1.5"
                  opacity={0.25}
                />
              );
            });
          })}
        </svg>

        {/* Junction markers */}
        {junctions.map((junction, index) => {
          const pos = getPosition(junction.lat, junction.lng);
          const isSelected = selectedJunction === junction.id;
          
          return (
            <motion.div
              key={junction.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.03 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              onClick={() => setSelectedJunction(isSelected ? null : junction.id)}
            >
              <div
                className={cn(
                  'w-3.5 h-3.5 rounded-full transition-all duration-300',
                  junction.status === 'green' && 'bg-success shadow-[0_0_10px_hsl(142,76%,36%)]',
                  junction.status === 'yellow' && 'bg-warning shadow-[0_0_10px_hsl(45,93%,47%)]',
                  junction.status === 'red' && 'bg-destructive shadow-[0_0_10px_hsl(0,84%,60%)] animate-pulse',
                  isSelected && 'w-5 h-5 ring-2 ring-white z-10'
                )}
              />
              
              {/* Tooltip */}
              <div className={cn(
                'absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 rounded-lg bg-popover border border-border shadow-lg whitespace-nowrap text-xs transition-all duration-200 z-20 min-w-[180px]',
                isSelected ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              )}>
                <p className="font-semibold text-sm mb-1">{junction.name}</p>
                <div className="space-y-0.5 text-muted-foreground">
                  <p>Congestion: <span className={cn(
                    'font-medium',
                    junction.congestionLevel < 50 ? 'text-success' :
                    junction.congestionLevel < 75 ? 'text-warning' : 'text-destructive'
                  )}>{junction.congestionLevel}%</span></p>
                  <p>Vehicles: {junction.vehicleCount} | Speed: {junction.avgSpeed} km/h</p>
                  <p>Wait time: ~{junction.waitTime}s</p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Area Labels */}
        <div className="absolute top-3 left-3 text-[10px] text-muted-foreground/70 font-medium">
          PCMC / Pimpri-Chinchwad
        </div>
        <div className="absolute top-3 right-3 text-[10px] text-muted-foreground/70 font-medium">
          Kharadi / Wagholi
        </div>
        <div className="absolute bottom-12 left-3 text-[10px] text-muted-foreground/70 font-medium">
          Hinjewadi IT Park
        </div>
        <div className="absolute bottom-12 right-3 text-[10px] text-muted-foreground/70 font-medium">
          Hadapsar
        </div>

        {/* City center label */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex items-center gap-1 bg-background/80 px-2 py-1 rounded-full">
          <MapPin className="h-3 w-3 text-primary" />
          Pune Smart City • 3rd Most Congested City
        </div>
      </div>
    </motion.div>
  );
}
