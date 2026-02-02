import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, AlertTriangle, Sun, Cloud, CloudRain, Umbrella } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Pune-specific events
const events = [
  {
    id: 1,
    name: 'Pune Marathon 2026',
    type: 'Sports',
    date: 'Feb 16, 2026',
    time: '05:30 - 11:00',
    location: 'Swargate to University Road',
    expectedCrowds: 45000,
    trafficImpact: 'high',
    status: 'upcoming',
  },
  {
    id: 2,
    name: 'Ganesh Chaturthi Visarjan',
    type: 'Festival',
    date: 'Sep 17, 2026',
    time: '12:00 - 23:00',
    location: 'Deccan to Lakdi Pool',
    expectedCrowds: 200000,
    trafficImpact: 'high',
    status: 'upcoming',
  },
  {
    id: 3,
    name: 'Tech Summit Pune 2026',
    type: 'Conference',
    date: 'Mar 15, 2026',
    time: '09:00 - 18:00',
    location: 'Hinjewadi IT Park, Phase 2',
    expectedCrowds: 25000,
    trafficImpact: 'high',
    status: 'upcoming',
  },
  {
    id: 4,
    name: 'Sawai Gandharva Music Festival',
    type: 'Cultural',
    date: 'Dec 12, 2026',
    time: '18:00 - 23:00',
    location: 'New English School Ground, Tilak Road',
    expectedCrowds: 15000,
    trafficImpact: 'medium',
    status: 'upcoming',
  },
  {
    id: 5,
    name: 'Republic Day Parade',
    type: 'National Event',
    date: 'Jan 26, 2026',
    time: '08:00 - 11:00',
    location: 'Shivaji Nagar to Council Hall',
    expectedCrowds: 20000,
    trafficImpact: 'high',
    status: 'completed',
  },
];

// Pune weather (typically pleasant, monsoon season heavy)
const weatherForecast = [
  { day: 'Today', icon: Sun, temp: '32°C', condition: 'Sunny', impact: 'Normal traffic expected' },
  { day: 'Tomorrow', icon: Cloud, temp: '30°C', condition: 'Partly Cloudy', impact: 'Normal traffic expected' },
  { day: 'Wed', icon: CloudRain, temp: '26°C', condition: 'Heavy Rain', impact: 'Slower traffic, waterlogging risk at Swargate & Hadapsar' },
];

const EventsPage = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-display font-bold gati-gradient-text">
            Events & Weather
          </h1>
          <p className="text-muted-foreground text-sm">
            Pune city events and weather-based traffic predictions
          </p>
        </div>
        <Button className="gati-gradient text-white">
          <Calendar className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </motion.div>

      {/* Weather Forecast */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weatherForecast.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="gati-card p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">{day.day}</span>
              <day.icon className={cn(
                'h-6 w-6',
                day.condition === 'Sunny' && 'text-warning',
                day.condition === 'Partly Cloudy' && 'text-muted-foreground',
                day.condition === 'Heavy Rain' && 'text-info'
              )} />
            </div>
            <p className="text-2xl font-display font-bold mb-1">{day.temp}</p>
            <p className="text-sm text-muted-foreground mb-3">{day.condition}</p>
            <div className={cn(
              'text-xs p-2 rounded-lg',
              day.condition === 'Heavy Rain' ? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
            )}>
              {day.condition === 'Heavy Rain' && <Umbrella className="h-3 w-3 inline mr-1" />}
              {day.impact}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Events */}
      <Card className="gati-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display">
            <Calendar className="h-5 w-5 text-primary" />
            Pune City Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={cn(
                  'p-4 rounded-lg border transition-all hover:bg-muted/50',
                  event.status === 'completed' && 'opacity-60'
                )}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{event.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                      {event.status === 'completed' && (
                        <Badge variant="secondary" className="text-xs">
                          Completed
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {event.expectedCrowds.toLocaleString()} expected
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={cn(
                      'capitalize',
                      event.trafficImpact === 'high' && 'bg-destructive',
                      event.trafficImpact === 'medium' && 'bg-warning text-warning-foreground',
                      event.trafficImpact === 'low' && 'bg-success'
                    )}>
                      {event.trafficImpact} impact
                    </Badge>
                    {event.status === 'upcoming' && (
                      <Button variant="outline" size="sm">
                        Plan Routes
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Predictions for Pune */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="gati-card p-6 gati-border-glow"
      >
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <h3 className="font-display font-semibold">AI Traffic Predictions for Pune</h3>
          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
            Simulated
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
            <p className="font-medium mb-1">Ganesh Visarjan Impact</p>
            <p className="text-sm text-muted-foreground">
              Expected 85% increase in congestion from Deccan to Lakdi Pool on Sep 17.
              Alternate routes via Karve Road recommended. Traffic diversions start 10:00 AM.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
            <p className="font-medium mb-1">Monsoon Advisory</p>
            <p className="text-sm text-muted-foreground">
              Heavy rain predicted Wednesday. Waterlogging expected at Swargate underpass 
              and Hadapsar flyover. Emergency response times increased by 25%.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-info/5 border border-info/20">
            <p className="font-medium mb-1">Hinjewadi IT Rush</p>
            <p className="text-sm text-muted-foreground">
              Tech Summit on Mar 15 will add 15,000+ vehicles to Hinjewadi.
              Carpooling advisory issued. PMPML special buses deployed.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-success/5 border border-success/20">
            <p className="font-medium mb-1">Metro Route Optimization</p>
            <p className="text-sm text-muted-foreground">
              Pune Metro Purple Line reducing Hinjewadi congestion by 18%.
              Commuters advised to use Metro for IT Park travel during events.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventsPage;
