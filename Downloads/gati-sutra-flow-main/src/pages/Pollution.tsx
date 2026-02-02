import { motion } from 'framer-motion';
import { Wind, Leaf, Zap, AlertTriangle, TrendingUp, TrendingDown, Car, Factory, Train } from 'lucide-react';
import { aqiData, getAQILabel } from '@/lib/mockData';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const PollutionPage = () => {
  const aqiColor =
    aqiData.status === 'good' ? 'text-success' :
    aqiData.status === 'moderate' ? 'text-warning' :
    aqiData.status === 'unhealthy' ? 'text-orange-500' : 'text-destructive';

  // Pune-specific pollutant data
  const pollutants = [
    { label: 'PM2.5', value: aqiData.pm25, max: 100, unit: 'µg/m³', status: aqiData.pm25 > 50 ? 'high' : 'normal' },
    { label: 'PM10', value: aqiData.pm10, max: 150, unit: 'µg/m³', status: aqiData.pm10 > 100 ? 'high' : 'normal' },
    { label: 'NO₂', value: aqiData.no2, max: 100, unit: 'ppb', status: 'normal' },
    { label: 'O₃', value: aqiData.o3, max: 100, unit: 'ppb', status: 'normal' },
    { label: 'CO', value: aqiData.co, max: 5, unit: 'ppm', status: 'normal' },
  ];

  // Pune sustainability metrics
  const sustainabilityMetrics = [
    { icon: Train, label: 'Metro Ridership', value: '85K/day', trend: '+12%', positive: true },
    { icon: Car, label: 'EV Traffic Share', value: '14%', trend: '+4%', positive: true },
    { icon: Leaf, label: 'Green Zones Active', value: '6', trend: '+2', positive: true },
    { icon: Factory, label: 'Industrial Alerts', value: '3', trend: '-2', positive: true },
  ];

  // Pune AQI zones
  const puneAQIZones = [
    { area: 'Hinjewadi', aqi: 95, status: 'Moderate' },
    { area: 'Hadapsar Industrial', aqi: 142, status: 'Unhealthy for Sensitive' },
    { area: 'Koregaon Park', aqi: 78, status: 'Moderate' },
    { area: 'Shivajinagar', aqi: 88, status: 'Moderate' },
    { area: 'Katraj', aqi: 105, status: 'Unhealthy for Sensitive' },
    { area: 'Aundh', aqi: 65, status: 'Moderate' },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-display font-bold gati-gradient-text">
            Pune Pollution & Sustainability
          </h1>
          <p className="text-muted-foreground text-sm">
            Air quality monitoring and green transport initiatives
          </p>
        </div>
        <div className="flex items-center gap-3">
          {aqiData.current > 150 && (
            <Badge className="bg-destructive text-destructive-foreground">
              <AlertTriangle className="h-3 w-3 mr-1" />
              High Pollution Alert
            </Badge>
          )}
          <Button variant="outline" size="sm">
            <Wind className="h-4 w-4 mr-2" />
            View History
          </Button>
        </div>
      </motion.div>

      {/* AQI Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-1 gati-card p-6 text-center"
        >
          <Wind className={cn('h-8 w-8 mx-auto mb-4', aqiColor)} />
          <div className={cn(
            'text-6xl font-display font-bold mb-2',
            aqiColor
          )}>
            {aqiData.current}
          </div>
          <div className={cn('text-xl font-semibold mb-1', aqiColor)}>
            {getAQILabel(aqiData.status)}
          </div>
          <p className="text-sm text-muted-foreground mb-4">Pune City Average AQI</p>
          
          <div className="w-full h-3 rounded-full bg-gradient-to-r from-success via-warning via-orange-500 to-destructive mb-2">
            <div
              className="w-3 h-3 rounded-full bg-foreground border-2 border-background relative"
              style={{ marginLeft: `calc(${Math.min(aqiData.current / 3, 100)}% - 6px)` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Good</span>
            <span>Hazardous</span>
          </div>

          {aqiData.current > 100 && (
            <div className="mt-4 p-3 rounded-lg bg-warning/10 border border-warning/30">
              <p className="text-sm text-warning">
                ⚠️ Sensitive groups should limit outdoor activity
              </p>
            </div>
          )}
        </motion.div>

        {/* Pollutant Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 gati-card p-6"
        >
          <h3 className="font-display font-semibold mb-4">Pollutant Levels - Pune</h3>
          <div className="space-y-4">
            {pollutants.map((p, index) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{p.label}</span>
                    {p.status === 'high' && (
                      <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/30">
                        High
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {p.value} {p.unit}
                  </span>
                </div>
                <Progress
                  value={(p.value / p.max) * 100}
                  className={cn(
                    'h-2',
                    p.status === 'high' && '[&>div]:bg-destructive'
                  )}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pune Zone-wise AQI */}
      <Card className="gati-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display">
            <Wind className="h-5 w-5 text-primary" />
            Zone-wise AQI in Pune
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {puneAQIZones.map((zone, index) => (
              <motion.div
                key={zone.area}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className={cn(
                  'p-3 rounded-lg text-center border',
                  zone.aqi <= 50 && 'bg-success/5 border-success/20',
                  zone.aqi > 50 && zone.aqi <= 100 && 'bg-warning/5 border-warning/20',
                  zone.aqi > 100 && 'bg-destructive/5 border-destructive/20'
                )}
              >
                <p className="font-medium text-sm mb-1">{zone.area}</p>
                <p className={cn(
                  'text-xl font-display font-bold',
                  zone.aqi <= 50 && 'text-success',
                  zone.aqi > 50 && zone.aqi <= 100 && 'text-warning',
                  zone.aqi > 100 && 'text-destructive'
                )}>
                  {zone.aqi}
                </p>
                <p className="text-[10px] text-muted-foreground">{zone.status}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sustainability Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sustainabilityMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="gati-card p-5"
          >
            <div className="flex items-start justify-between">
              <div className="p-2 rounded-lg bg-success/10">
                <metric.icon className="h-5 w-5 text-success" />
              </div>
              <div className={cn(
                'flex items-center gap-1 text-xs',
                metric.positive ? 'text-success' : 'text-destructive'
              )}>
                {metric.positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {metric.trend}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-display font-bold">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pune Green Initiatives */}
      <Card className="gati-card gati-border-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display">
            <Leaf className="h-5 w-5 text-success" />
            Pune Smart City Green Initiatives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <Train className="h-5 w-5 text-success" />
                <span className="font-medium">Pune Metro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Purple & Aqua Lines reducing road traffic by 18%. More lines under construction.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-success" />
                <span className="font-medium">EV Charging Network</span>
              </div>
              <p className="text-sm text-muted-foreground">
                150+ EV charging stations across Pune. PMPML adding electric buses to fleet.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <Wind className="h-5 w-5 text-success" />
                <span className="font-medium">AQI-Based Traffic Control</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Heavy vehicles restricted during high AQI. Construction dust suppression active.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PollutionPage;
