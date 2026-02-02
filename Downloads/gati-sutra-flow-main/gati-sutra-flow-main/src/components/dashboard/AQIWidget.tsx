import { motion } from 'framer-motion';
import { Wind, Droplets, Cloud, Sun, AlertTriangle } from 'lucide-react';
import { aqiData, getAQILabel } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

export function AQIWidget() {
  const aqiColor =
    aqiData.status === 'good'
      ? 'text-success'
      : aqiData.status === 'moderate'
      ? 'text-warning'
      : aqiData.status === 'unhealthy'
      ? 'text-orange-500'
      : 'text-destructive';

  const aqiBgColor =
    aqiData.status === 'good'
      ? 'bg-success/10'
      : aqiData.status === 'moderate'
      ? 'bg-warning/10'
      : aqiData.status === 'unhealthy'
      ? 'bg-orange-500/10'
      : 'bg-destructive/10';

  const pollutants = [
    { label: 'PM2.5', value: aqiData.pm25, max: 100, unit: 'µg/m³' },
    { label: 'PM10', value: aqiData.pm10, max: 150, unit: 'µg/m³' },
    { label: 'NO₂', value: aqiData.no2, max: 100, unit: 'ppb' },
    { label: 'O₃', value: aqiData.o3, max: 100, unit: 'ppb' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="gati-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold">Air Quality Index</h3>
        <Wind className={cn('h-5 w-5', aqiColor)} />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className={cn('w-20 h-20 rounded-2xl flex items-center justify-center', aqiBgColor)}>
          <span className={cn('text-3xl font-display font-bold', aqiColor)}>{aqiData.current}</span>
        </div>
        <div>
          <p className={cn('text-lg font-semibold', aqiColor)}>{getAQILabel(aqiData.status)}</p>
          <p className="text-xs text-muted-foreground">Last updated: Just now</p>
          {aqiData.current > 150 && (
            <div className="flex items-center gap-1 text-xs text-destructive mt-1">
              <AlertTriangle className="h-3 w-3" />
              Heavy vehicle restrictions active
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {pollutants.map((p) => (
          <div key={p.label}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">{p.label}</span>
              <span className="font-medium">
                {p.value} {p.unit}
              </span>
            </div>
            <Progress
              value={(p.value / p.max) * 100}
              className="h-1.5"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
