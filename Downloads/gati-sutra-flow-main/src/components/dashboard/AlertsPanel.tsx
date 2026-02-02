import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  Car,
  Wind,
  Siren,
  Calendar,
  Shield,
  ChevronRight,
} from 'lucide-react';
import { alerts, Alert, formatTimeAgo } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const alertIcons = {
  accident: Car,
  congestion: AlertTriangle,
  aqi: Wind,
  emergency: Siren,
  event: Calendar,
  rash_driving: Car,
  stolen_vehicle: Shield,
};

const severityColors = {
  low: 'bg-muted text-muted-foreground',
  medium: 'bg-warning/10 text-warning border-warning/30',
  high: 'bg-destructive/10 text-destructive border-destructive/30',
  critical: 'bg-destructive text-destructive-foreground',
};

function AlertItem({ alert, index }: { alert: Alert; index: number }) {
  const Icon = alertIcons[alert.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      className={cn(
        'p-3 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 group',
        alert.severity === 'critical' ? 'border-destructive/50 bg-destructive/5' : 'border-border'
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'p-2 rounded-lg shrink-0',
            alert.severity === 'critical'
              ? 'bg-destructive text-destructive-foreground'
              : alert.severity === 'high'
              ? 'bg-destructive/10 text-destructive'
              : alert.severity === 'medium'
              ? 'bg-warning/10 text-warning'
              : 'bg-muted text-muted-foreground'
          )}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <h4 className="font-medium text-sm truncate">{alert.title}</h4>
            <Badge
              variant="outline"
              className={cn('text-[10px] shrink-0', severityColors[alert.severity])}
            >
              {alert.severity}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">{alert.description}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-muted-foreground">{alert.location}</span>
            <span className="text-[10px] text-muted-foreground">
              {formatTimeAgo(alert.timestamp)}
            </span>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}

export function AlertsPanel() {
  const activeAlerts = alerts.filter((a) => a.isActive);
  const criticalCount = activeAlerts.filter((a) => a.severity === 'critical').length;

  return (
    <div className="gati-card p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-display font-semibold">Active Alerts</h3>
          {criticalCount > 0 && (
            <Badge className="bg-destructive text-destructive-foreground animate-pulse">
              {criticalCount} Critical
            </Badge>
          )}
        </div>
        <Badge variant="outline">{activeAlerts.length} Active</Badge>
      </div>
      <ScrollArea className="flex-1 -mr-3 pr-3">
        <div className="space-y-2">
          <AnimatePresence>
            {activeAlerts.map((alert, index) => (
              <AlertItem key={alert.id} alert={alert} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </div>
  );
}
