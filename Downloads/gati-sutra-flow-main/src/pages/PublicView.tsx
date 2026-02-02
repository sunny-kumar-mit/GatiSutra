import { motion } from 'framer-motion';
import { Users, MapPin, Clock, AlertTriangle, Wind, Navigation, Car, ExternalLink, Train } from 'lucide-react';
import { junctions, aqiData, alerts, getAQILabel } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const PublicView = () => {
  const topCongested = [...junctions].sort((a, b) => b.congestionLevel - a.congestionLevel).slice(0, 5);
  const publicAlerts = alerts.filter(a => a.isActive && (a.type === 'accident' || a.type === 'congestion' || a.type === 'event'));

  const aqiColor =
    aqiData.status === 'good' ? 'text-success' :
    aqiData.status === 'moderate' ? 'text-warning' :
    aqiData.status === 'unhealthy' ? 'text-orange-500' : 'text-destructive';

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
          <Users className="h-4 w-4" />
          <span className="text-sm font-medium">Public Information Portal</span>
        </div>
        <h1 className="text-3xl font-display font-bold gati-gradient-text mb-2">
          GatiSutra Pune Traffic
        </h1>
        <p className="text-muted-foreground">
          Real-time traffic status for Pune Smart City • 3rd Most Congested City Globally
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="gati-card p-4 text-center"
        >
          <Car className="h-6 w-6 mx-auto mb-2 text-primary" />
          <p className="text-2xl font-display font-bold">24</p>
          <p className="text-xs text-muted-foreground">Avg Speed (km/h)</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="gati-card p-4 text-center"
        >
          <Wind className={cn('h-6 w-6 mx-auto mb-2', aqiColor)} />
          <p className={cn('text-2xl font-display font-bold', aqiColor)}>{aqiData.current}</p>
          <p className="text-xs text-muted-foreground">AQI ({getAQILabel(aqiData.status)})</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="gati-card p-4 text-center"
        >
          <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-warning" />
          <p className="text-2xl font-display font-bold">{publicAlerts.length}</p>
          <p className="text-xs text-muted-foreground">Active Alerts</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="gati-card p-4 text-center"
        >
          <Clock className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-2xl font-display font-bold">33m</p>
          <p className="text-xs text-muted-foreground">Avg 10km Travel</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Hotspots */}
        <Card className="gati-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-lg">
              <MapPin className="h-5 w-5 text-destructive" />
              Pune Traffic Hotspots
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topCongested.map((junction, index) => (
              <motion.div
                key={junction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold',
                    index === 0 && 'bg-destructive text-destructive-foreground',
                    index === 1 && 'bg-warning text-warning-foreground',
                    index >= 2 && 'bg-muted text-muted-foreground'
                  )}>
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-sm">{junction.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Wait: ~{junction.waitTime}s • {junction.avgSpeed} km/h
                    </p>
                  </div>
                </div>
                <Badge className={cn(
                  junction.congestionLevel > 80 ? 'bg-destructive' :
                  junction.congestionLevel > 60 ? 'bg-warning text-warning-foreground' : 'bg-success'
                )}>
                  {junction.congestionLevel}%
                </Badge>
              </motion.div>
            ))}
            <div className="flex gap-2 mt-2">
              <Button variant="outline" className="flex-1">
                <Navigation className="h-4 w-4 mr-2" />
                Get Alternate Routes
              </Button>
              <Button variant="outline" className="flex-1">
                <Train className="h-4 w-4 mr-2" />
                Use Pune Metro
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Public Alerts */}
        <Card className="gati-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-lg">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Pune Traffic Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {publicAlerts.length > 0 ? (
              publicAlerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={cn(
                    'p-3 rounded-lg border',
                    alert.severity === 'high' || alert.severity === 'critical'
                      ? 'bg-destructive/5 border-destructive/30'
                      : 'bg-warning/5 border-warning/30'
                  )}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <Badge variant="outline" className="text-[10px] capitalize shrink-0">
                      {alert.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{alert.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {alert.location}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <AlertTriangle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No active alerts</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Pune-specific tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="gati-card p-5"
      >
        <h3 className="font-display font-semibold mb-3">🚗 Smart Commute Tips for Pune</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 rounded-lg bg-muted/30">
            <p className="font-medium mb-1">Avoid Peak Hours</p>
            <p className="text-muted-foreground text-xs">
              8-10 AM & 6-8 PM see maximum congestion, especially near Hinjewadi and Swargate.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-muted/30">
            <p className="font-medium mb-1">Use Pune Metro</p>
            <p className="text-muted-foreground text-xs">
              Purple Line connects PCMC to Swargate. Aqua Line serves Vanaz to Ramwadi corridor.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-muted/30">
            <p className="font-medium mb-1">Alternate Routes</p>
            <p className="text-muted-foreground text-xs">
              Ring Road bypasses city center. Use Katraj Bypass for Sinhagad-Hadapsar travel.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-sm text-muted-foreground pt-6 border-t border-border"
      >
        <p className="mb-2">
          <span className="font-display font-semibold gati-gradient-text">GatiSutra</span>
          {' '}— AI-Powered Smart Traffic Management for Pune
        </p>
        <p className="text-xs">
          Data shown is simulated for demonstration purposes.
          <Button variant="link" size="sm" className="text-xs h-auto p-0 ml-1">
            Report an issue <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </p>
      </motion.div>
    </div>
  );
};

export default PublicView;
